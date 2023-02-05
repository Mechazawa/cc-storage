let input = "";
let foo = 0;

process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data", function (buf) {
  input += buf;
});
process.stdin.on("end", function () {
  let output = "/**\n";
  const [, name = "unknown", description = "unknown"] = input.match(/^##\s+(.+)\n+((?:(?<!#).+(?:\n|$))*)/m) ?? [];
  output += " * " + description.trim() + "\n *\n";
  let params = [];
  let returns = [];
  for (let [, section, content] of input.matchAll(/^####?\s+(.*):?\s*\n+((?:[^#].+(?:\n+|$))*)/gm)) {
    content = content.trim();
    section = section.trim();

    if (["Parameters", "Parameters:", "Parameteres:", "Parameter", "Parameter:"].includes(section)) {
      for (const [, t, d] of content.matchAll(/\d+\.\s*`(\w+)\`\s*(.+)/gm)) {
        const name = (d + " foo" + String(foo)).trim().split(" ")[0];
        output += ` * @param ${d}\n`;
        params.push(`${name}: ${t}`);
        foo++;
      }
    } else if (section === "Returns" || section === "Returns:") {
      for (let [, t, d] of content.matchAll(/\d+\.\s*`(\w+)\`\s*(.+)/gm)) {
        const name = (d + " foo" + String(foo)).trim().split(" ")[0];

        if (t === "object" && d.trim() === "The object in use") {
          t = "this";
        }

        output += ` * @returns {${t}} ${d}\n`;
        returns.push(t);
      }
    } else if (section === "Usage" || section === "Usage:") {
      output += " * @usage " + content.substring(2).split("\n").join("\n * ") + "\n";
    } else {
      throw "unknown section " + section;
    }
  }
  if (returns.length === 0) {
    returns = ["void"];
  }
  output += " */\n";
  output += `${name}(${params.join(", ")}): ${returns.join(" | ")};\n`;
  console.log(output);
});

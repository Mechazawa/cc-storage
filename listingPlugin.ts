import * as ts from "typescript";
import * as tstl from "typescript-to-lua";
import { writeFileSync, mkdirSync } from "fs";
import * as path from "path";

// messy, but it doesn't need to be pretty

const outputFile = "listing.txt";

const plugin: tstl.Plugin = {
  beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
    void program;
    void emitHost;

    const outDir = options.outDir ?? "";
    let length = outDir.length;

    if (!outDir.endsWith("/") && !outDir.endsWith("\\")) {
      length += 1;
    }

    console.log(program.getSourceFiles()[0].fileName);

    const outputPath = path.join(outDir, outputFile);
    let files = [...result.map((x) => x.outputPath), ...require("glob").sync(__dirname + "/dist/**/*.lua", {})];

    files = files.map((x) => x.slice(length)).map((x) => x.replaceAll("\\", "/"));

    mkdirSync(path.dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, Array.from(new Set(files)).join("\n"));
  },
};

export default plugin;

#!/usr/bin/env fish

cd (dirname (status --current-filename))

rm index.ts{,.1} 2> /dev/null

for f in *.json
  set name (echo $f | sed s/\\.json//)
  # namespaces may contain characters an identifier cannot, so the binding is sanitised
  # while the key keeps the namespace verbatim
  set ident (string replace -ra '[^A-Za-z0-9_]' '_' $name)

  echo "import * as $ident from \"./$f\";" >> index.ts
  echo "  \"$name\": $ident," >> index.ts.1
end

echo "" >> index.ts
echo "export default {" >> index.ts
cat index.ts.1 >> index.ts
echo "}  as unknown as {[key: string]: LuaMap<string, any>[] | undefined};" >> index.ts

rm index.ts.1

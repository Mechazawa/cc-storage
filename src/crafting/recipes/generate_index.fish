#!/usr/bin/env fish

cd (dirname (status --current-filename))

rm index.ts{,.1} 2> /dev/null

for f in *.json
  set name (echo $f | sed s/\\.json//)

  echo "import $name from \"./$f\";" >> index.ts
  echo "  $name," >> index.ts.1
end

echo "" >> index.ts
echo "export default {" >> index.ts
cat index.ts.1 >> index.ts
echo "}  as unknown as {[key: string]: LuaMap<string, any>[] | undefined};" >> index.ts

rm index.ts.1
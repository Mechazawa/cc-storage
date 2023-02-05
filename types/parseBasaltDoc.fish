mkdir Basalt-gen
rm Basalt-gen/*

for d in Basalt-git/docs/objects/*/
    echo $d
    echo "declare interface "(basename $d)"{" > Basalt/(basename $d).d.ts
    for f in $d/*.md
        cat $f | node parseBasaltDoc.js >> Basalt/(basename $d).d.ts
        echo >> Basalt/(basename $d).d.ts
    end
                       end
    echo "}" >> Basalt/(basename $d).d.ts
    echo >> Basalt/(basename $d).d.ts
end

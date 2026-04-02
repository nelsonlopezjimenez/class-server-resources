for dir in */; do for file in "$dir"*; do [ -f "$file" ] && echo "=== $file ===" && cat "$file"; done; done


for dir in */; do for file in "$dir"*.js; do [ -f "$file" ] && echo "=== $file ===" && cat "$file"; done; done

for i in */; do for file in "$i"*.htm*; do [ -f "$file" ] && echo "=== $file ===" && cat "$file"; done; done


for dir in */; do for file in "$dir"*; do [ -f "$file" ] && echo "=== $file ===" && cat "$file"; done; done > output.txt

$ for i in */; do for f in "$i"*.htm*; do echo $f; done; done

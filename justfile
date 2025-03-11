set shell := ["cmd.exe", "/c"]

dev:
  npx @tailwindcss/cli -i ./input.css -o ./style.css --watch
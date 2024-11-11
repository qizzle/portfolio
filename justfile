set shell := ["cmd.exe", "/c"]

dev:
  npx tailwindcss -i ./src/input.css -o ./src/style.css --watch
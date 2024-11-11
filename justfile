set shell := ["cmd.exe", "/c"]

dev:
  npx tailwindcss -i ./input.css -o ./style.css --watch
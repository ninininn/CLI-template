## ✨ CLI for teams to build project's UI template
Since it is frustrated everytime when I start a new project-ui-template, I'm always forgetting the steps of the CLI...

Our team take Vite, Tailwindcss as tools, but always getting troble on those complex CLI steps, and always need to check the file structure of the build result.
So, I grab those troubled CLI into one package!

This CLI will create an well-done template, and also setting tailwindcss's config properly in vite's config file( so you don't need to modify the specific line any more!) 
For teams project which Tech stacks with:
- Vite
- React
- Taiwindcss

This CLI could help for building an start folder with those libraries efficiency.

(Or maybe more will be added...)

[Link in npm](https://www.npmjs.com/package/teamui-template)

## 🚀 Usage
1. Create an directory for your project
```
$ mkdir dir-name
```
2. Move into the directory
```
$ cd dir-name
```
3. Prompt the CLI to create your team project
```
$ npx teamui-template app-name
```
4. Get into the directory and run:
```
$ cd app-name
$ npm run dev
```
It will trigger Vite engine host in localhost:5173 by default!

## LICENSE
MIT

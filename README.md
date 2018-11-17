# vue-check
vscode ts-check and eslint setting files

Read [VS Code - type checking in JS files](https://code.visualstudio.com/docs/languages/javascript#_type-checking)

add // @ts-check on the top in js files
or set vscode settings "javascript.implicitProjectConfig.checkJs" to true

type below command in terminal step by step:

npm -D eslint eslint-plugin-import eslint-plugin-vue
eslint --init -> Use a popular style guide -> Standard

put .eslintrc.json, jsconfig.json, types in workspace root folder or JS res root folder.

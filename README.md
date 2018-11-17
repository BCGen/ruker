# vue-check
vscode ts-check and eslint setting files

Read [VS Code - type checking in JS files](https://code.visualstudio.com/docs/languages/javascript#_type-checking)

## choose one bwtween two options

- add ``// @ts-check`` on the top in js files.
<br>or
- add ``"javascript.implicitProjectConfig.checkJs": true`` in vscode settings

## type below command in terminal step by step:

1. npm -D eslint eslint-plugin-import eslint-plugin-vue
2. eslint --init -> Use a popular style guide -> Standard

3. put .eslintrc.json, jsconfig.json, types in workspace root folder or JS res root folder.

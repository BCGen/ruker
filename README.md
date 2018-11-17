# vue-check
vscode ts-check and eslint setting files

## js type checking in VS Code ##
[please read](https://code.visualstudio.com/docs/languages/javascript#_type-checking)

## choose one bwtween two options
- add ``// @ts-check`` on the top in js files.
- add ``"javascript.implicitProjectConfig.checkJs": true`` in vscode settings.

## type command in terminal step by step
1. npm -D eslint eslint-plugin-import eslint-plugin-vue
2. eslint --init
3. choose: Use a popular style guide 
4. choose: Standard
5. put **.eslintrc.json**, **jsconfig.json**, **types** in workspace root folder or JS res root folder

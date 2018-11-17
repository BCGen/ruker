# vue-check
vscode ts-check and eslint setting files

## Js Type Checking in VS Code ##
[PLEASE READ](https://code.visualstudio.com/docs/languages/javascript#_type-checking)

## Choose One Bwtween Two Options
- add ``// @ts-check`` on the top in js files.
- add ``"javascript.implicitProjectConfig.checkJs": true`` in vscode settings.

## Type Command in Terminal Step by Step
1. npm -D eslint eslint-plugin-import eslint-plugin-vue
2. eslint --init
3. choose: Use a popular style guide 
4. choose: Standard
5. put **.eslintrc.json**, **jsconfig.json**, **types** in workspace root folder or JS res root folder

# vue-check
VS Code ts-check and eslint setting files

## JavaScript Type Checking in VS Code ##
[PLEASE READ](https://code.visualstudio.com/docs/languages/javascript#_type-checking)

## Choose One Option
- add ``// @ts-check`` on the top of js files.
- add ``"javascript.implicitProjectConfig.checkJs": true`` in VS Code settings.

## Type Command in Terminal Step by Step
1. run ``npm init`` or ``npm init -y`` if you don't have package.json
1. npm i -D eslint eslint-plugin-import eslint-plugin-vue
2. eslint --init
3. choose: Use a popular style guide 
4. choose: Standard
5. put **.eslintrc.json**, **jsconfig.json**, **types** in workspace root folder or JS res root folder

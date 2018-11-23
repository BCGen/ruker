# vue-check
VS Code ts-check, eslint, stylelint settings.

## JavaScript Type Checking in VS Code ##
[PLEASE READ](https://code.visualstudio.com/docs/languages/javascript#_type-checking)

## Choose One Option
- add ``// @ts-check`` on the top of js files.
- add ``"javascript.implicitProjectConfig.checkJs": true`` in VS Code settings.

## Type Command in Terminal Step by Step
1. run ``npm init`` or ``npm init -y`` if you don't have package.json
1. npm i --save-dev eslint eslint-plugin-import eslint-plugin-vue stylelint-config-standard
2. npx eslint --init
3. choose: Use a popular style guide 
4. choose: Standard
5. choose: JSON
6. type: ``y`` or ``yes``
5. put all files and forder in workspace root or resources folders.

 "scripts": {
    "postinstall": "cd ../.. && npm i -S node_modules/vue-check/rules/eslint-config-bc"
  },
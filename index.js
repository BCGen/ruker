#!/usr/bin/env node
const REPO_NAME = "BCGen/bc-rule";

const colors = require("colors");
const editJsonFile = require("edit-json-file");
const program = require("commander");
const shell = require("shelljs");

program
  .version("0.0.1", "-v, --version")
  .option("-a, --all", "Javascript + Vue + Laravel")
  .option("-j, --js-only", "Javascript + Vue")
  .option("-l, --laravel-only", "Laravel")
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(makeRed);
}

startSetting();

function startSetting() {
  if (program.all) {
    javaScriptSetting();
    laravelSetting();
    finishMessage();
    return;
  }

  if (program.jsOnly) {
    javaScriptSetting();
    finishMessage();
    return;
  }

  if (program.laravelOnly) {
    laravelSetting();
    finishMessage();
    return;
  }
}

function makeRed(txt) {
  return colors.white(txt); //display the help text in red on the console
}

function javaScriptSetting() {
  console.log("初始化 package.json...");
  shell.exec(`npm init -y`);
  console.log("package.json初始化完成。");
  console.log("");

  console.log("編輯 package.json...");
  writePackageJson();
  console.log("package.json編輯完成。");

  console.log("安裝相關套件...");
  shell.exec(`npm install --no-progress`);
  console.log("套件安裝完成。");
  console.log("");

  copyFiles([
    ".vscode",
    ".eslintrc.yml",
    ".stylelintrc.yml",
    ".editorconfig",
    "tsconfig.json"
  ]);

  console.log("檢查工作區是否有 .gitignore");
  if (!shell.test("-f", "./.gitignore")) {
    console.log("複製.gitignore至工作區...");
    shell.cp("-Rf", "./node_modules/ruker-rule/gitignore", "./.gitignore");
  }

  console.log("javaScript 設定完成。");
  console.log("");
}

function laravelSetting() {
  console.log("開始 laravel 設定");
  console.log("安裝 laravel開發套件...");
  shell.exec(
    "composer require --dev barryvdh/laravel-ide-helper doctrine/dbal barryvdh/laravel-debugbar"
  );
  console.log("laravel開發套件安裝完成。");
  console.log("");

  console.log("執行 php artisan ide-helper:generate...");
  shell.exec("php artisan ide-helper:generate");

  console.log("laravel 設定完成。");
  console.log("");
}

function writePackageJson() {
  let file = editJsonFile("package.json", {
    autosave: true
  });

  console.log(`設定 devDependencies...`);
  file.set("devDependencies.ruker-rule", "github:BCGen/ruker-rule");
  file.set(
    "devDependencies.eslint-config-ruker",
    "github:BCGen/eslint-config-ruker"
  );
  file.set(
    "devDependencies.stylelint-config-ruker",
    "github:BCGen/stylelint-config-ruker"
  );
}

function copyFiles(fileName) {
  console.log(`複製${fileName}至工作區...`);
  shell.cp("-Rf", `./node_modules/ruker-rule/${fileName}`, "./");
  console.log("複製完成。");
  console.log("");

}

function finishMessage() {
  console.log("設定完成，感謝您的耐心等待");
  console.log("請重新啓動vscode後，安裝右下方推薦的套件完成設定。");
}

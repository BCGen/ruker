module.exports = {
  "extends": ["standard", "vue-lint.yml"],
  "rules": {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true
    }],
    "import/no-unresolved": 2,
    "no-new": 0,
    "space-before-function-paren": 0
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
}

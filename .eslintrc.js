module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true // 支持setup语法糖
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    semi: [2, 'never'],
    quotes: [1, 'single']
  },
  plugins: ['vue']
}

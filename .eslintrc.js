module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  plugins: ["prettier"],
  parserOptions: {},
  rules: {
    prettier: 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-unused-vars": 2,
    "no-empty": 1,
    "no-duplicate-case": 1
  }
};

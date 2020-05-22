module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": 1,
    "no-debugger": 1,
    "no-unused-vars": 2,
    "no-empty": 1,
    "no-duplicate-case": 1
  }
};

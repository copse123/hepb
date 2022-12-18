module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "eslint-plugin-import",
    "prettier",
  ],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:import/typescript",
    "plugin:eslint-comments/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};

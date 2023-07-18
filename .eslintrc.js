module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "react/state-in-constructor": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
  },
};

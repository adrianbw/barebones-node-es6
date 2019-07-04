module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017
  },
  env: {
    es6: true
  },
  extends: [
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: [
    "prettier"
  ],
  // add your custom rules here
  rules: {
    "quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "no-console": "off"
  }
}

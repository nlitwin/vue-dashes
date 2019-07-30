module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      generators: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:vue/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 3,
    }],
    'array-bracket-spacing': [1, 'never'],
    'arrow-spacing': [1],
    'block-spacing': [1, 'always'],
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-style': [1, 'last'],
    'comma-dangle': [1, 'always-multiline'],
  }
}
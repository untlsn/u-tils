module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'quotes': ['warn', 'single'],
    'semi': 'warn',
    'max-len': 'off',
    'array-element-newline': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'keyword-spacing': 'warn',
  },
};

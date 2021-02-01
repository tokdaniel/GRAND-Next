module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'import', 'prettier'],
  rules: {
    'no-restricted-imports': ['error', { patterns: ['../'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writeable',
  },
}

const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'jsx-a11y/anchor-is-valid': 'off'
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] }
    }
  ]
};

const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      'no-restricted-imports': [
        'error',
        {
          name: 'react-native-paper',
          message: 'Please import from @teatime/rnp-components instead.',
        },
      ],
    },
  },
  {
    ignores: ['.expo', 'web-build', 'cache', 'dist'],
  },
];

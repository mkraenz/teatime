import type { StorybookConfig } from '@storybook/react-vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [react(), nxViteTsPaths()],
      resolve: {
        sourceExts: [
          'js',
          'jsx',
          'json',
          'ts',
          'tsx',
          'mjs',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
        alias: {
          // replace all imports from react-native by react-native-web
          'react-native': 'react-native-web',
          // 'react-native-safe-area-context':
          //   'react-native-safe-area-context/jest/mock',
          // '@react-native/assets-registry/registry':
          //   'react-native-safe-area-context/jest/mock',
          // 'react-native-vector-icons': 'src/ugh',
        },
      },
      optimizeDeps: {
        force: true,
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
      },
    }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

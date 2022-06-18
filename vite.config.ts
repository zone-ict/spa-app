import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
        ],
      },
    }),
    macrosPlugin(),
    reactSvgPlugin(),
  ],
});

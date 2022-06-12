import macrosPlugin from 'vite-plugin-babel-macros';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./__mocks__/server.js', './__mocks__/module.js'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [macrosPlugin()],
});

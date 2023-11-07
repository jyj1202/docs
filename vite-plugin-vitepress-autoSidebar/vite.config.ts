import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      name: 'vite-plugin-auto-sidebar',
      // the proper extensions will be added
      fileName: 'vite-plugin-auto-sidebar',
    },
  },
})
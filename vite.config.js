import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index:     resolve(__dirname, 'index.html'),
        shop:      resolve(__dirname, 'shop.html'),
        origin:    resolve(__dirname, 'origin.html'),
        wholesale: resolve(__dirname, 'wholesale.html'),
        contact:   resolve(__dirname, 'contact.html'),
      }
    }
  }
})

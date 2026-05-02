import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Zid had l-partie hna
  server: {
    host: '0.0.0.0', // Darouri bach y-listen f ga3 l-interfaces
    port: 5173,      // T-akad bli hwa l-port lli m-mappy f Docker
    watch: {
      usePolling: true, // Mzyana ila knti khdam b Docker volumes f Windows/macOS
    },
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Terser 대신 기본 esbuild를 사용하여 빌드 오류 방지
    minify: 'esbuild'
  }
})

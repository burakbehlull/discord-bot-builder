import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function way(name: string){
  return path.resolve(__dirname, name)
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000
  },
  resolve: {
    alias: {
      "~": way("src"),
      "@pages": way("src/pages"),
    }
  }
})

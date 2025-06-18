import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {
  fileURLToPath
} from 'url'

const __dirname = path.dirname(fileURLToPath(
  import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/icons-material/esm': path.resolve(__dirname, 'node_modules/@mui/icons-material')

    }
  },
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled'
    ]
  }
})
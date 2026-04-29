import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `mode` comes from --mode flag.
//   default     → base "/"                   (custom domain: myshop.gilmoretechnologiesgh.com)
//   ghpages     → base "/Myshop-website/"    (project URL: gilmore-tech.github.io/Myshop-website/)
export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  base:  '/',
}))

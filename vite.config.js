import {defineConfig} from 'vite'
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'public',
  },
  esbuildOptions: {
    jsx: "automatic",
  },
  plugins: [react()],
})

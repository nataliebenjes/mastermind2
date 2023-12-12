import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  extensions: ['.js', '.jsx'],
  base: '/mastermind2/',
  plugins: [react()],
});


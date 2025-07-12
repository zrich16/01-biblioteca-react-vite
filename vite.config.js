import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   base: '/proyecto/',  // Cambia 'mi-app' por el nombre del subdirectorio
  plugins: [react()],
});
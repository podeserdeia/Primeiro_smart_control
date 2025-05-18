import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/https://podeserdeia.github.io/Primeiro_smart_control/', // Coloque o nome do seu repositório aqui
  build: {
    outDir: 'dist', // Ou qualquer outra pasta de saída que você esteja usando
    assetsDir: 'assets', // Opcional: se você tiver uma pasta de assets específica
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: [
        {
          name: 'pdf-file-loader',
          transform(src, id) {
            if (id.endsWith('.pdf')) {
              const base64 = src.toString('base64');
              return `export default "data:application/pdf;base64,${base64}"`;
            }
          },
        },
      ],
    },
  },
});

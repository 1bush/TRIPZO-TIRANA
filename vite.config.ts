import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Tripzo Tirana',
        short_name: 'Tripzo',
        description: 'Udhërrëfyesi yt për Tiranën',
        theme_color: '#ffffff',
        icons: [
          { src: 'icons.svg', sizes: '192x192', type: 'image/svg+xml' }, // përdor ikonën tënde ekzistuese[span_7](start_span)[span_7](end_span)
        ]
      }
    })
  ]
});

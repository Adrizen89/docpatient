import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "DocPatient",
        short_name: 'DP',
        description: 'L\'application pour les docteurs et les patients !',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})

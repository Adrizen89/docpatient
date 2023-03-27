import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions:{
        enabled: true
      },
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
        ],
        "prefer_related_applications": true,
          "shortcuts": [
          {
            name: "Télécharger",
            description: "Télécharger cette application",
            url: "/telecharger",
            icons: [
              {
                "src": "logo.png",
                "sizes": "512x512",
                "type": "image/png"
              }
            ]
          }
        ]
      }
    }),
  ]
})

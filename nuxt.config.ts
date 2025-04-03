import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js",
          defer: true,
        },
      ],
    },
  },
});
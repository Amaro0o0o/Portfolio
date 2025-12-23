export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@tresjs/nuxt'],
  css: ['~/assets/css/main.css']  // ❌ Remove 'aos/dist/aos.css'
})

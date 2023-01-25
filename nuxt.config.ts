// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { static: true },
    "/nosotros": { static: true },
    "/tienda/**": { swr: true },
    "/blog/**": { swr: true },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  tailwindcss: {
    viewer: false,
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  modules: ["@nuxthq/ui", '@nuxtjs/google-fonts'],
  components:[
    {
      path: '~/components',
     pathPrefix: false,
    },
  ],
  ui:{
    primary:'#266bfc',
    gray:'#eff1f7'
  },
  googleFonts: {
    download: true,
    families:{
      'Open+Sans': true,
    }
  }
})
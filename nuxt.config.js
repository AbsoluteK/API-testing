import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/i18n'
  ],
  vuetify: {
    // Vuetify module options can be added here
    // For example:
    // styles: { configFile: '~/assets/styles/variables.scss' }
  },
  eslint: {
    eslintOptions: {
      extensions: ['js', 'vue'],
      cache: false,
    },
  },
});

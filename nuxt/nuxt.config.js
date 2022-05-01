const baseUrl = process.env.BASE_URL || 'http://sphere-me.ddev.site'

export default {
  // Target full static build.
  target: 'static',

  // Ensure the root route is generated and crawled.
  generate: {
    routes: ['/']
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SphereMe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    ['@nuxt/image', { domains: [baseUrl] }],
    'druxt-site',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // DruxtJS: https://druxtjs.org
  druxt: {
    baseUrl,
    // Enable the API proxy.
    proxy: { api: true },
    // Disable deprecated Entity fields.
    entity: { components: { fields: false }},
    // Disable the router middleware (redirect support) in favour of serverless.
    router: { middleware: false },
    // Set the default theme to render Site regions.
    site: { theme: 'bartik' },
  },

  vue: {
    config: {
      // Ignore A-Frame elements.
      ignoredElements: [/^a-/]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}

import localConfig from './local.js'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Nuxt Headless CMS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    contentfulSpace: process.env.CONTENTFUL_SPACE || localConfig.env.contentfulSpace || '',
    contentfulEnv: process.env.CONTENTFUL_ENV || localConfig.env.contentfulEnv || '',
    contentfulToken: process.env.CONTENTFUL_TOKEN || localConfig.env.contentfulToken || '',
    pageContentModel: process.env.CONTENTFUL_PAGE_CONTENT_MODEL || localConfig.env.pageContentModel || '',
    configContentModel: process.env.CONTENTFUL_CONFIG_CONTENT_MODEL || localConfig.env.configContentModel || '',
    contentfulIncludeLevel: process.env.CONTENTFUL_INCLUDE_LEVEL || 10,
    contactDetailsContentModel: process.env.CONTACT_DETAILS_CONTENT_MODEL || localConfig.env.contactDetailsContentModel || ''
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  loading: {
    color: '#f0db4f',
    height: '2px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  i18n: {
    locales: [{
      code: 'en',
      iso: 'gb'
    }, {
      code: 'pl',
      iso: 'pl'
    }],
    seo: true,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          homePage: 'Home page',
          siteMap: 'Site map',
          getInTouch: 'Get in touch',
          pageNotFoundTitle: 'Page not found!',
          pageNotFoundMessage: 'The page that you\'re looking for was not found.',
          otherErrorTitle: 'Oops, something\'s gone wrong!',
          otherErrorMessage: 'It\'s not you - it\'s us. Sorry for that.'
        },
        pl: {
          homePage: 'Strona główna',
          siteMap: 'Mapa strony',
          getInTouch: 'Pozostańmy w kontakcie',
          pageNotFoundTitle: 'Nie ma takiej strony!',
          pageNotFoundMessage: 'Wybacz, ale nie znaleźlismy strony, której szukasz.',
          otherErrorTitle: 'Ups, coś poszło nie tak!',
          otherErrorMessage: 'To nie ty - to my. Wybacz.'
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://cdn.contentful.com'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Quicksand'
      }
    },
    treeShake: true,
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#f0db4f',
          secondary: '#323330',
          info: '#2196F3',
          anchor: '#f0db4f',

          // Backgrounds
          lightBackground: '#ffffff',
          darkBackground: '#141414',
          headerBackground: '#141414',
          footerBackground: '#141414'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

import dynamicRoutes from './routes/dynamicRoutes'

export default {
  target: 'static',

  head: {
    title: 'Kofe Design',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Kofe é um estúdio de design e desenvolvimento com sede em Florianópolis, Santa Catarina. Atende remotamente clientes de diferentes cidades do mundo, projetando interfaces para produtos digitais, como sistemas, plataformas, aplicativos e sites.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;600;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@next/dist/aos.css',
      },
    ],
  },

  css: [],

  plugins: [
    { src: '@/plugins/vueMq' },
    { src: '@/plugins/aos', ssr: false },
    { src: '@/plugins/gtag', ssr: false },
  ],

  components: false,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
  ],

  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'fade-left',
      'fade-right',
      'flip-left',
    ],
  },

  styleResources: {
    scss: ['@/assets/css/_variables.scss'],
  },

  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/sitemap'],

  axios: {},

  generate: {
    routes: dynamicRoutes,
  },

  router: {
    prefetchLinks: false,
  },

  sitemap: {
    hostname: 'https://kofe.design/',
    gzip: true,
    exclude: ['/admin/**'],
  },

  content: {
    liveEdit: false,
  },

  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName:
            process.env.NODE_ENV !== 'production'
              ? '[name]-[local]__[hash:base64:5]'
              : '[hash:base64:10]',
        },
      },
    },
  },
}

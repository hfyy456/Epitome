
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  //router: {
  // middleware: 'permission'
  //},

  axios: {
    prefix: '/api',
    credentials: false,
    proxy: false
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:10086/', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
    }
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/permission',
    '@/plugins/antd-ui',
    '@/plugins/request'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  serverMiddleware: [

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

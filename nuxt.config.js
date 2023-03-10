const webpack = require('webpack');
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/idenbrid-fav-icon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/fontawesome-all.css" },
      { rel: "stylesheet", href: "/css/flaticon.css" },
      { rel: "stylesheet", href: "/css/hover.css" },
      { rel: "stylesheet", href: "/css/custom-animate.css" },
      { rel: "stylesheet", href: "/plugins/glightbox/glightbox.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/rtl.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/colors/color-default.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"},


    ],

    script: [
    
      { src: "/plugins/glightbox/glightbox.min.js", body: true },
      { src: "/plugins/accordion/accordion.min.js", body: true },
      { src: "https://threejs.org/examples/js/libs/stats.min.js", body: true },
      { src: "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js", body: true },
      { src: "/plugins/glightbox/main.js", body: true },
      { src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js", body:true}

    
     ,
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2980B9', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/mixitup.js', ssr: false},
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
  ],
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

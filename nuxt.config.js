import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Fonz Music",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Comfortaa:400,500|Muli|Spartan:400,500&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Merriweather|Poppins|Raleway&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    // "@/assets/css/resetr.css",
    // "@/assets/css/common.css"
  ],

  plugins : [
    '~plugins/main-plugins'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [
  //   {
  //     src: "~/plugins/VueFlickity.js",
  //     ssr: false
  //   },
  //   {
  //     src: "~/plugins/mongoose.js",
  //     mode: "server"
  //   }
  // ],

  /*
   ** Nuxt.js modules
   */
   modules: [
     'bootstrap-vue/nuxt'
   ],
   // modules: [
     // '@/modules/main-modules'
     // BootstrapVue
   // ],
  // modules: [
  //   // modules for full static before `nuxt export` (coming in v2.12)
  //   "@/modules/static",
  //   "@/modules/crawler"
  //   // https://prismic-nuxt.js.org/
  //   // "@nuxtjs/prismic"
  // ],

  // prismic: {
  //   endpoint: "https://didiweb.cdn.prismic.io/api/v2",
  //   linkResolver: "@/plugins/link-resolver",
  //   htmlSerializer: "@/plugins/html-serializer",
  //   preview: "/_my-preview"
  // },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },

  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  }
};

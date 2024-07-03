// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  app: {
    // pageTransition: { name: "page" },
    head: {
      htmlAttrs: {
        lang: "uz",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "IlmNur",
      link: [
        {
          rel: "icon",
          href: "/logo.svg",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.ckeditor.com/ckeditor5/33.0.0/classic/ckeditor.css",
        },
      ],
      script: [
        // {
        //   src: "../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js",
        // },
        // {
        //   src: "../node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js",
        // },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#FF852E",
        },
        {
          name: "description",
          content: "Online maktab darsliklari",
        },
        {
          name: "keywords",
          content:
            // "Med Bozor, O'zbekiston, tibbiyot mahsulotlari, farmatsevtika, tibbiy asboblar, diagnostika vositalari, sog'liqni saqlash,  narxlar, mijozlarga xizmat ko'rsatish",
            "online, ilmnur, ilm nur, school",
        },
        {
          name: "canonical",
          content: "https://ilmnur.online",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "IlmNur - online maktab platformasi",
        },
        {
          property: "og:description",
          content: "O'quvchilarga sifatli bilim yetkazish",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://ilmnur.online",
        },
        {
          property: "og:image",
          content: "/logo.svg",
        },
        {
          name: "twitter:title",
          content: "IlmNur - online maktab platformasi",
        },
        {
          name: "twitter:description",
          content: "IlmNur - biz bilan online o'rganing!",
        },
        {
          name: "twitter:image",
          content: "/logo.svg",
        },
      ],
    },
  },
  css: [
    "~/assets/scss/main.scss",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  modules: [
    "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxtjs/cloudinary",
    "nuxt-swiper",
    "@element-plus/nuxt",
  ],
  // plugins: ["~/plugins/ckeditor.js"],
  // plugins: ["~/plugins/quill-editor.js"],
  plugins: [
    "~/plugins/cloudinary.js",
    // { src: '~/plugins/primevue.js', ssr: false }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    secure: true, // Use HTTPS
  },
  pages: true,
  runtimeConfig: {
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      accessControl: [
        {
          access_type: "token",
        },
      ],
    },
    public: {
      baseURL: process.env.BASE_URL,
      realtimeURL: process.env.REALTIME_URL,
    },
  },
});

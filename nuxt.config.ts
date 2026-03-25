// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_API_URL: import.meta.env.NUXT_PUBLIC_API_URL || 'http://localhost:3200'
    }
  },
  app: {
    head: {
      titleTemplate: "%s - Cozy Café",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Memberikan Solusi sesuai dengan kebutuhan bisnis anda. #MakeITeasy",
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', 'nuxt-aos', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Nunito: [400, 500, 600, 700, 800],
    },
    display: 'swap',
    preload: true, 
  },
  css: ["~/assets/tailwind.css"],
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  }
})
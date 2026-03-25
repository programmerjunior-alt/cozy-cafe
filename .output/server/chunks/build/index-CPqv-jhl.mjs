import { ref, mergeProps, defineAsyncComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useSeoMeta } from './composables-Dw5QNAHC.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';

const _imports_0 = publicAssetsURL("/images/about-cafe.jpg");
const __nuxt_component_0_lazy = defineAsyncComponent(() => import('./Slider-Ds7JNlLN.mjs').then((c) => c.default || c));
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./BackgroundSection-CMtpSxls.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./GlobalTitle-C1u4ky-s.mjs').then((c) => c.default || c));
const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./Features-CT5Wf8zW.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./Blog-BJsyweEG.mjs').then((c) => c.default || c));
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./Reservation-DfHbGpuE.mjs').then((c) => c.default || c));
const __nuxt_component_6_lazy = defineAsyncComponent(() => import('./Menu-CZSSNW6r.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const banners = ref([
      {
        content: {
          title: "Welcome to Our Café",
          subtitle: "Enjoy our cozy space with great coffee.",
          imageDekstop: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        }
      },
      {
        content: {
          title: "Freshly Baked Pastries",
          subtitle: "Taste our delicious pastries every morning.",
          imageDekstop: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        }
      },
      {
        content: {
          title: "Relax & Work",
          subtitle: "Free Wi-Fi and comfy seats for your work or study.",
          imageDekstop: "https://images.unsplash.com/photo-1484723091739-30a097e8f929"
        }
      }
    ]);
    useSeoMeta({
      title: "Home page"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyBodySlider = __nuxt_component_0_lazy;
      const _component_LazyUtilsBackgroundSection = __nuxt_component_1_lazy;
      const _component_LazyUtilsGlobalTitle = __nuxt_component_2_lazy;
      const _component_LazyBodyFeatures = __nuxt_component_3_lazy;
      const _component_LazyBodyBlog = __nuxt_component_4_lazy;
      const _component_LazyBodyReservation = __nuxt_component_5_lazy;
      const _component_LazyBodyMenu = __nuxt_component_6_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative items-center justify-center bg-orange-50/10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LazyBodySlider, {
        banners: unref(banners),
        loading: unref(loading)
      }, null, _parent));
      _push(`<div class="bg-white relative">`);
      _push(ssrRenderComponent(_component_LazyUtilsBackgroundSection, null, null, _parent));
      _push(`<div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">`);
      _push(ssrRenderComponent(_component_LazyUtilsGlobalTitle, {
        title: "About Us",
        subtitle: "Our Story",
        position: "justify-start"
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div data-aos="fade-right" data-aos-duration="1000"><p class="mt-4 text-gray-600 text-lg leading-relaxed"> What started as a dream between two coffee-loving friends has grown into a beloved neighborhood gathering spot. </p><p class="mt-4 text-gray-600 text-lg leading-relaxed"> In 2015, Sarah and Michael—two friends united by their love of exceptional coffee— decided to create a space that reflected their vision of what a café should be: warm, welcoming, and committed to quality. </p></div><div class="relative"><img${ssrRenderAttr("src", _imports_0)} alt="About Cozy Cafe" class="w-full h-auto rounded-lg shadow-md"><div class="absolute -bottom-6 -left-8 bg-[#6F4E37] text-white p-6 rounded-2xl shadow-lg"><h2 class="text-3xl font-bold">Since 2015</h2><p class="text-sm opacity-80">Serving our community</p></div></div></div></div></div><div class="bg-orange-300/5"><div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">`);
      _push(ssrRenderComponent(_component_LazyUtilsGlobalTitle, {
        title: "Where Heritage Meets Innovation",
        subtitle: "A Sanctuary for Digital Creators",
        position: "justify-center",
        class: "text-center"
      }, null, _parent));
      _push(ssrRenderComponent(_component_LazyBodyFeatures, null, null, _parent));
      _push(`</div></div><div class="bg-white relative">`);
      _push(ssrRenderComponent(_component_LazyUtilsBackgroundSection, null, null, _parent));
      _push(`<div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">`);
      _push(ssrRenderComponent(_component_LazyUtilsGlobalTitle, {
        "data-aos": "fade-in",
        title: "Crafted with Passion",
        subtitle: "Signature Offerings",
        position: "justify-center",
        class: "text-center"
      }, null, _parent));
      _push(`<h3 class="text-center">Each item on our menu is a celebration of quality ingredients and expert craftsmanship. From morning espresso to afternoon pastries.</h3>`);
      _push(ssrRenderComponent(_component_LazyBodyBlog, null, null, _parent));
      _push(`</div></div><div class="bg-orange-300/5" data-aos-duration="1000" data-aos-delay="200">`);
      _push(ssrRenderComponent(_component_LazyBodyReservation, null, null, _parent));
      _push(`</div><div class="bg-orange-300/10" data-aos-duration="1000" data-aos-delay="200">`);
      _push(ssrRenderComponent(_component_LazyBodyMenu, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CPqv-jhl.mjs.map

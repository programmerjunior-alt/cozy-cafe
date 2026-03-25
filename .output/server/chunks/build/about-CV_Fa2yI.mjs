import { defineAsyncComponent, useSSRContext } from 'vue';
import __nuxt_component_0 from './index-B0k2I-vo.mjs';
import { ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-Dw5QNAHC.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
import '../nitro/nitro.mjs';
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
import 'vue-router';
import 'perfect-debounce';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';

const __nuxt_component_0_lazy = defineAsyncComponent(() => import('./GlobalTitle-C1u4ky-s.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About us"
    });
    const items = {
      title: "About Us",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      imageLeft: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      imageRight: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      imagePhi: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    };
    const values = [
      {
        title: "Passion for Quality",
        desc: "Every cup we serve is crafted with care, using only the finest ingredients sourced from trusted suppliers.",
        icon: "icon-park-outline:like"
      },
      {
        title: "Sustainability",
        desc: "We're committed to eco-friendly practices, from our compostable packaging to our partnerships with sustainable farms..",
        icon: "mdi:leaf"
      },
      {
        title: "Community First",
        desc: "Brew & Bloom is more than a café—it's a gathering place where neighbors become friends.",
        icon: "ri:user-community-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyUtilsGlobalTitle = __nuxt_component_0_lazy;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><div class="bg-[#FFFCFB]"><div class="w-full h-[400px]"><div class="relative flex flex-col items-center justify-center h-full text-center px-4 bg-cover bg-center" style="${ssrRenderStyle({
        backgroundImage: `url(${items.image})`
      })}"><div class="absolute inset-0 bg-gray-900/20"></div><h2 class="relative text-[28px] md:text-[32px] font-bold text-white">${ssrInterpolate(items.title)}</h2></div></div></div><div class="pt-8 pb-9 md:pt-20 md:pb-40 w-full bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url('/background.png')` })}"><section class="max-w-[960px] mx-auto px-4 py-3"><div class="flex flex-col gap-8 md:gap-[60px]"><div class="flex flex-col items-center justify-center gap-8"><div class="flex w-full mx-auto items-center justify-center">`);
      _push(ssrRenderComponent(_component_LazyUtilsGlobalTitle, {
        title: "About Us",
        position: "justify-center",
        subtitle: "Our Story"
      }, null, _parent));
      _push(`</div><div class="ql-editor"><p class="text-[#1C1917]">What started as a dream between two coffee-loving friends has grown into a beloved neighborhood gathering spot.</p></div><div class="w-full flex items-center justify-between h-[168px] sm:h-[456px] gap-3 md:gap-12"><div class="flex-1 h-full rounded-lg" style="${ssrRenderStyle({
        background: `url(${items.imageLeft}) 50% 50% / cover`
      })}"></div><div class="flex-[4] h-full rounded-lg" style="${ssrRenderStyle({
        background: `url(${items?.imageRight}) 50% 50% / cover`
      })}"></div></div><div class="flex flex-col gap-4 mx-auto"><h3 class="text-xl font-medium text-[#1C1917]"> How It All Began </h3><p class="text-[#1C1917] leading-[150%] max-w-7xl mx-auto"> In 2015, Sarah and Michael—two friends united by their love of exceptional coffee— decided to create a space that reflected their vision of what a café should be: warm, welcoming, and committed to quality. They found the perfect spot in a historic building on Coffee Lane, with exposed brick walls and large windows that flood the space with natural light. With their own hands, they restored the space, preserving its character while adding modern touches. The name &quot;Brew &amp; Bloom&quot; came from their belief that great coffee helps people bloom— sparking creativity, fostering connections, and providing a moment of peace in busy lives. </p></div></div><div class="rounded-lg"><img${ssrRenderAttr("src", items.imagePhi)} alt="socie" class="rounded-lg h-52 w-full object-cover"></div><div class="flex flex-col gap-4 mx-auto"><h3 class="text-xl font-medium text-[#1C1917]"> Our Coffee Philosophy </h3><p class="text-[#1C1917] leading-[150%] max-w-7xl mx-auto"> We believe that exceptional coffee starts at the source. That&#39;s why we work directly with farmers in Ethiopia, Colombia, Guatemala, and beyond, ensuring fair prices and sustainable growing practices. Our beans are roasted in small batches at a local roastery, guaranteeing freshness in every cup. Whether you prefer a bold espresso or a smooth pour-over, we&#39;re dedicated to making your perfect cup. </p></div></div></section><div class="bg-white relative pt-8"><div class="max-w-[960px] justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">`);
      _push(ssrRenderComponent(_component_LazyUtilsGlobalTitle, {
        "data-aos": "fade-in",
        title: "What We Stand For",
        subtitle: "Our Values",
        position: "justify-center",
        class: "text-center"
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-center py-6"><!--[-->`);
      ssrRenderList(values, (value, i) => {
        _push(`<div class="flex flex-col items-center text-center border border-orange-100 p-6 rounded-xl hover:scale-105 transition"><div class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 mb-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          "client:only": "",
          name: value.icon,
          class: "w-8 h-8 text-cafe-brown"
        }, null, _parent));
        _push(`</div><h3 class="font-bold text-lg mb-2">${ssrInterpolate(value.title)}</h3><p class="text-gray-600">${ssrInterpolate(value.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CV_Fa2yI.mjs.map

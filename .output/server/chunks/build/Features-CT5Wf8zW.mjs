import __nuxt_component_0 from './index-B0k2I-vo.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './composables-Dw5QNAHC.mjs';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'perfect-debounce';

const _sfc_main = {
  __name: "BodyFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        title: "Artisan Coffee",
        icon: "game-icons:coffee-cup",
        description: "Sourced from single-origin beans and roasted to perfection. Every cup tells a story of craftsmanship."
      },
      {
        title: "High-Speed WiFi",
        icon: "uil:wifi",
        description: "Fiber-optic internet built for productivity. Upload, download, and video call without interruption."
      },
      {
        title: "Curated Ambiance",
        icon: "mdi:family-room-outline",
        description: "Thoughtfully designed spaces with comfortable seating, warm lighting, and a creative atmosphere."
      },
      {
        title: "Fresh Cuisine",
        icon: "simple-icons:justeat",
        description: "From flaky croissants to hearty sandwiches—crafted daily with premium ingredients."
      },
      {
        title: "Extended Hours",
        icon: "icon-park-outline:time",
        description: "Open early for your morning brew and late for night owls. Your schedule, our priority."
      },
      {
        title: "Community Hub",
        icon: "ri:user-community-fill",
        description: "Connect with fellow creators, entrepreneurs, and coffee lovers in an inspiring environment."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))}><div class="max-w-7xl mx-auto p-8 border-8 rounded-2xl border-cafe-orange/50"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(features, (feature, idx) => {
        _push(`<div class="bg-white border border-cafe-orange/30 rounded-2xl shadow p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"><div class="flex items-center justify-center w-16 h-16 mb-4 bg-cafe-brown rounded-full">`);
        _push(ssrRenderComponent(_component_icon, {
          name: feature.icon,
          class: "w-8 h-8 text-white"
        }, null, _parent));
        _push(`</div><h3 class="text-xl md:text-2xl font-semibold mb-2 text-gray-900">${ssrInterpolate(feature.title)}</h3><p class="text-gray-500 text-sm md:text-base">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/body/Features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Features-CT5Wf8zW.mjs.map

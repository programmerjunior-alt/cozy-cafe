import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "w-full bg-cover bg-center relative py-24",
    style: { "background-image": "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1')" }
  }, _attrs))}><div class="absolute inset-0 bg-black/40"></div><div class="relative z-10 max-w-3xl mx-auto text-center px-4"><h2 class="text-4xl md:text-5xl font-bold text-white mb-4"> Reserve Your Table Now! </h2><p class="text-lg md:text-xl text-white mb-6"> Book your spot and enjoy exclusive perks at our café. </p><button class="px-8 py-3 bg-cafe-brown hover:bg-cafe-brown text-white font-bold rounded-lg transition transform hover:scale-105 active:scale-95"> Reserve Now </button></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/body/Reservation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Reservation = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "BodyReservation" });

export { Reservation as default };
//# sourceMappingURL=Reservation-DfHbGpuE.mjs.map

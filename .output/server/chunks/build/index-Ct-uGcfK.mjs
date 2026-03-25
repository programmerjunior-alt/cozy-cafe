import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-Dw5QNAHC.mjs';
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
import '@iconify/vue';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Reservations" });
    const name = ref("");
    const email = ref("");
    const date = ref("");
    const time = ref("");
    const people = ref(1);
    const note = ref("");
    const successMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FFFCFB] min-h-screen" }, _attrs))}><div class="w-full h-[300px] bg-cover bg-center flex items-center justify-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')" })}"><div class="bg-black/10 p-6 rounded"><h2 class="text-3xl text-white font-bold text-center">Reservations</h2><p class="text-white text-center mt-2">Book your table at our café</p></div></div><div class="max-w-6xl mx-auto px-4 py-12"><h3 class="text-2xl font-bold mb-8 text-[#4B2E2B] text-center">Reserve Your Table</h3><div class="grid md:grid-cols-2 gap-8"><form class="space-y-4 bg-white p-6 rounded-xl shadow"><div><label class="block mb-1 font-medium text-gray-700">Full Name *</label><input type="text"${ssrRenderAttr("value", name.value)} placeholder="Your Name" class="w-full px-4 py-3 rounded-xl border" required></div><div><label class="block mb-1 font-medium text-gray-700">Email *</label><input type="email"${ssrRenderAttr("value", email.value)} placeholder="you@example.com" class="w-full px-4 py-3 rounded-xl border" required></div><div class="grid grid-cols-2 gap-4"><div><label class="block mb-1 font-medium text-gray-700">Date *</label><input type="date"${ssrRenderAttr("value", date.value)} class="w-full px-4 py-3 rounded-xl border" required></div><div><label class="block mb-1 font-medium text-gray-700">Time *</label><input type="time"${ssrRenderAttr("value", time.value)} class="w-full px-4 py-3 rounded-xl border" required></div></div><div><label class="block mb-1 font-medium text-gray-700">Number of People *</label><input type="number"${ssrRenderAttr("value", people.value)} min="1" class="w-full px-4 py-3 rounded-xl border" required></div><div><label class="block mb-1 font-medium text-gray-700">Notes / Requests</label><textarea placeholder="Optional notes" class="w-full px-4 py-3 rounded-xl border resize-none" rows="3">${ssrInterpolate(note.value)}</textarea></div><button type="submit" class="w-full bg-[#6F4E37] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#5a3b2b] transition"> Reserve Table </button>`);
      if (successMessage.value) {
        _push(`<p class="mt-4 text-green-600 font-medium text-center">${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><div class="space-y-6"><div class="bg-white p-6 rounded-xl shadow space-y-4"><h4 class="text-xl font-bold text-[#4B2E2B]">Visit Our Café</h4><p>We&#39;re located in the heart of the Artisan District. Stop by for a cup of coffee and experience our warm hospitality firsthand.</p><div><h5 class="font-semibold text-gray-700">Address</h5><p>123 Coffee Lane, Artisan District<br>New York, NY 10001</p></div><div><h5 class="font-semibold text-gray-700">Phone</h5><p>(555) 123-4567</p></div><div><h5 class="font-semibold text-gray-700">Email</h5><p>hello@brewandbloom.com</p></div><div><h5 class="font-semibold text-gray-700">Hours</h5><p>Monday - Friday: 7:00 AM - 8:00 PM<br>Saturday - Sunday: 8:00 AM - 9:00 PM</p></div></div><div class="rounded-xl overflow-hidden shadow"><iframe class="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.989562288002!2d-74.00482168459312!3d40.71277617933109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a199b2e024b%3A0x123456789abcdef!2s123%20Coffee%20Lane%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reservations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Ct-uGcfK.mjs.map

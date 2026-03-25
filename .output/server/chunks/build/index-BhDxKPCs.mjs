import { ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { ref, computed, useSSRContext } from 'vue';
import { u as useSeoMeta } from './composables-Dw5QNAHC.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'vue-router';
import '@iconify/vue';

const perPage = 6;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Gallery" });
    const selectedImage = ref(null);
    const gallery = ref([
      { id: 1, title: "Cozy Interior", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1", category_id: "1", featured: true },
      { id: 2, title: "Morning Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", category_id: "2", featured: false },
      { id: 3, title: "Pastry Corner", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e", category_id: "3", featured: false },
      { id: 4, title: "Outdoor Seating", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", category_id: "1", featured: true },
      { id: 5, title: "Desserts & Drinks", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c", category_id: "3", featured: false },
      { id: 6, title: "Happy Customers", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", category_id: "4", featured: false },
      { id: 7, title: "Barista at Work", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", category_id: "2", featured: false },
      { id: 8, title: "Cafe Corner", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929", category_id: "1", featured: true }
    ]);
    const categories = [
      { id: "5", name: "All" },
      { id: "1", name: "Interior" },
      { id: "2", name: "Coffee" },
      { id: "3", name: "Pastry" },
      { id: "4", name: "Customers" }
    ];
    const activeCategory = ref("5");
    const search = ref("");
    const currentPage = ref(1);
    const filteredGallery = computed(() => {
      let data = gallery.value;
      if (activeCategory.value !== "5") {
        data = data.filter((e) => e.category_id === activeCategory.value);
      }
      if (search.value) {
        data = data.filter(
          (e) => e.title.toLowerCase().includes(search.value.toLowerCase())
        );
      }
      return data;
    });
    const totalPages = computed(
      () => Math.ceil(filteredGallery.value.length / perPage)
    );
    const paginatedGallery = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      return filteredGallery.value.slice(start, start + perPage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#FFFCFB]" data-v-399c0320><div class="w-full h-[300px] bg-cover bg-center flex items-center justify-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')" })}" data-v-399c0320><div class="bg-black/10 p-6 rounded" data-v-399c0320><h2 class="text-3xl text-white font-bold text-center" data-v-399c0320>Our Gallery</h2><p class="text-white text-center mt-2" data-v-399c0320>A glimpse of our café ambiance and delights</p></div></div><div class="max-w-[1200px] mx-auto px-4 py-12" data-v-399c0320><div class="flex justify-center mb-6" data-v-399c0320><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search gallery..." class="w-full max-w-xl px-4 py-3 rounded-xl border" data-v-399c0320></div><div class="flex justify-center mb-8" data-v-399c0320><div class="flex gap-4 flex-wrap justify-center" data-v-399c0320><!--[-->`);
      ssrRenderList(categories, (item) => {
        _push(`<button class="${ssrRenderClass([activeCategory.value === item.id ? "bg-[#6F4E37] text-white" : "bg-gray-200 text-gray-700", "px-5 py-2 rounded-full transition"])}" data-v-399c0320>${ssrInterpolate(item.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6" style="${ssrRenderStyle({ "min-height": "calc(2 * 15rem + 1.5rem)" })}" data-v-399c0320><!--[-->`);
      ssrRenderList(paginatedGallery.value, (item) => {
        _push(`<div class="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:scale-[1.02] cursor-pointer h-60" data-v-399c0320><img${ssrRenderAttr("src", item.image)} class="w-full h-60 object-cover" data-v-399c0320>`);
        if (item.featured) {
          _push(`<span class="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow" data-v-399c0320> Featured </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute bottom-0 w-full bg-black/40 text-white p-3 text-center" data-v-399c0320>${ssrInterpolate(item.title)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center items-center gap-4 mt-8" data-v-399c0320><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50" data-v-399c0320> Prev </button><span data-v-399c0320> Page ${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50" data-v-399c0320> Next </button></div></div></div>`);
      if (selectedImage.value) {
        _push(`<div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50" data-v-399c0320><div class="relative max-w-3xl w-full mx-4" data-v-399c0320><button class="absolute top-2 right-2 text-white text-2xl font-bold z-50" data-v-399c0320> × </button><img${ssrRenderAttr("src", selectedImage.value.image)} class="w-full max-h-[90vh] object-contain rounded" data-v-399c0320><p class="text-white text-center mt-2" data-v-399c0320>${ssrInterpolate(selectedImage.value.title)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galleries/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-399c0320"]]);

export { index as default };
//# sourceMappingURL=index-BhDxKPCs.mjs.map

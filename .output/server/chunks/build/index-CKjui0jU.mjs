import { ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
    useSeoMeta({ title: "Menu" });
    const items = {
      title: "What We Offer",
      subtitle: "Our Menu",
      desc: "From freshly brewed coffee to homemade pastries and hearty meals.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    };
    const menus = ref([
      { id: 1, title: "Signature Latte", price: "$5.50", desc: "Smooth espresso", category_id: "4", popular: true, discount: 10, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
      { id: 2, title: "Cappuccino", price: "$5.00", desc: "Classic foam coffee", category_id: "4", popular: true, discount: 0, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
      { id: 3, title: "Americano", price: "$4.00", desc: "Strong black coffee", category_id: "4", popular: true, discount: 0, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
      { id: 4, title: "Mocha", price: "$5.80", desc: "Chocolate coffee", category_id: "4", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571" },
      { id: 5, title: "Pancake", price: "$7.00", desc: "Sweet breakfast", category_id: "2", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d" },
      { id: 6, title: "Omelette", price: "$6.50", desc: "Egg breakfast", category_id: "2", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2" },
      { id: 7, title: "French Toast", price: "$7.50", desc: "Sweet toast", category_id: "2", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929" },
      { id: 8, title: "Croissant", price: "$4.00", desc: "Buttery pastry", category_id: "2", popular: true, discount: 2, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },
      { id: 9, title: "Burger", price: "$10.00", desc: "Juicy beef burger", category_id: "3", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
      { id: 10, title: "Sandwich", price: "$8.00", desc: "Quick lunch", category_id: "3", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb" },
      { id: 11, title: "Pasta", price: "$11.00", desc: "Italian pasta", category_id: "3", popular: false, discount: 1, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e" },
      { id: 12, title: "Salad", price: "$9.00", desc: "Healthy greens", category_id: "3", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
      { id: 13, title: "Cheesecake", price: "$6.00", desc: "Creamy dessert", category_id: "5", popular: false, discount: 20, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307" },
      { id: 14, title: "Brownies", price: "$5.00", desc: "Chocolate cake", category_id: "5", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
      { id: 15, title: "Ice Cream", price: "$4.50", desc: "Cold dessert", category_id: "5", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc" },
      { id: 16, title: "Donut", price: "$3.50", desc: "Sweet donut", category_id: "5", popular: true, discount: 0, image: "https://images.unsplash.com/photo-1505253213348-cd54c92b37d6" }
    ]);
    const categories = [
      { id: "1", name: "All Items" },
      { id: "2", name: "Breakfast" },
      { id: "3", name: "Lunch" },
      { id: "4", name: "Drinks" },
      { id: "5", name: "Desserts" }
    ];
    const activeCategory = ref("1");
    const search = ref("");
    const currentPage = ref(1);
    const filteredMenus = computed(() => {
      let data = menus.value;
      if (activeCategory.value !== "1") {
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
      () => Math.ceil(filteredMenus.value.length / perPage)
    );
    const paginatedMenus = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      return filteredMenus.value.slice(start, start + perPage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#FFFCFB]" data-v-27206eb3><div class="w-full h-[400px]" data-v-27206eb3><div class="relative flex flex-col items-center justify-center h-full text-center px-4 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url(${items.image})` })}" data-v-27206eb3><div class="absolute inset-0 bg-black/30" data-v-27206eb3></div><h2 class="relative text-white text-xl" data-v-27206eb3>${ssrInterpolate(items.title)}</h2><h2 class="relative text-3xl font-bold text-white" data-v-27206eb3>${ssrInterpolate(items.subtitle)}</h2><p class="text-white max-w-xl" data-v-27206eb3>${ssrInterpolate(items.desc)}</p></div></div><div class="max-w-[1200px] mx-auto px-4 py-12" data-v-27206eb3><div class="flex justify-center" data-v-27206eb3><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search menu..." class="w-full max-w-2xl px-4 py-3 rounded-xl border" data-v-27206eb3></div><div class="flex justify-center mt-6" data-v-27206eb3><div class="flex gap-4 flex-wrap justify-center" data-v-27206eb3><!--[-->`);
      ssrRenderList(categories, (item) => {
        _push(`<button class="${ssrRenderClass([activeCategory.value === item.id ? "bg-[#6F4E37] text-white" : "bg-gray-200 text-gray-700", "px-5 py-2 rounded-full transition"])}" data-v-27206eb3>${ssrInterpolate(item.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid md:grid-cols-3 gap-6 mt-8" data-v-27206eb3><!--[-->`);
      ssrRenderList(paginatedMenus.value, (item) => {
        _push(`<div class="bg-[#f5ebdd] rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:scale-[1.02]" data-v-27206eb3><img${ssrRenderAttr("src", item.image)} class="w-full h-[180px] object-cover" data-v-27206eb3><div class="p-4 relative" data-v-27206eb3>`);
        if (item.popular) {
          _push(`<span class="absolute -top-2 left-2 bg-cafe-orange text-white text-xs font-bold px-2 py-1 rounded-full shadow" data-v-27206eb3> Popular </span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.discount && item.discount > 0) {
          _push(`<span class="absolute -top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow" data-v-27206eb3> -${ssrInterpolate(item.discount)}% </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between items-center" data-v-27206eb3><h3 class="font-semibold text-lg text-[#4B2E2B]" data-v-27206eb3>${ssrInterpolate(item.title)}</h3><div class="flex justify-between items-center mt-1" data-v-27206eb3><span class="text-[#6F4E37] font-medium" data-v-27206eb3>`);
        if (item.discount && item.discount > 0) {
          _push(`<!--[--><span class="text-gray-400 line-through" data-v-27206eb3>${ssrInterpolate(item.price)}</span><span class="text-[#6F4E37] font-medium" data-v-27206eb3> $${ssrInterpolate((parseFloat(item.price.slice(1)) * (1 - item.discount / 100)).toFixed(2))}</span><!--]-->`);
        } else {
          _push(`<span class="text-[#6F4E37] font-medium" data-v-27206eb3>${ssrInterpolate(item.price)}</span>`);
        }
        _push(`</span></div></div><p class="text-sm text-gray-600 mt-2" data-v-27206eb3>${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center items-center gap-4 mt-8" data-v-27206eb3><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50" data-v-27206eb3> Prev </button><span data-v-27206eb3> Page ${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50" data-v-27206eb3> Next </button></div></div></div><section class="bg-cafe-cream/50 mx-auto text-center py-12" data-v-27206eb3><p data-v-27206eb3><span class="font-semibold" data-v-27206eb3>Note :</span> Prices and availability may vary. Please inform our staff of any allergies or dietary requirements.</p></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menus/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27206eb3"]]);

export { index as default };
//# sourceMappingURL=index-CKjui0jU.mjs.map

import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "BodyBlog",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Artisan Espresso",
        subtitle: "Single-origin beans roasted to perfection",
        badge: "☕ Coffee",
        badgeColor: "bg-orange-400 text-black",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      },
      {
        title: "Premium Blends",
        subtitle: "Hand-selected leaves from around the world",
        badge: "🍵 Tea",
        badgeColor: "bg-cyan-400 text-black",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
      },
      {
        title: "Fresh Baked Daily",
        subtitle: "Croissants, muffins, and sweet delights",
        badge: "🥐 Pastries",
        badgeColor: "bg-orange-400 text-black",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 py-12" }, _attrs))}><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(`<div class="relative rounded-2xl overflow-hidden group cursor-pointer"><img${ssrRenderAttr("src", item.image)} class="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"><div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div><div class="absolute bottom-0 p-6 text-white z-10"><span class="${ssrRenderClass([item.badgeColor, "inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full mb-3"])}">${ssrInterpolate(item.badge)}</span><h3 class="text-2xl font-semibold">${ssrInterpolate(item.title)}</h3><p class="text-sm text-white/80 mt-1">${ssrInterpolate(item.subtitle)}</p><div class="mt-4 text-orange-400 font-medium flex items-center gap-2"> Explore Menu → </div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-10"><button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md"> 📖 View Full Menu </button></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/body/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Blog-BJsyweEG.mjs.map

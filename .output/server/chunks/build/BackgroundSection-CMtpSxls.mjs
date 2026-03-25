import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "UtilsBackgroundSection",
  __ssrInlineRender: true,
  setup(__props) {
    const circles = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute inset-0 -z-0 overflow-hidden opacity-20" }, _attrs))}><!--[-->`);
      ssrRenderList(circles.value, (c, i) => {
        _push(`<div class="${ssrRenderClass([[c.size, c.color], "absolute rounded-full animate-float"])}" style="${ssrRenderStyle({
          top: c.top + "%",
          left: c.left + "%",
          animationDelay: i * 200 + "ms"
        })}"></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/BackgroundSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BackgroundSection-CMtpSxls.mjs.map

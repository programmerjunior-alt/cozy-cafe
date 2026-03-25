import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main = {
  __name: "UtilsGlobalTitle",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Please Enter Title"
    },
    subtitle: {
      type: String
    },
    position: {
      type: String,
      default: "justify-start"
    },
    justify: {
      type: String,
      default: "start"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "global-title" }, _attrs))} data-v-b3e7b930><div class="${ssrRenderClass([__props.position, "subtitle flex items-center"])}" data-v-b3e7b930><img${ssrRenderAttr("src", _imports_0)} class="w-5" data-v-b3e7b930><div class="text-xl font-light" data-v-b3e7b930>${ssrInterpolate(__props.title)}</div></div>`);
      if (__props.subtitle) {
        _push(`<h2 class="${ssrRenderClass([`text-${__props.justify}`, "font-semibold text-2xl text-slate-500"])}" data-v-b3e7b930>${ssrInterpolate(__props.subtitle)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/GlobalTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GlobalTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3e7b930"]]);

export { GlobalTitle as default };
//# sourceMappingURL=GlobalTitle-C1u4ky-s.mjs.map

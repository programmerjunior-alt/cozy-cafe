import { reactive, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useSeoMeta } from './composables-Dw5QNAHC.mjs';
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

const _sfc_main$1 = {
  __name: "UtilsFAQItem",
  __ssrInlineRender: true,
  props: {
    question: String,
    answer: String,
    isOpen: Boolean,
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-b-[#E7E5E4] overflow-hidden" }, _attrs))} data-v-02ed3bf2><button class="w-full text-left py-2 flex items-center justify-between" data-v-02ed3bf2><div class="flex items-center" data-v-02ed3bf2><span class="pr-2 py-1 rounded-sm text-base text-orange-300 shrink-0" data-v-02ed3bf2> Q${ssrInterpolate(__props.index + 1)}</span><span class="text-base text-gray-500" data-v-02ed3bf2>${ssrInterpolate(__props.question)}</span></div><svg class="w-4 h-4 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-02ed3bf2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", __props.isOpen ? "M20 12H4" : "M12 4v16m8-8H4")} data-v-02ed3bf2></path></svg></button>`);
      if (__props.isOpen) {
        _push(`<div data-aos="flip-up" class="answer p-6 text-sm text-[#1C1917] bg-[#FAF7F6]" data-v-02ed3bf2>${__props.answer ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/FAQItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FAQItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-02ed3bf2"]]);
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqGrouped = reactive([
      {
        id: 1,
        name: "General",
        icon_style: "icon_3",
        faqs: [
          { id: 1, question: "What are your opening hours?", answer: "We are open Monday - Friday: 7:00 AM - 8:00 PM, Saturday - Sunday: 8:00 AM - 9:00 PM.", isOpen: false },
          { id: 2, question: "Where is Brew & Bloom located?", answer: "123 Coffee Lane, Artisan District, New York, NY 10001.", isOpen: false }
        ]
      },
      {
        id: 2,
        name: "Menu & Orders",
        icon_style: "icon_4",
        faqs: [
          { id: 3, question: "Do you offer vegetarian options?", answer: "Yes! We have a variety of vegetarian dishes and beverages.", isOpen: false },
          { id: 4, question: "Can I make a reservation?", answer: "Absolutely! You can <strong>reserve a table online</strong>.", isOpen: false },
          { id: 5, question: "Do you provide delivery?", answer: "Currently, we only offer in-house service.", isOpen: false }
        ]
      }
    ]);
    const faqPending = ref(false);
    const toggleOpens = (faqId) => {
      faqGrouped.forEach((cat) => {
        cat.faqs.forEach((f) => {
          if (f.id === faqId) {
            f.isOpen = !f.isOpen;
          } else {
            f.isOpen = false;
          }
        });
      });
    };
    useSeoMeta({
      title: "FAQ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FFFCFB]" }, _attrs))} data-v-cddc8a5b><div class="max-w-[1200px] mx-auto px-4 sm:px-0 pt-[80px] pb-[120px]" data-v-cddc8a5b><h1 class="text-2xl font-bold" data-v-cddc8a5b> FAQ </h1><div class="mx-auto rounded-md py-8" data-v-cddc8a5b>`);
      if (faqPending.value) {
        _push(`<div data-v-cddc8a5b><div class="relative h-[688px]" data-v-cddc8a5b><div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" data-v-cddc8a5b><div class="flex items-center gap-2 text-green-600" data-v-cddc8a5b><svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" data-v-cddc8a5b><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" class="opacity-25" data-v-cddc8a5b></circle><path d="M4 12a8 8 0 018-8" fill="currentColor" class="opacity-75" data-v-cddc8a5b></path></svg><span class="text-green-600" data-v-cddc8a5b>FAQ</span></div></div></div></div>`);
      } else {
        _push(`<div data-v-cddc8a5b><!--[-->`);
        ssrRenderList(faqGrouped, (category, i) => {
          _push(`<div class="category" data-v-cddc8a5b><div class="flex items-center justify-start gap-2 mb-4" data-v-cddc8a5b><div class="flex items-center gap-2" data-v-cddc8a5b><img${ssrRenderAttr("src", `/faq/${category.icon_style}.png`)} class="w-6" data-v-cddc8a5b><h2 class="text-xl" data-v-cddc8a5b>${ssrInterpolate(category.name)}</h2></div></div><!--[-->`);
          ssrRenderList(category.faqs, (item, index) => {
            _push(ssrRenderComponent(FAQItem, {
              key: item.id,
              index,
              question: item.question,
              answer: item.answer,
              isOpen: item.isOpen,
              onToggle: ($event) => toggleOpens(item.id)
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cddc8a5b"]]);

export { faq as default };
//# sourceMappingURL=faq-DuFKxTDA.mjs.map

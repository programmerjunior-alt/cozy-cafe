import __nuxt_component_0$1 from './index-B0k2I-vo.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-B1r0mb9_.mjs';
import { ref, provide, computed, unref, watch, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useRoute, _ as _export_sfc } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-Dw5QNAHC.mjs';
import 'unhead/plugins';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'perfect-debounce';
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

const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.09961%204.70001V6.1004H14.9004V4.70001H16.0996V6.1004H19.5996V19.2996H4.40039V6.1004H7.90039V4.70001H9.09961ZM5.59961%2018.1004H18.4004V11.2996H5.59961V18.1004ZM5.59961%2010.1004H18.4004V7.29962H16.0996V8.70001H14.9004V7.29962H9.09961V8.70001H7.90039V7.29962H5.59961V10.1004Z'%20fill='%23fff'/%3e%3cpath%20d='M7.5%2013.2H10.5V16.2H7.5V13.2Z'%20fill='%23fff'/%3e%3c/svg%3e";
const arrowWhite = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.9834%2015.3486L6.15137%209.49902L7.00098%208.65137L11.9873%2013.6514L17.002%208.6543L17.8486%209.50391L11.9834%2015.3486Z'%20fill='%23fff'/%3e%3c/svg%3e";
const arrowDark = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.9834%2015.3486L6.15137%209.49902L7.00098%208.65137L11.9873%2013.6514L17.002%208.6543L17.8486%209.50391L11.9834%2015.3486Z'%20fill='%231C1917'/%3e%3c/svg%3e";
publicAssetsURL("/cozy-color.png");
const _sfc_main$2 = {
  __name: "TopHeader",
  __ssrInlineRender: true,
  props: {
    isHomeTop: Boolean
  },
  setup(__props) {
    const isDrawerOpen = ref(false);
    const activeMenu = ref(null);
    ref(false);
    const openMenus = ref({
      about: false
    });
    useRouter();
    const menus = [
      {
        text: "About Us",
        key: "about",
        items: [
          { text: "Cozy Café", href: "/about" },
          { text: "FAQ", href: "/faq" }
        ]
      },
      { text: "Menu", key: "menu", href: "/menus" },
      { text: "Gallery", key: "gallery", href: "/galleries" },
      { text: "Contact", key: "contact", href: "/contact" }
    ];
    watch(isDrawerOpen, (val) => {
      if (val) (void 0).body.classList.add("overflow-hidden");
      else (void 0).body.classList.remove("overflow-hidden");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header-container flex items-center justify-between px-4 md:px-8 py-2 md:py-4 bg-transparent", { "!text-[#1C1917]": !__props.isHomeTop }]
      }, _attrs))} data-v-9d3abaa5><div class="flex items-center gap-4" data-v-9d3abaa5><button class="md:hidden flex items-center" data-v-9d3abaa5>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:menu-alt-1",
        class: ["w-6 h-6 text-white", { "!text-[#1C1917]": !__props.isHomeTop }]
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center pr-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.isHomeTop ? "/cozy-white.png" : "/cozy-color.png")} alt="COZY CAFE" class="w-[72px] md:w-[80px]" data-v-9d3abaa5${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: __props.isHomeTop ? "/cozy-white.png" : "/cozy-color.png",
                alt: "COZY CAFE",
                class: "w-[72px] md:w-[80px]"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex gap-6 text-sm font-medium" data-v-9d3abaa5><!--[-->`);
      ssrRenderList(menus, (menu, index) => {
        _push(`<div class="relative" data-v-9d3abaa5>`);
        if (!menu.items?.length) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: menu.href,
            class: ["text-white hover:text-white", { "!text-[#1C1917]": !__props.isHomeTop }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(menu.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(menu.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<button class="${ssrRenderClass([{ "!text-[#1C1917]": !__props.isHomeTop }, "flex items-center gap-1 text-white hover:text-white"])}" data-v-9d3abaa5>${ssrInterpolate(menu.text)} <img${ssrRenderAttr("src", __props.isHomeTop ? unref(arrowWhite) : unref(arrowDark))} alt="arrow" class="w-4 h-4" data-v-9d3abaa5></button>`);
        }
        if (menu.items?.length && activeMenu.value === index) {
          _push(`<div class="absolute left-0 mt-2 w-48 bg-white rounded shadow-md z-50" data-v-9d3abaa5><!--[-->`);
          ssrRenderList(menu.items, (item) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: item.href,
              to: item.href,
              class: "block px-4 py-2 text-gray-700 hover:bg-orange-100"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav></div><div class="flex items-center gap-4" data-v-9d3abaa5><button class="flex items-center gap-2 px-4 md:px-6 py-1.5 bg-cafe-brown hover:bg-cafe-coffee text-white rounded-full" data-v-9d3abaa5><span data-v-9d3abaa5>Reservation</span><img${ssrRenderAttr("src", _imports_0$1)} alt="date" class="w-6 h-6" data-v-9d3abaa5></button></div>`);
      if (isDrawerOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex" data-v-9d3abaa5><div class="fixed inset-0 bg-black bg-opacity-40" data-v-9d3abaa5></div><div class="fixed inset-0 flex z-50" data-v-9d3abaa5><div class="fixed inset-0 bg-black bg-opacity-40" data-v-9d3abaa5></div><div class="fixed inset-0 flex flex-col bg-white overflow-auto transition-transform duration-300" data-v-9d3abaa5><button class="absolute top-4 right-4 p-2" data-v-9d3abaa5>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:close-rounded",
          class: "w-6 h-6 cafe-brown"
        }, null, _parent));
        _push(`</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: ($event) => isDrawerOpen.value = false,
          class: "flex items-center px-6 py-4 mt-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", __props.isHomeTop ? "/cozy-color.png" : "/cozy-color.png")} alt="Cozy Cafe" class="w-20 h-auto" data-v-9d3abaa5${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: __props.isHomeTop ? "/cozy-color.png" : "/cozy-color.png",
                  alt: "Cozy Cafe",
                  class: "w-20 h-auto"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<nav class="mt-6 flex flex-col" data-v-9d3abaa5><!--[-->`);
        ssrRenderList(menus, (menu) => {
          _push(`<div data-v-9d3abaa5><div class="flex justify-between items-center px-6 py-4 border-b border-gray-200 cursor-pointer" data-v-9d3abaa5><span data-v-9d3abaa5>${ssrInterpolate(menu.text)}</span>`);
          if (menu.items?.length) {
            _push(`<span data-v-9d3abaa5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:add",
              class: ["w-4 h-4 transition-transform duration-300", { "rotate-45": openMenus.value[menu.key] }]
            }, null, _parent));
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (menu.items?.length && openMenus.value[menu.key]) {
            _push(`<div class="flex flex-col bg-gray-50" data-v-9d3abaa5><!--[-->`);
            ssrRenderList(menu.items, (child) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: child.label,
                to: child.href || "#",
                class: "pl-12 py-3 border-b border-gray-200",
                onClick: ($event) => isDrawerOpen.value = false
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(child.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(child.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav><div class="mt-auto px-6 py-4" data-v-9d3abaa5><button class="w-full bg-cafe-brown text-white rounded-full py-3 flex items-center justify-center gap-2" data-v-9d3abaa5><span data-v-9d3abaa5>Reservation</span><img${ssrRenderAttr("src", _imports_0$1)} alt="date" class="w-6 h-6" data-v-9d3abaa5></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/top/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9d3abaa5"]]);
const _imports_0 = publicAssetsURL("/cozy-white.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-cafe-brown text-white p-4" }, _attrs))}><div class="max-w-7xl mx-auto pt-12 mb-4"><div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-6"><div class="flex flex-col gap-6 md:col-span-2"><div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-2"><img${ssrRenderAttr("src", _imports_0)} alt="Cozy Cofe" class="w-24 mb-2 md:mb-0"><div class="pl-0 md:pl-2"><span class="font-semibold">Brew &amp; Bloom</span><p class="italic text-sm md:text-base"> A cozy corner where great coffee meets warm hospitality. <br class="hidden md:block"> Come for the brew, stay for the community. </p></div></div><div><span class="font-bold">Connect With Us</span><div class="flex gap-2 mt-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "line-md:instagram",
    class: "w-8 h-8"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "line-md:facebook",
    class: "w-8 h-8"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "line-md:tiktok",
    class: "w-8 h-8"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "line-md:linkedin",
    class: "w-8 h-8"
  }, null, _parent));
  _push(`</div></div><div class="text-sm md:text-base"> © 2026 Cozy Café. All rights reserved </div></div><div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"><div><span class="font-semibold">Contacts</span><div class="flex gap-2 pt-2 items-start"><div class="bg-white flex items-center rounded-lg p-2 shrink-0">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "line-md:phone-call-loop",
    class: "w-6 h-6 text-cafe-coffee"
  }, null, _parent));
  _push(`</div><div class="flex flex-col leading-tight text-sm"><span class="font-semibold">Call Center</span><span>(555) 123-4567</span></div></div><div class="flex gap-2 pt-2 items-start"><div class="bg-white flex items-center rounded-lg p-2 shrink-0">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "line-md:email",
    class: "w-6 h-6 text-cafe-coffee"
  }, null, _parent));
  _push(`</div><div class="flex flex-col leading-tight text-sm"><span class="font-semibold">Email</span><span>hello@brewandbloom.com</span></div></div><div class="flex gap-2 pt-2 items-start"><div class="bg-white flex items-center rounded-lg p-2 shrink-0">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:baseline-whatsapp",
    class: "w-6 h-6 text-cafe-coffee"
  }, null, _parent));
  _push(`</div><div class="flex flex-col leading-tight text-sm"><span class="font-semibold">WhatsApp</span><span>(555) 123-4567</span></div></div></div><div><span class="font-semibold">Quick Links</span><ul class="mt-2 space-y-2 text-sm"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Menus`);
      } else {
        return [
          createTextVNode("Menus")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/galleries",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/reservations",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Reservation`);
      } else {
        return [
          createTextVNode("Reservation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><span class="font-semibold">We’re Open</span><ul class="mt-2 space-y-2 text-sm"><li>Mon - Fri: 7:00 AM - 8:00 PM</li><li>Sat - Sun: 8:00 AM - 9:00 PM</li></ul></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const headerRef = ref();
    provide("headerRef", headerRef);
    const lastScrollY = ref(0);
    const isHome = computed(() => route.name === "index");
    const isHomeTop = computed(
      () => lastScrollY.value === 0 && route.name === "index"
    );
    const isScrollY0 = computed(() => lastScrollY.value === 0);
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopHeader = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[--><header class="${ssrRenderClass([{
        isHomeTop: !unref(isHomeTop),
        isHome: unref(isHome),
        isScrollY0: unref(isScrollY0)
      }, "my-header"])}">`);
      _push(ssrRenderComponent(_component_TopHeader, {
        ref_key: "headerRef",
        ref: headerRef,
        isHomeTop: unref(isHomeTop)
      }, null, _parent));
      _push(`</header><main class="mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CEyCR8p3.mjs.map

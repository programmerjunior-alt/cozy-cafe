import { computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
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

const _imports_0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012L10.8457%2016.3955L11.748%2015.6045L9.11914%2012.5996H17.7969V11.4004H9.11914L11.748%208.39551L10.8457%207.60449L7%2012Z'%20fill='%231C1917'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.7969%2012L13.9512%2016.3955L13.0488%2015.6045L15.6777%2012.5996H7V11.4004H15.6777L13.0488%208.39551L13.9512%207.60449L17.7969%2012Z'%20fill='%231C1917'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "BodySlider",
  __ssrInlineRender: true,
  props: {
    banners: { type: Array, default: [] },
    loading: Boolean
  },
  setup(__props) {
    const props = __props;
    const banners = computed(() => props.banners || []);
    const currentSlide = ref(0);
    const swiperRef = ref(null);
    const isMounted = ref(false);
    const canLoop = computed(() => props.banners.length > 1);
    const autoplayOpts = computed(
      () => canLoop.value ? { delay: 2e3, disableOnInteraction: false } : false
    );
    const onSwiperInit = (s) => {
      swiperRef.value = s;
    };
    const onSlideChange = () => {
      if (swiperRef.value) currentSlide.value = swiperRef.value.realIndex;
    };
    const goPrev = () => swiperRef.value?.slidePrev();
    const goNext = () => swiperRef.value?.slideNext();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sbar-slider-container" }, _attrs))} data-v-92383678>`);
      if (props.loading) {
        _push(`<div class="loading-container" data-v-92383678><div class="loading-wrapper" data-v-92383678><div class="loading-spinner" data-v-92383678><div class="spinner-content" data-v-92383678><svg class="spinner-icon" viewBox="0 0 24 24" aria-hidden="true" data-v-92383678><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" class="spinner-circle" data-v-92383678></circle><path d="M4 12a8 8 0 018-8" fill="currentColor" class="spinner-path" data-v-92383678></path></svg></div></div></div></div>`);
      } else {
        _push(ssrRenderComponent(unref(Swiper), {
          modules: [unref(Autoplay), unref(EffectFade)],
          effect: "fade",
          fadeEffect: { crossFade: true },
          speed: 2e3,
          loop: "",
          autoplay: autoplayOpts.value,
          rewind: canLoop.value,
          "allow-touch-move": canLoop.value,
          onSlideChange,
          onSwiper: onSwiperInit,
          class: "swiper-container"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(banners.value, (slide, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="slide-content" data-v-92383678${_scopeId2}><div class="inner-image" style="${ssrRenderStyle(
                        isMounted.value ? {
                          backgroundImage: `url(${slide.content.imageDekstop})`
                        } : {}
                      )}" data-v-92383678${_scopeId2}></div><div class="slide-overlay" data-v-92383678${_scopeId2}></div><h2 class="slide-title" data-v-92383678${_scopeId2}>${ssrInterpolate(slide?.content?.title)}</h2><p class="slide-subtitle" data-v-92383678${_scopeId2}>${slide?.content?.subtitle ?? ""}</p></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "slide-content" }, [
                          createVNode("div", {
                            class: "inner-image",
                            style: isMounted.value ? {
                              backgroundImage: `url(${slide.content.imageDekstop})`
                            } : {}
                          }, null, 4),
                          createVNode("div", { class: "slide-overlay" }),
                          createVNode("h2", { class: "slide-title" }, toDisplayString(slide?.content?.title), 1),
                          createVNode("p", {
                            class: "slide-subtitle",
                            innerHTML: slide?.content?.subtitle
                          }, null, 8, ["innerHTML"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (banners.value.length > 1) {
                _push2(`<div class="slider-controls" data-v-92383678${_scopeId}><div class="slide-counter" data-v-92383678${_scopeId}><span data-v-92383678${_scopeId}>${ssrInterpolate(currentSlide.value + 1)}</span><span data-v-92383678${_scopeId}>/</span><span data-v-92383678${_scopeId}>${ssrInterpolate(banners.value.length)}</span></div><div class="control-divider" data-v-92383678${_scopeId}></div><div class="navigation-buttons" data-v-92383678${_scopeId}><button class="nav-button" data-v-92383678${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="prev" class="nav-icon" data-v-92383678${_scopeId}></button><button class="nav-button" data-v-92383678${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="prev" class="nav-icon" data-v-92383678${_scopeId}></button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(banners.value, (slide, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "slide-content" }, [
                        createVNode("div", {
                          class: "inner-image",
                          style: isMounted.value ? {
                            backgroundImage: `url(${slide.content.imageDekstop})`
                          } : {}
                        }, null, 4),
                        createVNode("div", { class: "slide-overlay" }),
                        createVNode("h2", { class: "slide-title" }, toDisplayString(slide?.content?.title), 1),
                        createVNode("p", {
                          class: "slide-subtitle",
                          innerHTML: slide?.content?.subtitle
                        }, null, 8, ["innerHTML"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                banners.value.length > 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "slider-controls"
                }, [
                  createVNode("div", { class: "slide-counter" }, [
                    createVNode("span", null, toDisplayString(currentSlide.value + 1), 1),
                    createVNode("span", null, "/"),
                    createVNode("span", null, toDisplayString(banners.value.length), 1)
                  ]),
                  createVNode("div", { class: "control-divider" }),
                  createVNode("div", { class: "navigation-buttons" }, [
                    createVNode("button", {
                      onClick: goPrev,
                      class: "nav-button"
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "prev",
                        class: "nav-icon"
                      })
                    ]),
                    createVNode("button", {
                      onClick: goNext,
                      class: "nav-button"
                    }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "prev",
                        class: "nav-icon"
                      })
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/body/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92383678"]]);

export { Slider as default };
//# sourceMappingURL=Slider-Ds7JNlLN.mjs.map

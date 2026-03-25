import { hasInjectionContext, inject, ref, watchEffect, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated } from 'vue';
import { b as useNuxtApp } from './server.mjs';
import { FlatMetaPlugin } from 'unhead/plugins';
import { walkResolver } from 'unhead/utils';
import { h as headSymbol, V as VueResolver } from '../routes/renderer.mjs';

// @__NO_SIDE_EFFECTS__
function injectHead$1() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
// @__NO_SIDE_EFFECTS__
function useHead$1(input, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead$1();
  return head.ssr ? head.push(input || {}, options) : /* @__PURE__ */ clientUseHead(head, input, options);
}
// @__NO_SIDE_EFFECTS__
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}
// @__NO_SIDE_EFFECTS__
function useSeoMeta$1(input = {}, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead$1();
  head.use(FlatMetaPlugin);
  const { title, titleTemplate, ...meta } = input;
  return /* @__PURE__ */ useHead$1({
    title,
    titleTemplate,
    _flatMeta: meta
  }, options);
}

function injectHead(nuxtApp) {
  const nuxt = nuxtApp || useNuxtApp();
  return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = options.head || injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}
function useSeoMeta(input, options = {}) {
  const head = options.head || injectHead(options.nuxt);
  return useSeoMeta$1(input, { head, ...options });
}

export { useHead as a, useSeoMeta as u };
//# sourceMappingURL=composables-Dw5QNAHC.mjs.map

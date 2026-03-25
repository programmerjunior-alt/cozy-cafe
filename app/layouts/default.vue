<script setup>
const headerRef = ref();
provide("headerRef", headerRef);

const lastScrollY = ref(0);
const isHome = computed(() => route.name === "index");
const isHomeTop = computed(
  () => lastScrollY.value === 0 && route.name === "index"
);
const isScrollY0 = computed(() => lastScrollY.value === 0);
const route = useRoute();

const handleScroll = async () => {
  const currentScrollY = window.scrollY;
  lastScrollY.value = currentScrollY;
};

onBeforeMount(async () => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
});
</script>
<template>
    <header
    class="my-header"
        :class="{
            isHomeTop: !isHomeTop,
            isHome: isHome,
            isScrollY0: isScrollY0,
        }"
    >
        <TopHeader ref="headerRef" :isHomeTop="isHomeTop" />
    </header>
    <main class="mx-auto">
        <slot />
    </main>
    <footer>
      <Footer />
    </footer>
</template>

<style>
.my-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  border-bottom: .5px solid #e7e5e4;
  transition: all 0.3s ease-in-out;
}
.isHome {
  position: fixed;
}
.isHome.isScrollY0 {
  border: none;
}
.isHomeTop {
  background-color: white;
}
</style>

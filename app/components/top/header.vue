<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import arrowWhite from '~/assets/icons/FFFFFF/arrow-bottom.svg';
import arrowDark from '~/assets/icons/1C1917/arrow-bottom.svg';
import logoColor from '/cozy-color.png';
// Props
const props = defineProps({
  isHomeTop: Boolean,
});

// State
const isDrawerOpen = ref(false);
const activeMenu = ref(null);
const menuLang = ref(false);
const openMenus = ref({
  about: false
});

// Router
const router = useRouter();

// Menu Definitions
const menus = [
  {
    text: "About Us",
    key: "about",
    items: [
      { text: "Cozy Café", href: "/about" },
      { text: "FAQ", href: "/faq" },
    ],
  },
  { text: "Menu", key: "menu", href: "/menus" },
  { text: "Gallery", key: "gallery", href: "/galleries" },
  { text: "Contact", key: "contact", href: "/contact" }
];

// Watch drawer open to control body overflow
watch(isDrawerOpen, (val) => {
  if (val) document.body.classList.add("overflow-hidden");
  else document.body.classList.remove("overflow-hidden");
});

// Functions
const toggleMenu = (key) => {
  openMenus.value[key] = !openMenus.value[key];
};

const openMenu = (index) => {
  activeMenu.value = index;
};

const closeMenu = () => {
  activeMenu.value = null;
};

const changeLang = async (lang) => {
  isDrawerOpen.value = false;
  menuLang.value = false;
  // setLocale(lang) // implement sesuai i18n kamu
};

const handleLink = (href) => {
  isDrawerOpen.value = false;
  router.push(href);
};

const handleReservation = () => {
  router.push("/reservations");
};
</script>

<template>
  <header
    class="header-container flex items-center justify-between px-4 md:px-8 py-2 md:py-4 bg-transparent"
    :class="{ '!text-[#1C1917]': !isHomeTop }"
  >
    <!-- Logo & Hamburger -->
    <div class="flex items-center gap-4">
      <!-- Hamburger mobile -->
      <button
        class="md:hidden flex items-center"
        @click="isDrawerOpen = true"
      >
        <Icon name="heroicons-outline:menu-alt-1" class="w-6 h-6 text-white" :class="{ '!text-[#1C1917]': !isHomeTop }"/>
        <!-- <img src="~/assets/icons/menu.svg" alt="menu" class="w-6 h-6" /> -->
      </button>

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center pr-8">
        <img
          :src="isHomeTop ? '/cozy-white.png' : '/cozy-color.png'"
          alt="COZY CAFE"
          class="w-[72px] md:w-[80px]"
        />
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <div
          v-for="(menu, index) in menus"
          :key="menu.key"
          class="relative"
          @mouseenter="menu.items?.length && openMenu(index)"
          @mouseleave="menu.items?.length && closeMenu()"
        >
          <NuxtLink
            v-if="!menu.items?.length"
            :to="menu.href"
            class="text-white hover:text-white"
            :class="{ '!text-[#1C1917]': !isHomeTop }"
          >
            {{ menu.text }}
          </NuxtLink>

          <button
            v-else
            class="flex items-center gap-1 text-white hover:text-white"
            :class="{ '!text-[#1C1917]': !isHomeTop }"
          >
            {{ menu.text }}
            <img
              :src="isHomeTop ? arrowWhite : arrowDark"
              alt="arrow"
              class="w-4 h-4"
            />
          </button>

          <!-- Dropdown -->
          <div
            v-if="menu.items?.length && activeMenu === index"
            class="absolute left-0 mt-2 w-48 bg-white rounded shadow-md z-50"
          >
            <NuxtLink
              v-for="item in menu.items"
              :key="item.href"
              :to="item.href"
              class="block px-4 py-2 text-gray-700 hover:bg-orange-100"
            >
              {{ item.text }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>

    <!-- Actions: Language & Reservation -->
    <div class="flex items-center gap-4">

      <!-- Reservation button -->
      <button
        class="flex items-center gap-2 px-4 md:px-6 py-1.5 bg-cafe-brown hover:bg-cafe-coffee text-white rounded-full"
        @click="handleReservation"
      >
        <span>Reservation</span>
        <img src="~/assets/icons/FFFFFF/date.svg" alt="date" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div
        v-if="isDrawerOpen"
        class="fixed inset-0 z-50 flex"
        >
        <!-- Overlay -->
        <div
            class="fixed inset-0 bg-black bg-opacity-40"
            @click="isDrawerOpen = false"
        ></div>

        <!-- Drawer Fullscreen -->
        <div class="fixed inset-0 flex z-50">
            <!-- Overlay -->
            <div
                class="fixed inset-0 bg-black bg-opacity-40"
                @click="isDrawerOpen = false"
            ></div>

            <!-- Drawer Fullscreen -->
            <div class="fixed inset-0 flex flex-col bg-white overflow-auto transition-transform duration-300">
                <!-- Close Button -->
                <button
                class="absolute top-4 right-4 p-2"
                @click="isDrawerOpen = false"
                >
                <Icon name="material-symbols:close-rounded" class="w-6 h-6 cafe-brown"/>
                </button>

                <!-- Logo -->
                <NuxtLink to="/" @click="isDrawerOpen = false" class="flex items-center px-6 py-4 mt-6">
                <img
                    :src="isHomeTop ? '/cozy-color.png' : '/cozy-color.png'"
                    alt="Cozy Cafe"
                    class="w-20 h-auto"
                />
                </NuxtLink>

                <!-- Navigation -->
                <nav class="mt-6 flex flex-col">
                    <div v-for="menu in menus" :key="menu.key">
                        <!-- Menu utama -->
                        <div
                        class="flex justify-between items-center px-6 py-4 border-b border-gray-200 cursor-pointer"
                        @click="menu.items?.length ? toggleMenu(menu.key) : handleLink(menu.href)"
                        >
                        <span>{{ menu.text }}</span>

                        <!-- Arrow jika ada children -->
                        <span v-if="menu.items?.length">
                            <Icon
                            name="material-symbols:add"
                            class="w-4 h-4 transition-transform duration-300"
                            :class="{ 'rotate-45': openMenus[menu.key] }"
                            />
                        </span>
                        </div>

                        <!-- Submenu -->
                        <div
                        v-if="menu.items?.length && openMenus[menu.key]"
                        class="flex flex-col bg-gray-50"
                        >
                        <NuxtLink
                            v-for="child in menu.items"
                            :key="child.label"
                            :to="child.href || '#'"
                            class="pl-12 py-3 border-b border-gray-200"
                            @click="isDrawerOpen = false"
                        >
                            {{ child.text }}
                        </NuxtLink>
                        </div>
                    </div>
                </nav>

                <!-- Footer / Reservation -->
                <div class="mt-auto px-6 py-4">
                <button
                    class="w-full bg-cafe-brown text-white rounded-full py-3 flex items-center justify-center gap-2"
                    @click="handleReservation"
                >
                    <span>Reservation</span>
                    <img
                    src="~/assets/icons/FFFFFF/date.svg"
                    alt="date"
                    class="w-6 h-6"
                    />
                </button>
                </div>
            </div>
            </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  max-width: 1200px;
  margin: auto;
  height: 88px;
}
@media (max-width: 768px) {
  .header-container {
    max-width: 100%;
    height: 64px;
  }
}
</style>
<script setup>
import { ref, computed } from "vue";

useSeoMeta({ title: "Gallery" });
const selectedImage = ref(null);

const openImage = (item) => {
  selectedImage.value = item;
};

const closeModal = () => {
  selectedImage.value = null;
};
// DATA GALLERY
const gallery = ref([
  { id: 1, title: "Cozy Interior", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1", category_id: "1", featured: true },
  { id: 2, title: "Morning Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", category_id: "2", featured: false },
  { id: 3, title: "Pastry Corner", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e", category_id: "3", featured: false },
  { id: 4, title: "Outdoor Seating", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", category_id: "1", featured: true },
  { id: 5, title: "Desserts & Drinks", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c", category_id: "3", featured: false },
  { id: 6, title: "Happy Customers", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", category_id: "4", featured: false },
  { id: 7, title: "Barista at Work", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", category_id: "2", featured: false },
  { id: 8, title: "Cafe Corner", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929", category_id: "1", featured: true },
]);

// CATEGORIES
const categories = [
  { id: "5", name: "All" },
  { id: "1", name: "Interior" },
  { id: "2", name: "Coffee" },
  { id: "3", name: "Pastry" },
  { id: "4", name: "Customers" },
  
];

const activeCategory = ref("5");
const search = ref("");
const currentPage = ref(1);
const perPage = 6;

// HANDLE TAB
const handleTab = (val) => {
  activeCategory.value = val.id;
  currentPage.value = 1;
};

// FILTERED GALLERY
const filteredGallery = computed(() => {
  let data = gallery.value;

  if (activeCategory.value !== "5") {
    data = data.filter(e => e.category_id === activeCategory.value);
  }

  if (search.value) {
    data = data.filter(e =>
      e.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  return data;
});

// PAGINATION
const totalPages = computed(() =>
  Math.ceil(filteredGallery.value.length / perPage)
);

const paginatedGallery = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredGallery.value.slice(start, start + perPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>

<template>
  <div class="bg-[#FFFCFB]">

    <!-- HERO -->
    <div class="w-full h-[300px] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')">
      <div class="bg-black/10 p-6 rounded">
        <h2 class="text-3xl text-white font-bold text-center">Our Gallery</h2>
        <p class="text-white text-center mt-2">A glimpse of our café ambiance and delights</p>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-4 py-12">

      <!-- SEARCH -->
      <div class="flex justify-center mb-6">
        <input
          v-model="search"
          type="text"
          placeholder="Search gallery..."
          class="w-full max-w-xl px-4 py-3 rounded-xl border"
        />
      </div>

      <!-- TABS -->
      <div class="flex justify-center mb-8">
        <div class="flex gap-4 flex-wrap justify-center">
          <button
            v-for="item in categories"
            :key="item.id"
            @click="handleTab(item)"
            class="px-5 py-2 rounded-full transition"
            :class="activeCategory === item.id
              ? 'bg-[#6F4E37] text-white'
              : 'bg-gray-200 text-gray-700'"
          >
            {{ item.name }}
          </button>
        </div>
      </div>

      <!-- GALLERY GRID -->
      <Transition name="fade" mode="out-in">
        <div
          :key="activeCategory + search + currentPage"
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          style="min-height: calc(2 * 15rem + 1.5rem);">

          <div
            v-for="item in paginatedGallery"
            :key="item.id"
            class="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:scale-[1.02] cursor-pointer h-60"
            @click="openImage(item)"
          >
            <img :src="item.image" class="w-full h-60 object-cover" />
            <span
              v-if="item.featured"
              class="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
            >
              Featured
            </span>
            <div class="absolute bottom-0 w-full bg-black/40 text-white p-3 text-center">
              {{ item.title }}
            </div>
          </div>
        </div>
      </Transition>

      <!-- PAGINATION -->
      <div class="flex justify-center items-center gap-4 mt-8">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {{ currentPage }} / {{ totalPages }}
        </span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>

  </div>
  <div
    v-if="selectedImage"
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div class="relative max-w-3xl w-full mx-4">
      <button
        class="absolute top-2 right-2 text-white text-2xl font-bold z-50"
        @click="closeModal"
      >
        &times;
      </button>
      <img
        :src="selectedImage.image"
        class="w-full max-h-[90vh] object-contain rounded"
      />
      <p class="text-white text-center mt-2">{{ selectedImage.title }}</p>
    </div>
</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
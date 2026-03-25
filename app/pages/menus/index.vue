<script setup>
import { ref, computed } from "vue";

useSeoMeta({ title: "Menu" });

const items = {
  title: "What We Offer",
  subtitle: "Our Menu",
  desc: "From freshly brewed coffee to homemade pastries and hearty meals.",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
};

// ✅ 16 MENU + IMAGE
const menus = ref([
  { id: 1, title: "Signature Latte", price: "$5.50", desc: "Smooth espresso", category_id: "4",  popular: true, discount: 10, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 2, title: "Cappuccino", price: "$5.00", desc: "Classic foam coffee", category_id: "4",  popular: true, discount: 0, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { id: 3, title: "Americano", price: "$4.00", desc: "Strong black coffee", category_id: "4",  popular: true, discount: 0, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { id: 4, title: "Mocha", price: "$5.80", desc: "Chocolate coffee", category_id: "4",  popular: false, discount: 0, image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571" },

  { id: 5, title: "Pancake", price: "$7.00", desc: "Sweet breakfast", category_id: "2", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d" },
  { id: 6, title: "Omelette", price: "$6.50", desc: "Egg breakfast", category_id: "2", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2" },
  { id: 7, title: "French Toast", price: "$7.50", desc: "Sweet toast", category_id: "2", popular: false, discount: 0,image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929" },
  { id: 8, title: "Croissant", price: "$4.00", desc: "Buttery pastry", category_id: "2",popular: true, discount: 2, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },

  { id: 9, title: "Burger", price: "$10.00", desc: "Juicy beef burger", category_id: "3", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
  { id: 10, title: "Sandwich", price: "$8.00", desc: "Quick lunch", category_id: "3", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb" },
  { id: 11, title: "Pasta", price: "$11.00", desc: "Italian pasta", category_id: "3", popular: false, discount: 1, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e" },
  { id: 12, title: "Salad", price: "$9.00", desc: "Healthy greens", category_id: "3", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },

  { id: 13, title: "Cheesecake", price: "$6.00", desc: "Creamy dessert", category_id: "5", popular: false, discount: 20, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307" },
  { id: 14, title: "Brownies", price: "$5.00", desc: "Chocolate cake", category_id: "5", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
  { id: 15, title: "Ice Cream", price: "$4.50", desc: "Cold dessert", category_id: "5", popular: false, discount: 0, image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc" },
  { id: 16, title: "Donut", price: "$3.50", desc: "Sweet donut", category_id: "5", popular: true, discount: 0, image: "https://images.unsplash.com/photo-1505253213348-cd54c92b37d6" },
]);

const categories = [
  { id: "1", name: "All Items" },
  { id: "2", name: "Breakfast" },
  { id: "3", name: "Lunch" },
  { id: "4", name: "Drinks" },
  { id: "5", name: "Desserts" }
];

const activeCategory = ref("1");
const search = ref("");
const currentPage = ref(1);
const perPage = 6;

const handleTab = (val) => {
  activeCategory.value = val.id;
  currentPage.value = 1;
};

const filteredMenus = computed(() => {
  let data = menus.value;

  if (activeCategory.value !== "1") {
    data = data.filter(e => e.category_id === activeCategory.value);
  }

  if (search.value) {
    data = data.filter(e =>
      e.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  return data;
});

const totalPages = computed(() =>
  Math.ceil(filteredMenus.value.length / perPage)
);

const paginatedMenus = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredMenus.value.slice(start, start + perPage);
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
    <div class="w-full h-[400px]">
      <div
        class="relative flex flex-col items-center justify-center h-full text-center px-4 bg-cover bg-center"
        :style="{ backgroundImage: `url(${items.image})` }"
      >
        <div class="absolute inset-0 bg-black/30"></div>

        <h2 class="relative text-white text-xl">
          {{ items.title }}
        </h2>
        <h2 class="relative text-3xl font-bold text-white">
          {{ items.subtitle }}
        </h2>
        <p class="text-white max-w-xl">
          {{ items.desc }}
        </p>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-[1200px] mx-auto px-4 py-12">

      <!-- SEARCH -->
      <div class="flex justify-center">
        <input
          v-model="search"
          type="text"
          placeholder="Search menu..."
          class="w-full max-w-2xl px-4 py-3 rounded-xl border"
        />
      </div>

      <!-- TABS -->
      <div class="flex justify-center mt-6">
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

      <!-- MENU GRID -->
      <Transition name="fade" mode="out-in">
        <div
            :key="activeCategory + search + currentPage"
            class="grid md:grid-cols-3 gap-6 mt-8"
        >

            <div
            v-for="item in paginatedMenus"
            :key="item.id"
            class="bg-[#f5ebdd] rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:scale-[1.02]"
            >

            <!-- IMAGE -->
            <img
                :src="item.image"
                class="w-full h-[180px] object-cover"
            />

            <!-- CONTENT -->
            <div class="p-4 relative">
                <span
                    v-if="item.popular"
                    class="absolute -top-2 left-2 bg-cafe-orange text-white text-xs font-bold px-2 py-1 rounded-full shadow"
                >
                    Popular
                </span>

                <!-- DISCOUNT BADGE -->
                <span
                    v-if="item.discount && item.discount > 0"
                    class="absolute -top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
                >
                    -{{ item.discount }}%
                </span>

                <!-- TITLE DAN HARGA -->
                <div class="flex justify-between items-center">
                    <h3 class="font-semibold text-lg text-[#4B2E2B]">
                    {{ item.title }}
                    </h3>
                    <div class="flex justify-between items-center mt-1">
                    <span class="text-[#6F4E37] font-medium">
                         <template v-if="item.discount && item.discount > 0">
                            <!-- Harga asli dicoret -->
                            <span class="text-gray-400 line-through">
                            {{ item.price }}
                            </span>
                            <!-- Harga diskon -->
                            <span class="text-[#6F4E37] font-medium">
                            ${{ (parseFloat(item.price.slice(1)) * (1 - item.discount / 100)).toFixed(2) }}
                            </span>
                        </template>
                        <template v-else>
                            <span class="text-[#6F4E37] font-medium">
                            {{ item.price }}
                            </span>
                        </template>
                    </span>
                    </div>
                </div>

                <p class="text-sm text-gray-600 mt-2">
                    {{ item.desc }}
                </p>
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
  <section class="bg-cafe-cream/50 mx-auto text-center py-12 ">
    <p><span class="font-semibold">Note :</span> Prices and availability may vary. Please inform our staff of any allergies or dietary requirements.</p>
  </section>
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
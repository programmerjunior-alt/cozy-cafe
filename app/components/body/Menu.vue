<template>
  <section class="max-w-7xl mx-auto px-6 py-12">

    <!-- Grid -->
    <div class="grid md:grid-cols-3 gap-8">

      <!-- Card -->
      <div
        v-for="(item, i) in items"
        :key="i"
        class="bg-[#f5ebdd] rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300"
      >
        <!-- Image -->
        <img
          :src="item.image"
          class="w-full h-[220px] object-cover rounded-xl"
        />

        <!-- Content -->
        <div class="mt-4">

          <!-- Title + Price -->
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-semibold text-[#4B2E2B]">
              {{ item.title }}
            </h3>
            <span class="text-[#6F4E37] font-medium">
              {{ item.price }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm text-[#7c6a5d] mt-2 leading-relaxed">
            {{ item.desc }}
          </p>

        </div>
      </div>

    </div>

    <!-- Button -->
    <div class="flex justify-center mt-12">
      <button
        class="bg-[#6F4E37] hover:bg-[#5a3f2c] text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-md transition"
      >
        View Full Menu →
      </button>
    </div>

  </section>
</template>

<script setup>
const items = [
  {
    title: "Signature Latte",
    price: "$5.50",
    desc: "Smooth espresso with velvety steamed milk and beautiful latte art",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    title: "Fresh Croissant",
    price: "$4.00",
    desc: "Buttery, flaky pastry baked fresh every morning",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
  },
  {
    title: "Avocado Toast",
    price: "$12.00",
    desc: "Creamy avocado on sourdough with poached eggs and herbs",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  }
];
</script>
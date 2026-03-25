<template>
  <section class="max-w-7xl mx-auto px-4 py-12">

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-6">

      <!-- Card -->
      <div
        v-for="(item, i) in items"
        :key="i"
        class="relative rounded-2xl overflow-hidden group cursor-pointer"
      >
        <!-- Image -->
        <img
          :src="item.image"
          class="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
        />

        <!-- Dark Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <!-- Content -->
        <div class="absolute bottom-0 p-6 text-white z-10">

          <!-- Badge -->
          <span
            class="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full mb-3"
            :class="item.badgeColor"
          >
            {{ item.badge }}
          </span>

          <!-- Title -->
          <h3 class="text-2xl font-semibold">
            {{ item.title }}
          </h3>

          <!-- Subtitle -->
          <p class="text-sm text-white/80 mt-1">
            {{ item.subtitle }}
          </p>

          <!-- Link -->
          <div class="mt-4 text-orange-400 font-medium flex items-center gap-2">
            Explore Menu →
          </div>
        </div>
      </div>

    </div>

    <!-- Button -->
    <div class="flex justify-center mt-10">
      <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md">
        📖 View Full Menu
      </button>
    </div>

  </section>
</template>

<script setup>
const items = [
  {
    title: "Artisan Espresso",
    subtitle: "Single-origin beans roasted to perfection",
    badge: "☕ Coffee",
    badgeColor: "bg-orange-400 text-black",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    title: "Premium Blends",
    subtitle: "Hand-selected leaves from around the world",
    badge: "🍵 Tea",
    badgeColor: "bg-cyan-400 text-black",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    title: "Fresh Baked Daily",
    subtitle: "Croissants, muffins, and sweet delights",
    badge: "🥐 Pastries",
    badgeColor: "bg-orange-400 text-black",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
  }
];
</script>
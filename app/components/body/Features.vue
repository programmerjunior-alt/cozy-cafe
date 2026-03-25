<script setup>
const features = [
  {
    title: "Artisan Coffee",
    icon: "game-icons:coffee-cup",
    description: "Sourced from single-origin beans and roasted to perfection. Every cup tells a story of craftsmanship.",
  },
  {
    title: "High-Speed WiFi",
    icon: "uil:wifi",
    description: "Fiber-optic internet built for productivity. Upload, download, and video call without interruption.",
  },
  {
    title: "Curated Ambiance",
    icon: "mdi:family-room-outline",
    description: "Thoughtfully designed spaces with comfortable seating, warm lighting, and a creative atmosphere.",
  },
  {
    title: "Fresh Cuisine",
    icon: "simple-icons:justeat",
    description: "From flaky croissants to hearty sandwiches—crafted daily with premium ingredients.",
  },
  {
    title: "Extended Hours",
    icon: "icon-park-outline:time",
    description: "Open early for your morning brew and late for night owls. Your schedule, our priority.",
  },
  {
    title: "Community Hub",
    icon: "ri:user-community-fill",
    description: "Connect with fellow creators, entrepreneurs, and coffee lovers in an inspiring environment.",
  },
];
</script>

<template>
  <section class="py-6">
    <div class="max-w-7xl mx-auto p-8 border-8 rounded-2xl border-cafe-orange/50">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(feature, idx) in features"
          :key="idx"
          class="bg-white border border-cafe-orange/30 rounded-2xl shadow p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mb-4 bg-cafe-brown rounded-full">
            <icon :name="feature.icon" class="w-8 h-8 text-white" />
        </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
            {{ feature.title }}
          </h3>
          <p class="text-gray-500 text-sm md:text-base">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
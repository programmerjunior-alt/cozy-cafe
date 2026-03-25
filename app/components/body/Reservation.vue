<script setup>

</script>

<template>
  <section
    class="w-full bg-cover bg-center relative py-24"
    style="background-image: url('https://images.unsplash.com/photo-1528605248644-14dd04022da1')"
  >
    <!-- Overlay gelap -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Konten -->
    <div class="relative z-10 max-w-3xl mx-auto text-center px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Reserve Your Table Now!
      </h2>
      <p class="text-lg md:text-xl text-white mb-6">
        Book your spot and enjoy exclusive perks at our café.
      </p>
      <button
        class="px-8 py-3 bg-cafe-brown hover:bg-cafe-brown text-white font-bold rounded-lg transition transform hover:scale-105 active:scale-95"
        @click="() => alert('Reservasi clicked!')"
      >
        Reserve Now
      </button>
    </div>
  </section>
</template>
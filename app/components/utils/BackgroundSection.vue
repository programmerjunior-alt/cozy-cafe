<script setup>
import { ref, onMounted } from "vue";

const circles = ref([]);

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

onMounted(() => {
  circles.value = [
    { size: "w-64 h-64", color: "bg-cafe-brown", top: rand(0, 80), left: rand(-20, 80) },
    { size: "w-48 h-48", color: "bg-cafe-brown", top: rand(0, 80), left: rand(-20, 80) },
    { size: "w-32 h-32", color: "bg-cafe-brown/10", top: rand(0, 80), left: rand(-20, 80) },
    { size: "w-40 h-40", color: "bg-cafe-brown/40", top: rand(0, 80), left: rand(-20, 80) },
    { size: "w-40 h-40", color: "bg-cafe-brown", top: rand(0, 80), left: rand(-20, 80) },
    { size: "w-40 h-40", color: "bg-cafe-brown", top: rand(0, 80), left: rand(-20, 80) },
    { size: "w-40 h-40", color: "bg-cafe-brown", top: rand(0, 80), left: rand(-20, 80) },
  ];
});
</script>

<template>
  <div class="absolute inset-0 -z-0 overflow-hidden opacity-20">
    <div
      v-for="(c, i) in circles"
      :key="i"
      class="absolute rounded-full animate-float"
      :class="[c.size, c.color]"
      :style="{
        top: c.top + '%',
        left: c.left + '%',
        animationDelay: (i * 200) + 'ms'
      }"
    />
  </div>
</template>
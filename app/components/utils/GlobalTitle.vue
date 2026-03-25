<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Please Enter Title",
  },
  subtitle: {
    type: String,
  },
  position: {
    type: String,
    default: "justify-start",
  },
  justify: {
    type: String,
    default: "start",
  },
});
</script>

<template>
  <div class="global-title">
    <div class="subtitle flex items-center" :class="position">
      <img src="/logo.png" class="w-5" />
      <div class="text-xl font-light">{{ title }}</div>
    </div>
    <h2 v-if="subtitle" class="font-semibold text-2xl text-slate-500" :class="`text-${justify}`">
      {{ subtitle }}
    </h2>
  </div>
</template>

<style scoped>
.subtitle {
  color: #e8ae3c;
  gap: 8px;
}
</style>

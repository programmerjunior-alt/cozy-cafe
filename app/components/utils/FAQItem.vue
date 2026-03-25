<template>
  <div class="border-b border-b-[#E7E5E4] overflow-hidden">
    <button
      class="w-full text-left py-2 flex items-center justify-between"
      @click="emit('toggle')"
    >
      <div class="flex items-center">
        <span class="pr-2 py-1 rounded-sm text-base text-orange-300 shrink-0">
          Q{{ index + 1 }}
        </span>
        <span class="text-base text-gray-500">
          {{ question }}
        </span>
      </div>
      <svg
        class="w-4 h-4 text-orange-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="isOpen ? 'M20 12H4' : 'M12 4v16m8-8H4'"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      data-aos="flip-up"
      class="answer p-6 text-sm text-[#1C1917] bg-[#FAF7F6]"
      v-html="answer"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["toggle"]);
const props = defineProps({
  question: String,
  answer: String,
  isOpen: Boolean,
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
.answer {
  border-top: 1px solid #e7e5e4;
}
</style>

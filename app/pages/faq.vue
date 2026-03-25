<script setup>
import { ref, reactive } from "vue";
import FAQItem from "~/components/utils/FAQItem.vue";


// Mock grouped FAQ data
const faqGrouped = reactive([
  {
    id: 1,
    name: "General",
    icon_style: "icon_3",
    faqs: [
      { id: 1, question: "What are your opening hours?", answer: "We are open Monday - Friday: 7:00 AM - 8:00 PM, Saturday - Sunday: 8:00 AM - 9:00 PM.", isOpen: false },
      { id: 2, question: "Where is Brew & Bloom located?", answer: "123 Coffee Lane, Artisan District, New York, NY 10001.", isOpen: false },
    ],
  },
  {
    id: 2,
    name: "Menu & Orders",
    icon_style: "icon_4",
    faqs: [
      { id: 3, question: "Do you offer vegetarian options?", answer: "Yes! We have a variety of vegetarian dishes and beverages.", isOpen: false },
      { id: 4, question: "Can I make a reservation?", answer: "Absolutely! You can <strong>reserve a table online</strong>.", isOpen: false },
      { id: 5, question: "Do you provide delivery?", answer: "Currently, we only offer in-house service.", isOpen: false },
    ],
  },
]);

const faqPending = ref(false);

// Toggle a single FAQ inside a category
const toggleOpens = (faqId) => {
  faqGrouped.forEach((cat) => {
    cat.faqs.forEach((f) => {
      if (f.id === faqId) {
        f.isOpen = !f.isOpen;
      } else {
        f.isOpen = false; // close others
      }
    });
  });
};

useSeoMeta({
  title: 'FAQ',
});
</script>

<template>
  <div class="bg-[#FFFCFB]">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-0 pt-[80px] pb-[120px]">
      <h1 class="text-2xl font-bold"> FAQ </h1>
      <div class="mx-auto rounded-md py-8">
        <div v-if="faqPending">
          <div class="relative h-[688px]">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div class="flex items-center gap-2 text-green-600">
                <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" class="opacity-25"/>
                  <path d="M4 12a8 8 0 018-8" fill="currentColor" class="opacity-75"/>
                </svg>
                <span class="text-green-600">FAQ</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <div
            v-for="(category, i) in faqGrouped"
            :key="category.id"
            class="category"
          >
            <div class="flex items-center justify-start gap-2 mb-4">
              <div class="flex items-center gap-2">
                <img :src="`/faq/${category.icon_style}.png`" class="w-6"/>
                <h2 class="text-xl">{{ category.name }}</h2>
              </div>
            </div>

            <FAQItem
              v-for="(item, index) in category.faqs"
              :key="item.id"
              :index="index"
              :question="item.question"
              :answer="item.answer"
              :isOpen="item.isOpen"
              @toggle="toggleOpens(item.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #33231c;
}
.category {
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  h2 {
    font-weight: 500;
    color: #33231c;
  }
}
</style>
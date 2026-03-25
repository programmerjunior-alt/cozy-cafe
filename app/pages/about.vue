<script setup>

useSeoMeta({
  title: 'About us',
});
const items = 
  {
    title: "About Us",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    imageLeft: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    imageRight: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    imagePhi: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  }

const values = [
  {
    title: "Passion for Quality",
    desc:"Every cup we serve is crafted with care, using only the finest ingredients sourced from trusted suppliers.",
    icon: "icon-park-outline:like"
  },
  {
    title: "Sustainability",
    desc:"We're committed to eco-friendly practices, from our compostable packaging to our partnerships with sustainable farms..",
    icon: "mdi:leaf"
  },
  {
    title: "Community First",
    desc:"Brew & Bloom is more than a café—it's a gathering place where neighbors become friends.",
    icon: "ri:user-community-line"
  }
]
</script>
<template>
  <div class="bg-[#FFFCFB]">
    <div class="w-full h-[400px]">
      <div
        class="relative flex flex-col items-center justify-center h-full text-center px-4 bg-cover bg-center"
        :style="{
          backgroundImage: `url(${items.image
          })`,
        }"
      >
        <div class="absolute inset-0 bg-gray-900/20"></div>
        <h2 class="relative text-[28px] md:text-[32px] font-bold text-white">
          {{ items.title }}
        </h2>
      </div>
    </div>
  </div>
  <div
    class="pt-8 pb-9 md:pt-20 md:pb-40 w-full bg-cover bg-center"
    :style="{ backgroundImage: `url('/background.png')` }"
  >
    <section class="max-w-[960px] mx-auto px-4 py-3">
      <div class="flex flex-col gap-8 md:gap-[60px]">
        <div class="flex flex-col items-center justify-center gap-8">
          <div class="flex w-full mx-auto items-center justify-center">
            <LazyUtilsGlobalTitle
              title="About Us"
              position="justify-center"
              subtitle="Our Story"
            />
          </div>
          <div class="ql-editor">
            <p
              class="text-[#1C1917]"
            >What started as a dream between two coffee-loving friends has grown into a beloved neighborhood gathering spot.</p>
          </div>
          <div class="w-full flex items-center justify-between h-[168px] sm:h-[456px] gap-3 md:gap-12">
            <div
              class="flex-1 h-full rounded-lg"
              :style="{
                background: `url(${items.imageLeft}) 50% 50% / cover`,
              }"
            ></div>
            <div
              class="flex-[4] h-full rounded-lg"
              :style="{
                background: `url(${items?.imageRight}) 50% 50% / cover`,
              }"
            ></div>
          </div>
          <div class="flex flex-col gap-4 mx-auto">
            <h3 class="text-xl font-medium text-[#1C1917]">
              How It All Began
            </h3>
            <p class="text-[#1C1917] leading-[150%] max-w-7xl mx-auto">
              In 2015, Sarah and Michael—two friends united by their love of exceptional coffee— decided to create a space that reflected their vision of what a café should be: warm, welcoming, and committed to quality.
              They found the perfect spot in a historic building on Coffee Lane, with exposed brick walls and large windows that flood the space with natural light. With their own hands, they restored the space, preserving its character while adding modern touches.
              The name "Brew & Bloom" came from their belief that great coffee helps people bloom— sparking creativity, fostering connections, and providing a moment of peace in busy lives.
            </p>
          </div>
        </div>

        <div class="rounded-lg">
          <img :src="items.imagePhi" alt="socie" class="rounded-lg h-52 w-full object-cover" />
        </div>
        <div class="flex flex-col gap-4 mx-auto">
            <h3 class="text-xl font-medium text-[#1C1917]">
              Our Coffee Philosophy
            </h3>
            <p class="text-[#1C1917] leading-[150%] max-w-7xl mx-auto">
              We believe that exceptional coffee starts at the source. That's why we work directly with farmers in Ethiopia, Colombia, Guatemala, and beyond, ensuring fair prices and sustainable growing practices.
              Our beans are roasted in small batches at a local roastery, guaranteeing freshness in every cup. Whether you prefer a bold espresso or a smooth pour-over, we're dedicated to making your perfect cup.
            </p>
          </div>
      </div>
    </section>
    <div class="bg-white relative pt-8">
        <div class="max-w-[960px] justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <LazyUtilsGlobalTitle data-aos="fade-in" title="What We Stand For" subtitle="Our Values"
                position="justify-center" class="text-center" />
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-center py-6">
              <div v-for="(value, i) in values" :key="i" class="flex flex-col items-center text-center border border-orange-100 p-6 rounded-xl hover:scale-105 transition">
                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                  <Icon 
                    client:only 
                    :name="value.icon" 
                    class="w-8 h-8 text-cafe-brown" 
                  />
                </div>
                <h3 class="font-bold text-lg mb-2">{{ value.title}}</h3>

                <p class="text-gray-600">
                  {{ value.desc }}
                </p>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>

const loading = ref(false)
const banners = ref([
  {
    content: {
      title: "Welcome to Our Café",
      subtitle: "Enjoy our cozy space with great coffee.",
      imageDekstop: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
  },
  {
    content: {
      title: "Freshly Baked Pastries",
      subtitle: "Taste our delicious pastries every morning.",
      imageDekstop: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
  },
  {
    content: {
      title: "Relax & Work",
      subtitle: "Free Wi-Fi and comfy seats for your work or study.",
      imageDekstop: "https://images.unsplash.com/photo-1484723091739-30a097e8f929"
    },
  },
]);

onMounted(async () => {

})
useSeoMeta({
  title: 'Home page',
});

</script>

<template>
    <section class="relative 
        items-center justify-center bg-orange-50/10">
        <LazyBodySlider :banners="banners" :loading="loading" />
        <div class="bg-white relative">
            <LazyUtilsBackgroundSection />
            <div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <LazyUtilsGlobalTitle  title="About Us" subtitle="Our Story"
                    position="justify-start" />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <p class="mt-4 text-gray-600 text-lg leading-relaxed">
                            What started as a dream between two coffee-loving friends has grown into a beloved neighborhood gathering spot.
                        </p>
                        <p class="mt-4 text-gray-600 text-lg leading-relaxed">
                            In 2015, Sarah and Michael—two friends united by their love of exceptional coffee— decided to create a space that reflected their vision of what a café should be: warm, welcoming, and committed to quality.
                        </p>
                    </div>
                    <div class="relative">
                        <img src="/images/about-cafe.jpg" alt="About Cozy Cafe"
                            class="w-full h-auto rounded-lg shadow-md" />
                        <div class="absolute -bottom-6 -left-8 bg-[#6F4E37] text-white p-6 rounded-2xl shadow-lg">
                            <h2 class="text-3xl font-bold">Since 2015</h2>
                            <p class="text-sm opacity-80">Serving our community</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-orange-300/5">
            <div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <LazyUtilsGlobalTitle title="Where Heritage Meets Innovation"  subtitle="A Sanctuary for Digital Creators"
                    position="justify-center" class="text-center" />
                <LazyBodyFeatures />
            </div>
        </div>
        <div class="bg-white relative">
            <LazyUtilsBackgroundSection />
            <div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <LazyUtilsGlobalTitle data-aos="fade-in" title="Crafted with Passion" subtitle="Signature Offerings"
                    position="justify-center" class="text-center" />
                <h3 class="text-center">Each item on our menu is a celebration of quality ingredients and expert craftsmanship. From morning espresso to afternoon pastries.</h3>
                <LazyBodyBlog />
            </div>
        </div>
        <div class="bg-orange-300/5" data-aos-duration="1000" data-aos-delay="200">
            <LazyBodyReservation />
        </div>
        <div class="bg-orange-300/10" data-aos-duration="1000" data-aos-delay="200">
            <LazyBodyMenu />
        </div>
    </section>
</template>
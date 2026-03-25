<script setup>
import { computed, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


const props = defineProps({
  banners: { type: Array, default: [] },
  loading: Boolean,
});
const banners = computed(() => props.banners || []);

const currentSlide = ref(0);
const swiperRef = ref(null);
const isMounted = ref(false);
const canLoop = computed(() => props.banners.length > 1);
const autoplayOpts = computed(() =>
  canLoop.value ? { delay: 2000, disableOnInteraction: false } : false
);

const onSwiperInit = (s) => {
  swiperRef.value = s;
};
const onSlideChange = () => {
  if (swiperRef.value) currentSlide.value = swiperRef.value.realIndex;
};
const goPrev = () => swiperRef.value?.slidePrev();
const goNext = () => swiperRef.value?.slideNext();

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="sbar-slider-container">
    <div class="loading-container" v-if="props.loading">
      <div class="loading-wrapper">
        <div class="loading-spinner">
          <div class="spinner-content">
            <svg class="spinner-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
                fill="none"
                class="spinner-circle"
              />
              <path
                d="M4 12a8 8 0 018-8"
                fill="currentColor"
                class="spinner-path"
              />
            </svg>
            <!-- <span class="loading-text">載入中</span> -->
          </div>
        </div>
      </div>
    </div>
    <Swiper
      v-else
      :modules="[Autoplay, EffectFade]"
      effect="fade"
      :fadeEffect="{ crossFade: true }"
      :speed="2000"
      loop
      :autoplay="autoplayOpts"
      :rewind="canLoop"
      :allow-touch-move="canLoop"
      @slideChange="onSlideChange"
      @swiper="onSwiperInit"
      class="swiper-container"
    >
      <SwiperSlide v-for="(slide, index) in banners" :key="index">
        <div class="slide-content">
          <div
            class="inner-image"
            :style="
              isMounted
                ? {
                    backgroundImage: `url(${
                     slide.content.imageDekstop
                    })`,
                  }
                : {}
            "
          ></div>
          <div class="slide-overlay"></div>
          <h2 class="slide-title">
            {{ slide?.content?.title }}
          </h2>
          <p
            class="slide-subtitle"
            v-html="slide?.content?.subtitle"
          ></p>
        </div>
      </SwiperSlide>

      <div v-if="banners.length > 1" class="slider-controls">
        <div class="slide-counter">
          <span>{{ currentSlide + 1 }}</span>
          <span>/</span>
          <span>{{ banners.length }}</span>
        </div>
        <div class="control-divider"></div>
        <div class="navigation-buttons">
          <button @click="goPrev" class="nav-button">
            <img
              src="~/assets/icons/1C1917/arrow-back.svg"
              alt="prev"
              class="nav-icon"
            />
          </button>
          <button @click="goNext" class="nav-button">
            <img
              src="~/assets/icons/1C1917/arrow-to.svg"
              alt="prev"
              class="nav-icon"
            />
          </button>
        </div>
      </div>
    </Swiper>
  </div>
</template>

<style scoped>
.sbar-slider-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #e5e7eb;
}

.loading-container {
  width: 100%;
  height: 100%;
}

.loading-wrapper {
  position: relative;
  height: 100%;
}

.loading-spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
}

.spinner-content {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #16a34a;
}

.spinner-icon {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

.spinner-circle {
  opacity: 0.25;
}

.spinner-path {
  opacity: 0.75;
}

.loading-text {
  color: #16a34a;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
}

.swiper-slide {
  overflow: hidden;
}

.slide-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0 16px;
}

.inner-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
}

.slide-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.slide-title {
  position: relative;
  font-size: 64px;
  font-weight: 500;
  color: white;
  font-style: italic;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 48px;
  }
}

.slide-subtitle {
  position: relative;
  margin-top: 16px;
  font-weight: 400;
  color: white;
  z-index: 10;
  line-height: 1.5;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.slider-controls {
  position: absolute;
  bottom: 40px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 20;

  @media (min-width: 640px) {
    right: 40px;
    gap: 24px;
  }

  @media (min-width: 1024px) {
    right: 40px;
  }

  @media (min-width: 1280px) {
    left: 75%;
    right: auto;
  }
}

.slide-counter {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: white;
}

.control-divider {
  width: 64px;
  height: 1px;
  background-color: white;
}

.navigation-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 20;

  @media (min-width: 768px) {
    gap: 16px;
  }
}

.nav-button {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}

.nav-icon {
  width: 24px;
  height: 24px;
}

.swiper-slide-active,
.swiper-slide-prev {
  .inner-image {
    animation: fadezoom 4s forwards;
  }
}

@keyframes fadezoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .slider-controls {
    bottom: 24px;
    right: 24px;
    gap: 12px;
  }

  .slide-counter {
    font-size: 0.75rem;
    gap: 8px;
  }

  .control-divider {
    width: 48px;
  }

  .nav-button {
    width: 36px;
    height: 36px;
  }

  .nav-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .slide-content {
    padding: 0 12px;
  }
}
</style>

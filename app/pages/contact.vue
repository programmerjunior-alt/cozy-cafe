<script setup>
import { ref } from "vue";

useSeoMeta({ title: "Contact Us" });

// STATE FORM
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const successMessage = ref("");

const submitContact = () => {
  if (!name.value || !email.value || !subject.value || !message.value) {
    alert("Please fill all required fields.");
    return;
  }

  // Simulate submit (replace with API later)
  console.log({
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  });

  successMessage.value = "Thank you! Your message has been sent.";

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
};
</script>

<template>
  <div class="bg-[#FFFCFB] min-h-screen">
    <!-- HERO -->
    <div class="w-full h-[300px] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')">
      <div class="bg-black/30 p-6 rounded">
        <h2 class="text-3xl text-white font-bold text-center">Contact Us</h2>
        <p class="text-white text-center mt-2">We’d love to hear from you</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12">
      <h3 class="text-2xl font-bold mb-8 text-[#4B2E2B] text-center">Get in Touch</h3>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- LEFT: FORM -->
        <form @submit.prevent="submitContact" class="space-y-4 bg-white p-6 rounded-xl shadow">
          <div>
            <label class="block mb-1 font-medium text-gray-700">Full Name *</label>
            <input type="text" v-model="name" placeholder="Your Name" class="w-full px-4 py-3 rounded-xl border" required />
          </div>

          <div>
            <label class="block mb-1 font-medium text-gray-700">Email *</label>
            <input type="email" v-model="email" placeholder="you@example.com" class="w-full px-4 py-3 rounded-xl border" required />
          </div>

          <div>
            <label class="block mb-1 font-medium text-gray-700">Subject *</label>
            <input type="text" v-model="subject" placeholder="Subject" class="w-full px-4 py-3 rounded-xl border" required />
          </div>

          <div>
            <label class="block mb-1 font-medium text-gray-700">Message *</label>
            <textarea v-model="message" placeholder="Write your message..." class="w-full px-4 py-3 rounded-xl border resize-none" rows="5" required></textarea>
          </div>

          <button type="submit" class="w-full bg-[#6F4E37] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#5a3b2b] transition">
            Send Message
          </button>

          <p v-if="successMessage" class="mt-4 text-green-600 font-medium text-center">{{ successMessage }}</p>
        </form>

        <!-- RIGHT: INFO + MAP -->
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl shadow space-y-4">
            <h4 class="text-xl font-bold text-[#4B2E2B]">Visit Our Café</h4>
            <p>We're located in the heart of the Artisan District. Stop by for a cup of coffee and experience our warm hospitality firsthand.</p>

            <div>
              <h5 class="font-semibold text-gray-700">Address</h5>
              <p>123 Coffee Lane, Artisan District<br/>New York, NY 10001</p>
            </div>

            <div>
              <h5 class="font-semibold text-gray-700">Phone</h5>
              <p>(555) 123-4567</p>
            </div>

            <div>
              <h5 class="font-semibold text-gray-700">Email</h5>
              <p>hello@brewandbloom.com</p>
            </div>

            <div>
              <h5 class="font-semibold text-gray-700">Hours</h5>
              <p>Monday - Friday: 7:00 AM - 8:00 PM<br/>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>

          <!-- GOOGLE MAPS -->
          <div class="rounded-xl overflow-hidden shadow">
            <iframe
              class="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.989562288002!2d-74.00482168459312!3d40.71277617933109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a199b2e024b%3A0x123456789abcdef!2s123%20Coffee%20Lane%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
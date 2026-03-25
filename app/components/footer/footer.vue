<template>
  <div class="bg-cafe-brown text-white p-4">
    <div class="max-w-7xl mx-auto pt-12 mb-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-6">
        <!-- LEFT COLUMN -->
        <div class="flex flex-col gap-6 md:col-span-2">
          <div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-2">
            <img src="/cozy-white.png" alt="Cozy Cofe" class="w-24 mb-2 md:mb-0" />
            <div class="pl-0 md:pl-2">
              <span class="font-semibold">Brew & Bloom</span>
              <p class="italic text-sm md:text-base">
                A cozy corner where great coffee meets warm hospitality. <br class="hidden md:block" />
                Come for the brew, stay for the community.
              </p>
            </div>
          </div>

          <div>
            <span class="font-bold">Connect With Us</span>
            <div class="flex gap-2 mt-2">
              <Icon name="line-md:instagram" class="w-8 h-8 " />
              <Icon name="line-md:facebook" class="w-8 h-8" />
              <Icon name="line-md:tiktok" class="w-8 h-8" />
              <Icon name="line-md:linkedin" class="w-8 h-8" />
            </div>
          </div>

          <div class="text-sm md:text-base">
            © 2026 Cozy Café. All rights reserved
          </div>
        </div>

        <!-- RIGHT COLUMNS -->
        <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- CONTACTS -->
          <div>
            <span class="font-semibold">Contacts</span>
            <div class="flex gap-2 pt-2 items-start">
              <div class="bg-white flex items-center rounded-lg p-2 shrink-0">
                <Icon name="line-md:phone-call-loop" class="w-6 h-6 text-cafe-coffee" />
              </div>
              <div class="flex flex-col leading-tight text-sm">
                <span class="font-semibold">Call Center</span>
                <span>(555) 123-4567</span>
              </div>
            </div>

            <div class="flex gap-2 pt-2 items-start">
              <div class="bg-white flex items-center rounded-lg p-2 shrink-0">
                <Icon name="line-md:email" class="w-6 h-6 text-cafe-coffee" />
              </div>
              <div class="flex flex-col leading-tight text-sm">
                <span class="font-semibold">Email</span>
                <span>hello@brewandbloom.com</span>
              </div>
            </div>

            <div class="flex gap-2 pt-2 items-start">
              <div class="bg-white flex items-center rounded-lg p-2 shrink-0">
                <Icon name="ic:baseline-whatsapp" class="w-6 h-6 text-cafe-coffee" />
              </div>
              <div class="flex flex-col leading-tight text-sm">
                <span class="font-semibold">WhatsApp</span>
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          <!-- QUICK LINKS -->
          <div>
            <span class="font-semibold">Quick Links</span>
            <ul class="mt-2 space-y-2 text-sm">
              <li><NuxtLink to="/" class="hover:underline">About Us</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:underline">Menus</NuxtLink></li>
              <li><NuxtLink to="/galleries" class="hover:underline">Gallery</NuxtLink></li>
              <li><NuxtLink to="/reservations" class="hover:underline">Reservation</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- HOURS -->
          <div>
            <span class="font-semibold">We’re Open</span>
            <ul class="mt-2 space-y-2 text-sm">
              <li>Mon - Fri: 7:00 AM - 8:00 PM</li>
              <li>Sat - Sun: 8:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
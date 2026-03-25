
<script setup>
useSeoMeta({
  title: 'Cuci Mobil',
});
</script>   
<template>
    <section class="relative items-center justify-center bg-orange-50/10" data-aos="fade-in" data-aos-duration="500">
        <main-swiper-component :banners="[
            {
                title: 'Cuci Mobil',
                subtitle: 'Layanan cuci mobil mulai dari pencucian eksterior, lap dan vakum debu interior, semir ban, perawatan kaca dan mesin mobil.',
                url: '/images/testing-1.jpg'
            },
            {
                title: 'Discover Our Range',
                subtitle: 'Explore a variety of products tailored for you.',
                url: '/images/testing-2.jpg'
            },
            {
                title: 'Join Us Today',
                subtitle: 'Become a part of our growing community.',
                url: '/images/testing-3.jpg'
            }
        ]" />
        <div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            <LazyUtilsGlobalTitle data-aos="fade-in" title="Bebenah" subtitle="Cuci Mobil"
                position="justify-center" justify="center" />
            <div class="justify-center flex flex-col items-center py-6" data-aos="fade-in" data-aos-duration="1000">
                <h1 class="text-5xl font-bold text-slate-600 items-center">Cakupkan Pekerjaan Ini</h1>
                <h2 class="text-xl">Tim profesional kami siap menangani semua kebutuhan cuci mobil kamu dengan teliti, cepat dan bersih.</h2>
            </div>
            <div class="py-4 border-b">
                <h1 class="font-bold text-gray-600 text-2xl">Menyetrika dan melipat Baju</h1>
                <div class="flex flex-col">
                    <span class="text-gray-400 text-sm">* Estimasi pengerjaan 1 jam</span>
                    <span class="text-gray-400 text-sm">* Jam operasional dimulai dari 08:00 WIB - 19:00 WIB</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div class="py-2 space-y-4">
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="ion:car-sport-outline" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Eksterior Mobil</h3>
                                <p class="text-gray-600">Cuci Mobil untuk exterior, dari mulai body sampai dengan ban.</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="lucide-lab:tire" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Semir Ban</h3>
                                <p class="text-gray-600">Semir Ban agar lebih bersih dan tahan lama.</p>
                            </div>
                        </div>
                    </div>
                    <div class="py-2 space-y-4">
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="mdi:train-car-autorack" class="w-10 h-10 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Interior Mobil</h3>
                                <p class="text-gray-600">Lap dan Vakum dan  penyemprotan cairan sterilisasi untuk interior mobil dari debu</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="mdi:car-windshield-outline" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Kaca Mobil</h3>
                                <p class="text-gray-600">Perawatan kaca mobil dari Jamur Kaca.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4 border-b" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
                <h1 class="font-bold text-gray-600 text-2xl">Alat yang disediakan</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div class="py-2 space-y-4">
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="icon-park-outline:vacuum-cleaner" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Vakum Portable</h3>
                                <p class="text-gray-600">Untuk menyedot debu di dalam interior mobil.</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="streamline-plump:warp-squeeze" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Kanebo</h3>
                                <p class="text-gray-600">Kain sintetis yang menyerap air untuk mengeringkan permukaan.</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="cbi:compressor" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Jet Cleaner</h3>
                                <p class="text-gray-600">Jet Popa Air untuk menyemportkan air ke mobil.</p>
                            </div>
                        </div>
                    </div>
                    <div class="py-2 space-y-4">
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="arcticons:sponge" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Sponge</h3>
                                <p class="text-gray-600">Menyerap air dan sabun untuk mencuci bagian luar mobil.</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="p-2 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <icon name="qlementine-icons:clap-16" class="w-8 h-8 text-gray-600" />
                            </div>
                            <div class="pl-4">
                                <h3 class="text-lg font-semibold text-gray-800">Lap Microfiber</h3>
                                <p class="text-gray-600">Kain serbaguna untuk menyerap debu dan cairan.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="py-4" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                <h1 class="font-bold text-gray-600 text-2xl">Ketentuan Pekerjaan</h1>
                <div class="bg-orange-100 p-4 rounded-xl flex gap-4">
                    <ul class="list-disc list-inside">
                        <li>Pastikan tempat cuci mobil luas, teduh dan tidak terpapar matahari secara langsung</li>
                        <li>Memiliki saluran air yang baik disekitar tempat atau area untuk dilakukan pencucian mobil.</li>
                        <li>Selang dan atau Ember untuk tampungan air disediakan oleh pelanggan.</li>
                        <li>Memastikan barang-barang berharga yang berada di dalam mobil sudah disimpan oleh pelanggan.</li>
                        <li>Jam operasional mulai pukul 08.00 – 20.00 WIB.</li>
                        <li>Untuk noda jok & plafon atas bagian dalam tidak bisa dibersihkan.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-orange-300/5" data-aos-duration="1000" data-aos-delay="200">
            <div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <LazyUtilsGlobalTitle title="Services" data-aos="fade-down" subtitle="Kenapa Memilih Bebenah?"
                    position="justify-center" class="text-center" />
                <div data-aos="fade-up" class="py-6">
                    <div
                        class="bg-[#FFF9F5] rounded-2xl border-8 border-orange-200 shadow-[0_4px_20px_rgba(255,119,0,0.2)] p-8">
                        <p class="text-gray-600 mb-10">
                            <span class="font-bold text-orange-400 text-2xl">Bebenah</span> memiliki 3 keunggulan
                            Keselamatan: Kami menerapkan seleksi yang ketat untuk para
                            pekerja (Taskers),
                            dimulai dengan seleksi 3 tahap yang dilanjutkan dengan training berkala kepada para tasker
                            untuk menjaga kualitas kerja Taskers.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                            <!-- Item 1 -->
                            <div
                                class="flex flex-col border border-orange-100 p-4 rounded-lg hover:scale-110 transition">
                                <Icon client:only name="mdi:clock-fast" class="w-10 h-10 text-orange-500" />
                                <h3 class="font-bold text-lg mb-2">Cepat dan nyaman</h3>
                                <p class="text-gray-600 text-sm">
                                    Hanya butuh 60 detik untuk melakukan pemesanan dan 60 menit mendapatkan mitra
                                    <span class="font-semibold text-orange-400">Bebenah</span>
                                </p>
                            </div>

                            <!-- Item 2 -->
                            <div
                                class="flex flex-col border border-orange-100 p-4 rounded-lg hover:scale-110 transition">
                                <Icon client:only name="icon-park-twotone:transform" class="w-10 h-10 text-orange-500" />
                                <h3 class="font-bold text-lg mb-2">Transparansi</h3>
                                <p class="text-gray-600 text-sm">
                                    Biaya layanan <span class="font-semibold text-orange-400">Bebenah</span> jelas dan
                                    pasti, tidak ada lagi biaya tambahan
                                </p>
                            </div>

                            <!-- Item 3 -->
                            <div
                                class="flex flex-col border border-orange-100 p-4 rounded-lg hover:scale-110 transition">
                                <Icon client:only name="material-symbols-light:safety-check-outline-rounded" class="w-10 h-10 text-orange-500" />
                                <h3 class="font-bold text-lg mb-2">Keselamatan</h3>
                                <p class="text-gray-600 text-sm">
                                    Kami menjamin keselamatan pelanggan serta standar service yang tinggi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white" data-aos-duration="1000" data-aos-delay="200">
            <div class="max-w-7xl justify-start items-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="bg-orange-300 items-center rounded-xl flex">
                    <div class="grid grid-cols-3 gap-2 items-center">
                        <div class="col-span-2">
                            <div class="items-center p-6">
                                <div>
                                    <h2 class="text-3xl font-bold text-white mb-4 md:mb-0">Tidak Punya Waktu Cuci Mobil? Pesan Sekarang dan Nikmati Banyak Keuntungannya!</h2>
                                </div>
                                <div class="pt-8">
                                    <NuxtLink to="/register"
                                        class="bg-white text-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                                        Pesan Sekarang
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <img src="/images/team.png" alt="Team" class="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
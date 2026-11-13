<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
  <a href="tel:+490000000000" aria-label="Telefonisch kontaktieren" class="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#293128] text-white shadow-xl transition hover:scale-105 md:hidden">
    <span class="text-lg">☎</span>
  </a>
</template>

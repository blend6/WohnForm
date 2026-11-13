<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
const open = ref(false)
const route = useRoute()
const close = () => { open.value = false }
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#e7e8e2] bg-[#f7f7f4]/95 backdrop-blur-xl">
    <div class="container-shell flex h-[76px] items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3" @click="close">
        <span class="grid h-9 w-9 place-items-center bg-[#293128] text-sm font-bold tracking-tighter text-white">W.</span>
        <span class="font-display text-[19px] font-extrabold tracking-[-.07em]">WOHNFORM<span class="text-[#899384]">.</span></span>
      </RouterLink>
      <nav class="hidden items-center gap-8 lg:flex">
        <RouterLink to="/" class="nav-link" :class="{ 'text-[#6f7d69]': route.path === '/' }">Startseite</RouterLink>
        <a href="/#leistungen" class="nav-link">Leistungen</a>
        <RouterLink to="/referenzen" class="nav-link">Referenzen</RouterLink>
        <a href="/#ueber-uns" class="nav-link">Über uns</a>
      </nav>
      <RouterLink to="/kontakt" class="btn-primary !hidden !px-5 !py-3 lg:!inline-flex">Beratung anfragen <ArrowUpRight :size="15" /></RouterLink>
      <button class="rounded border border-[#d9ddd5] p-2 lg:hidden" aria-label="Menü öffnen" @click="open = !open">
        <X v-if="open" :size="20" /><Menu v-else :size="20" />
      </button>
    </div>
    <div v-if="open" class="border-t border-[#e7e8e2] bg-[#f7f7f4] px-5 py-5 lg:hidden">
      <nav class="container-shell flex flex-col gap-5">
        <RouterLink to="/" @click="close">Startseite</RouterLink>
        <a href="/#leistungen" @click="close">Leistungen</a>
        <RouterLink to="/referenzen" @click="close">Referenzen</RouterLink>
        <a href="/#ueber-uns" @click="close">Über uns</a>
        <RouterLink to="/kontakt" class="btn-primary w-full" @click="close">Beratung anfragen</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link { color:#5f665d; font-size:13px; font-weight:600; transition:color .2s; }
.nav-link:hover { color:#20231f; }
</style>

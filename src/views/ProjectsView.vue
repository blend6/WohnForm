<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '../data/content'
const active = ref('Alle')
const categories = ['Alle', ...new Set(projects.map(p => p.category))]
const filtered = computed(() => active.value === 'Alle' ? projects : projects.filter(p => p.category === active.value))
</script>
<template>
  <main>
    <section class="bg-[#e9ece6] py-20"><div class="container-shell"><p class="eyebrow">Referenzen</p><h1 class="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight sm:text-7xl">Einblicke in unsere Arbeit.</h1><p class="mt-6 max-w-xl text-base leading-8 text-[#737b70]">Entdecken Sie Beispiele aus unseren Leistungsbereichen. Echte Projektfotos und Kundendetails werden nach Freigabe ergänzt.</p></div></section>
    <section class="section-pad"><div class="container-shell"><div class="mb-10 flex flex-wrap gap-2"><button v-for="cat in categories" :key="cat" class="border px-4 py-2 text-xs font-bold transition" :class="active === cat ? 'border-[#293128] bg-[#293128] text-white' : 'border-[#d9ded5] text-[#626b60] hover:border-[#293128]'" @click="active = cat">{{ cat }}</button></div><div class="grid gap-x-6 gap-y-10 md:grid-cols-2"><article v-for="project in filtered" :key="project.id"><div class="card-image aspect-[1.45]"><img :src="project.image" :alt="project.title" class="image-cover" loading="lazy"/></div><div class="mt-5 flex items-start justify-between gap-4"><div><p class="eyebrow">{{ project.category }} · {{ project.location }}</p><h2 class="mt-2 font-display text-2xl font-semibold">{{ project.title }}</h2><p class="mt-3 max-w-lg text-sm leading-6 text-[#7a8177]">{{ project.description }}</p></div><ArrowUpRight class="shrink-0 text-[#7a8675]" :size="20"/></div></article></div><p class="mt-12 border-l-2 border-[#899784] bg-[#f0f1ed] p-4 text-xs leading-6 text-[#727a6f]">Die Bilder und Projektbeschreibungen dienen aktuell als Design-Demonstration. Vor Veröffentlichung ausschließlich echte, vom Unternehmen freigegebene Referenzen verwenden.</p></div></section>
  </main>
</template>

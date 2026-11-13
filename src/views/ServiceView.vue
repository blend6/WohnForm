<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import { services } from '../data/content'
import SectionHeading from '../components/SectionHeading.vue'
const route = useRoute()
const service = computed(() => services.find(item => item.slug === route.params.slug))
</script>
<template>
  <main v-if="service">
    <section class="relative min-h-[440px] overflow-hidden bg-[#263026]">
      <img :src="service.image" :alt="service.title" class="absolute inset-0 h-full w-full object-cover opacity-45"/>
      <div class="absolute inset-0 bg-gradient-to-r from-[#1d261e]/90 to-transparent"/>
      <div class="container-shell relative flex min-h-[440px] items-center py-16 text-white"><div class="max-w-2xl"><p class="eyebrow !text-[#c5d1bf]">Unsere Leistungen</p><h1 class="mt-5 font-display text-5xl font-semibold sm:text-7xl">{{ service.title }}</h1><p class="mt-5 text-lg text-white/75">{{ service.subtitle }}</p></div></div>
    </section>
    <section class="section-pad"><div class="container-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><SectionHeading eyebrow="Ihre Möglichkeiten" :title="service.subtitle" :description="service.description"/><ul class="mt-9 space-y-4"><li v-for="feature in service.features" :key="feature" class="flex items-center gap-3 text-sm text-[#5d665a]"><CheckCircle2 class="text-[#7c8b75]" :size="19"/>{{ feature }}</li></ul><RouterLink to="/kontakt" class="btn-primary mt-9">Unverbindlich anfragen <ArrowRight :size="16"/></RouterLink></div><img :src="service.image" :alt="service.title" class="aspect-[1.1] w-full object-cover"/></div></section>
    <section class="bg-[#e9ece6] py-16"><div class="container-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p class="eyebrow">Der nächste Schritt</p><h2 class="mt-3 font-display text-3xl font-semibold">Lassen Sie uns Ihr Projekt besprechen.</h2></div><RouterLink to="/kontakt" class="btn-primary">Kontakt aufnehmen <ArrowRight :size="15"/></RouterLink></div></section>
  </main>
  <main v-else class="container-shell section-pad"><h1 class="font-display text-4xl">Leistung nicht gefunden</h1><RouterLink to="/" class="mt-6 inline-block underline">Zur Startseite</RouterLink></main>
</template>

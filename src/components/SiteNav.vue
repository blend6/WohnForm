<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BrandMark from './BrandMark.vue'
import { navLinks, contact } from '../data/site'

const open = ref(false)
const solid = ref(false)

const onScroll = () => { solid.value = window.scrollY > window.innerHeight * 0.82 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ open, solid }">
    <a href="#top" class="nav-brand" aria-label="WOHNFORM-BP Startseite">
      <BrandMark />
      <span class="brand-text">
        <b>WOHNFORM-BP</b>
        <i>Fenster · Türen · Rollläden</i>
      </span>
    </a>

    <nav class="nav-links">
      <a v-for="l in navLinks" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
    </nav>

    <div class="nav-right">
      <a :href="contact.whatsappHref" target="_blank" rel="noopener" class="nav-phone">{{ contact.phone }}</a>
      <a href="#kontakt" class="btn btn-solid nav-cta">Kontakt</a>
      <button
        class="burger"
        :aria-label="open ? 'Menü schließen' : 'Menü öffnen'"
        :aria-expanded="open"
        @click="open = !open"
      ><span /><span /></button>
    </div>
  </header>
</template>

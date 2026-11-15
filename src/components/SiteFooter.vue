<script setup lang="ts">
import BrandMark from './BrandMark.vue'
import { contact, services, brands } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-grid">
      <div class="f-brand">
        <BrandMark large />
        <b>WOHNFORM-BP</b><i>Fenster · Türen · Rollläden</i>
        <p class="f-claim">Qualität, die man sieht.<br>Handwerk, dem man vertraut.</p>
        <p class="mt-4 text-xs font-bold tracking-[.22em] text-white/40">{{ brands.join(' · ') }}</p>
      </div>

      <div class="f-col">
        <h4>Leistungen</h4>
        <a v-for="s in services" :key="s.title" href="#leistungen">{{ s.title }}</a>
      </div>

      <div class="f-col">
        <h4>Unternehmen</h4>
        <a href="#ueber-uns">Über uns</a><a href="#referenzen">Referenzen</a><a href="#ablauf">Ablauf</a><a href="#kontakt">Kontakt</a>
      </div>

      <div class="f-col">
        <h4>Kontakt</h4>
        <span>{{ contact.owner }}</span>
        <a :href="contact.whatsappHref" target="_blank" rel="noopener">{{ contact.phone }}</a>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <span>{{ contact.street }}<br>{{ contact.city }}</span>
        <span>{{ contact.hours }}</span>
      </div>
    </div>

    <div class="wrap footer-bar">
      <span>© {{ year }} WOHNFORM-BP · Fenster · Türen · Rollläden</span>
      <span class="f-legal"><a href="#">Impressum</a><a href="#">Datenschutz</a></span>
    </div>
  </footer>
</template>

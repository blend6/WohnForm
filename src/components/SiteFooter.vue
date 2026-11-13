<script setup lang="ts">
import { MapPin, Phone, Mail } from 'lucide-vue-next'
</script>
<template>
  <footer class="bg-[#222922] text-white">
    <div class="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div class="mb-5 flex items-center gap-3"><span class="grid h-9 w-9 place-items-center bg-white text-sm font-bold text-[#293128]">W.</span><span class="font-display text-xl font-extrabold">WOHNFORM.</span></div>
        <p class="max-w-sm text-sm leading-7 text-white/60">Fenster, Türen und Lösungen rund um Ihr Zuhause. Persönlich beraten. Sorgfältig umgesetzt.</p>
      </div>
      <div>
        <p class="mb-5 text-xs font-bold uppercase tracking-[.16em] text-[#a9b4a4]">Navigation</p>
        <div class="flex flex-col gap-3 text-sm text-white/70">
          <RouterLink to="/">Startseite</RouterLink><a href="/#leistungen">Leistungen</a><RouterLink to="/referenzen">Referenzen</RouterLink><RouterLink to="/kontakt">Kontakt</RouterLink>
        </div>
      </div>
      <div>
        <p class="mb-5 text-xs font-bold uppercase tracking-[.16em] text-[#a9b4a4]">Kontakt</p>
        <div class="flex flex-col gap-4 text-sm text-white/70">
          <p class="flex items-start gap-3"><MapPin :size="16" class="mt-0.5 shrink-0"/> Adresse nach Unternehmensfreigabe ergänzen</p>
          <p class="flex items-center gap-3"><Phone :size="16"/> Telefonnummer ergänzen</p>
          <p class="flex items-center gap-3"><Mail :size="16"/> E-Mail-Adresse ergänzen</p>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10"><div class="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-white/45 sm:flex-row"><span>© {{ new Date().getFullYear() }} WOHNFORM. Alle Rechte vorbehalten.</span><div class="flex gap-5"><a href="#" aria-label="Impressum Platzhalter">Impressum</a><a href="#" aria-label="Datenschutz Platzhalter">Datenschutz</a></div></div></div>
  </footer>
</template>

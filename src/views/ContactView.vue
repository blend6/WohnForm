<script setup lang="ts">
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-vue-next'
import QuoteForm from '../components/QuoteForm.vue'
</script>
<template>
  <main>
    <section v-reveal class="bg-[#e9ece6] py-16">
      <div class="container-shell">
        <p class="eyebrow">Kontakt</p>
        <h1 class="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight sm:text-7xl">Wir sind gerne für Sie da.</h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-[#737b70]">Beschreiben Sie Ihr Vorhaben. Wir melden uns, um die nächsten Schritte persönlich mit Ihnen zu besprechen.</p>
      </div>
    </section>
    <section class="section-pad">
      <div class="container-shell grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div v-reveal>
          <h2 class="font-display text-2xl font-semibold">Kontaktinformationen</h2>
          <p class="mt-3 text-sm leading-7 text-[#7a8177]">Die folgenden Kontaktdaten müssen vor dem Livegang mit den offiziellen Unternehmensdaten ergänzt werden.</p>
          <div v-reveal class="reveal-stagger mt-8 space-y-6 text-sm">
            <div class="flex gap-4"><MapPin class="text-[#778572]" :size="20"/><div><b>Standort</b><p class="mt-1 text-[#7a8177]">Offizielle Geschäftsadresse ergänzen</p></div></div>
            <div class="flex gap-4"><Phone class="text-[#778572]" :size="20"/><div><b>Telefon</b><p class="mt-1 text-[#7a8177]">Telefonnummer ergänzen</p></div></div>
            <div class="flex gap-4"><Mail class="text-[#778572]" :size="20"/><div><b>E-Mail</b><p class="mt-1 text-[#7a8177]">E-Mail-Adresse ergänzen</p></div></div>
            <div class="flex gap-4"><Clock class="text-[#778572]" :size="20"/><div><b>Öffnungszeiten</b><p class="mt-1 text-[#7a8177]">Öffnungszeiten ergänzen</p></div></div>
          </div>
          <div v-reveal class="mt-9">
            <h3 class="text-sm font-bold">Folgen Sie uns</h3>
            <div class="mt-4 flex gap-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook öffnen" class="social-link grid h-11 w-11 place-items-center rounded-full bg-[#293128] text-white hover:bg-[#52604f]">
                <Facebook :size="19"/>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram öffnen – Weiterleitung zur Facebook-Startseite" class="social-link grid h-11 w-11 place-items-center rounded-full bg-[#293128] text-white hover:bg-[#52604f]">
                <Instagram :size="19"/>
              </a>
            </div>
          </div>
        </div>
        <QuoteForm v-reveal/>
      </div>
    </section>
  </main>
</template>

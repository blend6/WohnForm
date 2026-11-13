<script setup lang="ts">
import { ArrowDown, ArrowUpRight, Check, ShieldCheck, Ruler, Wrench, Star, ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { services, projects } from '../data/content'
import SectionHeading from '../components/SectionHeading.vue'
import QuoteForm from '../components/QuoteForm.vue'
const openFaq = ref(0)
const faqs = [
  { q: 'Bieten Sie eine persönliche Beratung an?', a: 'Ja. Teilen Sie uns Ihr Vorhaben mit. Gemeinsam klären wir die nächsten Schritte und welche Lösung zu Ihrem Gebäude passt.' },
  { q: 'In welcher Region sind Sie tätig?', a: 'Die konkreten Einsatzgebiete werden nach Bestätigung durch das Unternehmen hier veröffentlicht. Fragen Sie gerne mit Ihrer Postleitzahl an.' },
  { q: 'Kann ich ein unverbindliches Angebot anfragen?', a: 'Ja. Nutzen Sie das Anfrageformular und beschreiben Sie kurz Ihr Projekt. Wir melden uns anschließend zur weiteren Abstimmung.' },
  { q: 'Übernehmen Sie auch den Ausbau alter Fenster?', a: 'Leistungsumfang und mögliche Demontage werden individuell bei der Beratung geklärt.' },
]
</script>

<template>
  <main>
    <section class="relative min-h-[620px] overflow-hidden bg-[#dfe3dc] lg:min-h-[680px]">
      <img class="hero-image absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90" alt="Modernes Wohnhaus mit großzügigen Fensterflächen" fetchpriority="high"/>
      <div class="absolute inset-0 bg-gradient-to-r from-[#182019]/80 via-[#182019]/45 to-transparent"></div>
      <div class="container-shell relative flex min-h-[620px] items-center py-16 lg:min-h-[680px]">
        <div class="hero-content max-w-[690px] text-white">
          <p class="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-[#d7dfd2]"><span class="h-px w-8 bg-[#c2d0bd]"></span> Qualität für Ihr Zuhause</p>
          <h1 class="font-display text-5xl font-semibold leading-[1.02] tracking-[-.065em] sm:text-7xl">Fenster. Türen.<br/><span class="text-[#cbd6c5]">Zuhause.</span></h1>
          <p class="mt-7 max-w-[510px] text-base leading-8 text-white/75 sm:text-lg">Durchdachte Lösungen für mehr Wohnkomfort – von der persönlichen Beratung bis zur fachgerechten Montage.</p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <RouterLink to="/kontakt" class="btn-primary !bg-white !text-[#252b25] hover:!bg-[#e4e9e1]">Beratung anfragen <ArrowUpRight :size="16"/></RouterLink>
            <a href="#leistungen" class="btn-outline !border-white/50 !text-white hover:!bg-white/10">Leistungen entdecken <ArrowDown :size="15"/></a>
          </div>
          <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/70">
            <span class="flex items-center gap-2"><Check :size="15"/> Individuelle Lösungen</span>
            <span class="flex items-center gap-2"><Check :size="15"/> Persönliche Beratung</span>
            <span class="flex items-center gap-2"><Check :size="15"/> Sorgfältige Umsetzung</span>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 hidden w-[31%] bg-[#f7f7f4] px-9 py-6 lg:block"><p class="eyebrow">WOHNFORM</p><p class="mt-2 font-display text-lg font-semibold">Wertigkeit, die bleibt.</p></div>
    </section>

    <section id="leistungen" v-reveal class="section-pad">
      <div class="container-shell">
        <div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Unsere Leistungen" title="Alles für ein Zuhause, das zu Ihnen passt." description="Von der einzelnen Komponente bis zur abgestimmten Gesamtlösung – entdecken Sie unsere Leistungsbereiche."/>
          <RouterLink to="/kontakt" class="btn-outline shrink-0">Projekt besprechen <ArrowUpRight :size="15"/></RouterLink>
        </div>
        <div v-reveal class="reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink v-for="(service, index) in services" :key="service.slug" :to="`/leistungen/${service.slug}`" class="group">
            <div class="card-image relative aspect-[1.22]"><img :src="service.image" :alt="service.title" class="image-cover" loading="lazy"/><span class="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[10px] font-bold tracking-widest text-[#65715f]">0{{ index + 1 }}</span></div>
            <div class="flex items-center justify-between border-b border-[#dfe2da] py-5"><div><h3 class="font-display text-xl font-semibold">{{ service.title }}</h3><p class="mt-1 text-xs text-[#858b81]">{{ service.subtitle }}</p></div><span class="grid h-9 w-9 place-items-center rounded-full border border-[#d8ddd4] transition group-hover:bg-[#293128] group-hover:text-white"><ArrowUpRight :size="16"/></span></div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section id="ueber-uns" v-reveal class="bg-[#e9ece6]">
      <div class="container-shell grid items-center gap-8 py-16 lg:grid-cols-2 lg:gap-16">
        <div class="relative"><img class="aspect-[1.15] w-full object-cover" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Heller, moderner Wohnbereich" loading="lazy"/><div class="absolute -bottom-5 -right-4 bg-[#293128] p-6 text-white sm:-right-6"><p class="font-display text-2xl font-semibold">Mit Sorgfalt.</p><p class="mt-1 text-xs text-white/60">Von Anfang bis Abschluss.</p></div></div>
        <div class="py-4"><SectionHeading eyebrow="Über WOHNFORM" title="Gute Lösungen beginnen mit gutem Zuhören." description="Jedes Gebäude und jedes Vorhaben ist anders. Deshalb setzen wir auf persönliche Abstimmung, verständliche Beratung und eine Umsetzung, bei der die Details stimmen."/><div class="mt-8 grid gap-5 sm:grid-cols-2"><div class="flex gap-3"><ShieldCheck class="shrink-0 text-[#71806c]" :size="22"/><div><h3 class="text-sm font-bold">Qualität im Detail</h3><p class="mt-1 text-xs leading-6 text-[#777f74]">Passende Produkte und sorgfältige Ausführung.</p></div></div><div class="flex gap-3"><Ruler class="shrink-0 text-[#71806c]" :size="22"/><div><h3 class="text-sm font-bold">Individuell geplant</h3><p class="mt-1 text-xs leading-6 text-[#777f74]">Lösungen abgestimmt auf Ihr Objekt.</p></div></div><div class="flex gap-3"><Wrench class="shrink-0 text-[#71806c]" :size="22"/><div><h3 class="text-sm font-bold">Sauber umgesetzt</h3><p class="mt-1 text-xs leading-6 text-[#777f74]">Klare Abläufe und sorgfältige Montage.</p></div></div><div class="flex gap-3"><Star class="shrink-0 text-[#71806c]" :size="22"/><div><h3 class="text-sm font-bold">Persönlicher Kontakt</h3><p class="mt-1 text-xs leading-6 text-[#777f74]">Ein offenes Ohr für Ihre Fragen.</p></div></div></div><RouterLink to="/kontakt" class="btn-primary mt-9">Lernen Sie uns kennen <ArrowUpRight :size="15"/></RouterLink></div>
      </div>
    </section>

    <section v-reveal class="section-pad">
      <div class="container-shell">
        <SectionHeading eyebrow="So arbeiten wir" title="In vier Schritten zu Ihrer Lösung." description="Transparent, nachvollziehbar und auf Ihr Projekt abgestimmt."/>
        <div v-reveal class="reveal-stagger mt-10 grid gap-8 md:grid-cols-4">
          <div v-for="(step, i) in [{t:'Kennenlernen',d:'Wir hören zu und verstehen, was Sie vorhaben.'},{t:'Aufmaß & Planung',d:'Wir klären Anforderungen und passende Möglichkeiten.'},{t:'Angebot',d:'Sie erhalten eine nachvollziehbare Zusammenstellung.'},{t:'Umsetzung',d:'Die vereinbarten Arbeiten werden sorgfältig ausgeführt.'}]" :key="step.t" class="border-t border-[#cdd3c9] pt-5"><p class="font-display text-4xl font-semibold text-[#9aa594]">0{{ i+1 }}</p><h3 class="mt-5 font-display text-lg font-semibold">{{ step.t }}</h3><p class="mt-2 text-sm leading-6 text-[#7a8177]">{{ step.d }}</p></div>
        </div>
      </div>
    </section>

    <section v-reveal class="bg-[#252d25] py-16 text-white">
      <div class="container-shell">
        <div class="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow="Einblicke" title="Arbeit, die für sich spricht." description="Einblicke in ausgewählte Leistungsbereiche und Projektbeispiele." :light="true"/><RouterLink to="/referenzen" class="btn-outline !border-white/30 !text-white">Alle Referenzen <ArrowUpRight :size="15"/></RouterLink></div>
        <div v-reveal class="reveal-stagger grid gap-5 md:grid-cols-2">
          <article v-for="project in projects.slice(0,2)" :key="project.id" class="group"><div class="card-image aspect-[1.55]"><img :src="project.image" :alt="project.title" class="image-cover" loading="lazy"/></div><div class="flex justify-between gap-4 border-b border-white/20 py-5"><div><p class="text-[10px] uppercase tracking-widest text-[#b4c1ae]">{{ project.category }} · {{ project.location }}</p><h3 class="mt-2 font-display text-xl font-semibold">{{ project.title }}</h3></div><ArrowUpRight class="shrink-0 text-white/60" :size="20"/></div></article>
        </div>
        <p class="mt-5 text-[11px] text-white/45">Hinweis: Die gezeigten Bilder sind derzeit illustrative Platzhalter und keine bestätigten Kundenreferenzen.</p>
      </div>
    </section>

    <section v-reveal class="section-pad">
      <div class="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen." description="Hier finden Sie erste Antworten. Details klären wir gerne persönlich."/><p class="mt-8 text-sm text-[#72796f]">Noch eine Frage offen? <RouterLink to="/kontakt" class="font-bold text-[#394637] underline underline-offset-4">Kontaktieren Sie uns.</RouterLink></p></div>
        <div class="border-t border-[#dfe2da]">
          <div v-for="(faq, i) in faqs" :key="faq.q" class="border-b border-[#dfe2da]">
            <button class="flex w-full items-center justify-between gap-5 py-5 text-left" :aria-expanded="openFaq === i" @click="openFaq = openFaq === i ? -1 : i"><span class="font-display text-base font-semibold">{{ faq.q }}</span><ChevronDown :size="18" class="shrink-0 transition" :class="{ 'rotate-180': openFaq === i }"/></button>
            <p v-if="openFaq === i" class="max-w-xl pb-6 text-sm leading-7 text-[#777f74]">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-reveal class="bg-[#e9ece6] py-16">
      <div class="container-shell grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <div v-reveal><SectionHeading eyebrow="Kontakt" title="Erzählen Sie uns von Ihrem Vorhaben." description="Ein paar Angaben genügen. Wir freuen uns darauf, von Ihnen zu hören."/><div class="mt-8 space-y-4 text-sm text-[#687064]"><p>✓ Unverbindliche Anfrage</p><p>✓ Persönliche Rückmeldung</p><p>✓ Individuelle Beratung</p></div></div>
        <QuoteForm v-reveal/>
      </div>
    </section>
  </main>
</template>

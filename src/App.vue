<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ThePreloader from './components/ThePreloader.vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import TrustBar from './components/TrustBar.vue'
import ServicesSection from './components/ServicesSection.vue'
import InteriorBand from './components/InteriorBand.vue'
import ExplodeSection from './components/ExplodeSection.vue'
import WhySection from './components/WhySection.vue'
import StepsSection from './components/StepsSection.vue'
import ReferencesSection from './components/ReferencesSection.vue'
import QuoteSection from './components/QuoteSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useScrollMotion } from './composables/useScrollMotion'

useScrollMotion()

/* Preloader: nach dem Laden ausblenden, Sicherheitsnetz nach 3,2 s */
const preDone = ref(false)
onMounted(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const hide = () => { preDone.value = true }
  const onLoad = () => setTimeout(hide, reduced ? 0 : 1500)
  if (document.readyState === 'complete') onLoad()
  else addEventListener('load', onLoad, { once: true })
  setTimeout(hide, 3200)
})
</script>

<template>
  <ThePreloader :done="preDone" />
  <SiteNav />
  <main id="top">
    <HeroSection />
    <TrustBar />
    <ServicesSection />
    <InteriorBand />
    <ExplodeSection />
    <WhySection />
    <StepsSection />
    <ReferencesSection />
    <QuoteSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

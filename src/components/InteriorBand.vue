<script setup lang="ts">
import interior from '../assets/img/interior.jpg'
</script>

<template>
  <section id="band-interior" class="band">
    <div class="band-media" aria-hidden="true">
      <img :src="interior" alt="" loading="lazy" data-parallax="0.26" data-zoom="0.08">
      <div class="band-veil" />
    </div>
    <div class="wrap band-inner">
      <p class="eyebrow reveal">Kompetenz aus einer Hand</p>
      <h2 class="reveal">Von der ersten Skizze bis zur letzten Schraube.</h2>
      <p class="lead reveal">Beratung, Aufmaß, Lieferung, Montage und Service — bei uns aus einer Hand. Sie haben einen Ansprechpartner, nicht fünf.</p>
    </div>
  </section>
</template>

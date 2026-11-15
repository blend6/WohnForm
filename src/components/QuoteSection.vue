<script setup lang="ts">
import montage from '../assets/img/montage.webp'
</script>

<template>
  <section class="quote">
    <div class="band-media" aria-hidden="true">
      <img :src="montage" alt="" loading="lazy" data-parallax="0.20" data-zoom="0.06">
      <div class="band-veil strong" />
    </div>
    <div class="wrap quote-inner">
      <blockquote class="reveal">„Termin gehalten, sauber gearbeitet, alles erklärt. So stellt man sich Handwerk vor.“</blockquote>
      <cite class="reveal">Familie H. · Peiting</cite>
    </div>
  </section>
</template>

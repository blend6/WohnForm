<script setup lang="ts">
import ServiceIcon from './ServiceIcon.vue'
import { services } from '../data/site'
import detail from '../assets/img/detail.webp'
</script>

<template>
  <section id="leistungen" class="section">
    <div class="wrap">
      <header class="sec-head">
        <p class="eyebrow reveal">Unsere Leistungen</p>
        <h2 class="reveal">Alles für Ihre Gebäudehülle.</h2>
        <p class="lead reveal">Sechs Gewerke, ein Ansprechpartner. Wir planen, liefern und montieren — sauber, termintreu und regional.</p>
      </header>

      <div class="cards">
        <article v-for="s in services" :key="s.title" class="card reveal" tabindex="0">
          <div class="card-art"><ServiceIcon :name="s.icon" /></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <ul class="chips"><li v-for="c in s.chips" :key="c">{{ c }}</li></ul>
        </article>
      </div>

      <figure class="ph ph-detail reveal">
        <img
          :src="detail"
          alt="Detailaufnahme einer Aluminium-Fensterecke mit Dichtung und Dreifachverglasung"
          loading="lazy" data-parallax="0.16" data-zoom="0.06"
        >
        <figcaption>Gehrungsstoß, Dichtungsebene und Randverbund — hier entscheidet sich, was ein Fenster wirklich kann.</figcaption>
      </figure>
    </div>
  </section>
</template>

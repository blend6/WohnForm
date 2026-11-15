<script setup lang="ts">
import { references } from '../data/site'
</script>

<template>
  <section id="referenzen" class="section refs">
    <div class="wrap">
      <header class="sec-head">
        <p class="eyebrow reveal">Referenzen</p>
        <h2 class="reveal">Jedes Projekt ist einzigartig.</h2>
        <p class="lead reveal">Ein Auszug aus unseren Arbeiten in Peiting, Schongau, Weilheim und Umgebung.</p>
      </header>

      <div class="ref-grid">
        <article
          v-for="r in references" :key="r.title"
          class="ref reveal" :class="r.size && `ref-${r.size}`"
        >
          <div class="ref-vis" :class="r.vis" aria-hidden="true">
            <img :src="r.img" :alt="r.alt" loading="lazy" data-parallax="0.10" data-zoom="0.09">
          </div>
          <div class="ref-meta"><span>{{ r.tag }}</span><h3>{{ r.title }}</h3><p>{{ r.text }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>

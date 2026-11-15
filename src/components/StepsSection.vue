<script setup lang="ts">
import { steps } from '../data/site'
</script>

<template>
  <section id="ablauf" class="section steps">
    <div class="wrap">
      <header class="sec-head center">
        <p class="eyebrow reveal">So arbeiten wir</p>
        <h2 class="reveal">In vier Schritten zum neuen Fenster.</h2>
      </header>

      <ol class="timeline">
        <li v-for="s in steps" :key="s.num" class="reveal">
          <span class="num">{{ s.num }}</span><h3>{{ s.title }}</h3><p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

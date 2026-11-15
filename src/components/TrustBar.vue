<script setup lang="ts">
import { trust } from '../data/site'
</script>

<template>
  <section class="trustbar">
    <div class="wrap trust-grid">
      <div v-for="t in trust" :key="t.label" class="trust reveal">
        <b :data-count="t.count" :data-suffix="t.suffix">{{ t.count }}{{ t.suffix }}</b>
        <span>{{ t.label }}</span>
      </div>
    </div>
  </section>
</template>

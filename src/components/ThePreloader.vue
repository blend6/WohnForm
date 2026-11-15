<script setup lang="ts">
defineProps<{ done: boolean }>()
</script>

<template>
  <div class="preloader" :class="{ done }">
    <svg class="pre-mark" viewBox="0 0 120 80" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
        <path class="dl" d="M8 44 L60 8 L112 44" />
        <path class="dl" d="M20 40 L20 72 L100 72 L100 40" />
        <path class="dl" d="M42 72 L42 52 L66 52 L66 72" />
        <path class="dl" d="M86 6 L86 62" />
        <path class="dl" d="M72 20 L104 20" />
      </g>
    </svg>
    <span class="pre-word">WOHNFORM-BP</span>
  </div>
</template>

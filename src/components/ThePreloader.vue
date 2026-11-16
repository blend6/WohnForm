<script setup lang="ts">
defineProps<{ done: boolean }>()
</script>

<template>
  <div class="preloader" :class="{ done }">
    <svg class="pre-mark" viewBox="0 0 290 115" aria-hidden="true">
      <path class="pf" fill="currentColor" d="M32 53 L133 14 L146 25 L131 30 L85 50 L85 85 L115 85 L115 72 L143 72 L143 103 L62 103 L62 57 L32 67 Z" />
      <g fill="none" stroke="currentColor" stroke-width="2.6">
        <path class="dl" d="M7 110 L285 110" />
        <path class="dl" d="M135 15 L260 80" />
        <path class="dl" d="M144 28 L257 90" />
        <path class="dl" d="M173 3 L173 106" />
        <path class="dl" d="M182 15 L182 108" />
        <path class="dl" d="M191 23 L191 108" />
        <path class="dl" d="M147 97 L263 97" />
        <path class="dl" d="M147 102 L253 102" />
      </g>
    </svg>
    <span class="pre-word">WOHNFORM-BP</span>
  </div>
</template>

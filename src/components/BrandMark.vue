<script setup lang="ts">
defineProps<{ large?: boolean }>()
</script>

<template>
  <svg viewBox="0 0 290 115" class="brand-mark" :class="{ lg: large }" aria-hidden="true">
    <!-- solid house (flyer logo) -->
    <path
      fill="currentColor"
      d="M32 53 L133 14 L146 25 L131 30 L85 50 L85 85 L115 85 L115 72 L143 72 L143 103 L62 103 L62 57 L32 67 Z"
    />
    <!-- architectural construction lines -->
    <g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="butt">
      <path d="M135 15 L260 80" /><path d="M144 28 L257 90" />
      <path d="M173 3 L173 106" /><path d="M182 15 L182 108" /><path d="M191 23 L191 108" />
      <path d="M147 97 L263 97" /><path d="M147 102 L253 102" />
    </g>
    <path d="M7 110 L285 110" stroke="currentColor" stroke-width="3.4" />
  </svg>
</template>

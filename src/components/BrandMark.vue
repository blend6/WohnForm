<script setup lang="ts">
defineProps<{ large?: boolean }>()
</script>

<template>
  <svg viewBox="0 0 120 80" class="brand-mark" :class="{ lg: large }" aria-hidden="true">
    <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square">
      <path d="M8 44 L60 8 L112 44" /><path d="M20 40 L20 72 L100 72 L100 40" />
      <path d="M42 72 L42 52 L66 52 L66 72" /><path d="M86 6 L86 62" /><path d="M72 20 L104 20" />
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string; light?: boolean }>()
</script>
<template>
  <div class="max-w-[680px]">
    <p class="eyebrow mb-4">{{ eyebrow }}</p>
    <h2 class="font-display text-3xl font-semibold leading-[1.13] tracking-[-.055em] sm:text-5xl" :class="light ? 'text-white' : 'text-[#242923]'">{{ title }}</h2>
    <p v-if="description" class="mt-5 max-w-xl text-[15px] leading-7" :class="light ? 'text-white/60' : 'text-[#747b71]'">{{ description }}</p>
  </div>
</template>

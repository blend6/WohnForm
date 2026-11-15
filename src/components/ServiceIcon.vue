<script setup lang="ts">
import type { ServiceIcon } from '../types'
defineProps<{ name: ServiceIcon }>()
</script>

<template>
  <svg viewBox="0 0 100 100" class="ico" :class="`ico-${name}`">
    <template v-if="name === 'window'">
      <rect class="s" x="16" y="12" width="68" height="76" rx="2" />
      <rect class="s dr" x="24" y="20" width="24" height="28" />
      <rect class="s dr" x="52" y="20" width="24" height="28" />
      <rect class="s dr" x="24" y="52" width="24" height="28" />
      <rect class="s dr" x="52" y="52" width="24" height="28" />
      <line class="s gl" x1="26" y1="46" x2="46" y2="22" />
      <line class="s gl" x1="54" y1="46" x2="74" y2="22" />
    </template>
    <template v-else-if="name === 'door'">
      <rect class="s" x="26" y="10" width="48" height="80" rx="2" />
      <rect class="s dr" x="33" y="17" width="34" height="66" />
      <line class="s hnd" x1="61" y1="44" x2="61" y2="58" />
      <circle class="s dot" cx="61" cy="51" r="1.5" />
    </template>
    <template v-else-if="name === 'shutter'">
      <rect class="s" x="16" y="14" width="68" height="14" rx="2" />
      <g class="slats">
        <line v-for="y in [36, 46, 56, 66, 76]" :key="y" class="s sl" x1="22" :y1="y" x2="78" :y2="y" />
      </g>
      <line class="s" x1="16" y1="88" x2="84" y2="88" />
    </template>
    <template v-else-if="name === 'mesh'">
      <rect class="s" x="18" y="18" width="64" height="64" rx="2" />
      <g class="mesh">
        <line v-for="x in [30, 42, 54, 66]" :key="'v' + x" class="s m" :x1="x" y1="18" :x2="x" y2="82" />
        <line v-for="y in [30, 42, 54, 66]" :key="'h' + y" class="s m" x1="18" :y1="y" x2="82" :y2="y" />
      </g>
    </template>
    <template v-else-if="name === 'garage'">
      <path class="s" d="M12 42 L50 16 L88 42" />
      <rect class="s" x="20" y="42" width="60" height="44" rx="2" />
      <g class="gpanels">
        <line v-for="y in [54, 65, 76]" :key="y" class="s gp" x1="20" :y1="y" x2="80" :y2="y" />
      </g>
    </template>
    <template v-else>
      <rect class="s" x="14" y="20" width="72" height="10" rx="2" />
      <path class="s awn" d="M14 30 L22 62 L78 62 L86 30 Z" />
      <g class="scallop">
        <path class="s" d="M22 62 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" />
      </g>
    </template>
  </svg>
</template>

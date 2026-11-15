<script setup lang="ts">
import { layers } from '../data/site'

/** Sechs 3D-Ebenen: Rahmen, Dichtung, Beschlag, 3× Glas */
const plates: { cls: string; tag?: string }[] = [
  { cls: 'frame', tag: '01 · Blendrahmen' },
  { cls: 'seal', tag: '02 · Dichtung' },
  { cls: 'fit', tag: '03 · Beschlag' },
  { cls: 'glass' },
  { cls: 'glass' },
  { cls: 'glass', tag: '04 · 3-fach Glas' },
]
</script>

<template>
  <section id="aufbau" class="explode">
    <div class="explode-sticky">
      <div class="wrap explode-grid">
        <div class="explode-copy">
          <p class="eyebrow">Technik im Detail</p>
          <h2>Ein Fenster ist<br>mehr als Glas.</h2>
          <p class="lead">Scrollen Sie durch den Aufbau — Schicht für Schicht. Genau diese Details entscheiden über Wärmedämmung, Schallschutz und Einbruchsicherheit.</p>

          <ol id="layerList" class="layer-list">
            <li v-for="(l, i) in layers" :key="l.title" :data-layer="i"><b>{{ l.title }}</b><span>{{ l.text }}</span></li>
          </ol>
        </div>

        <div class="explode-stage" aria-hidden="true">
          <div id="ex3d" class="ex3d">
            <div v-for="(p, i) in plates" :key="i" class="ex-layer" :data-l="i">
              <div class="ex-plate" :class="p.cls" />
              <span v-if="p.tag" class="ex-tag">{{ p.tag }}</span>
            </div>
          </div>
          <div class="ex-progress"><i id="exBar" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

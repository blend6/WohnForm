<script setup lang="ts">
import { whyPoints } from '../data/site'
</script>

<template>
  <section id="ueber-uns" class="section why">
    <div class="wrap why-grid">
      <div class="why-copy">
        <p class="eyebrow reveal">Warum WOHNFORM-BP?</p>
        <h2 class="reveal">Regional verwurzelt.<br>Handwerklich kompromisslos.</h2>
        <p class="lead reveal">Wir sind kein anonymer Onlineshop. Wir kommen zu Ihnen, messen selbst auf, montieren mit eigenen Fachkräften und sind auch danach erreichbar.</p>

        <ul class="check">
          <li v-for="w in whyPoints" :key="w.title" class="reveal"><i /><b>{{ w.title }}</b>{{ w.text }}</li>
        </ul>
      </div>

      <!-- 3D-Tür, öffnet sich beim Scrollen -->
      <div class="why-stage" aria-hidden="true">
        <div id="door3d" class="door3d">
          <div class="door-wall">
            <div class="door-frame">
              <div class="door-room"><span class="door-floor" /></div>
              <div class="door-leaf">
                <div class="door-face">
                  <div class="door-strip" />
                  <div class="door-bar" />
                </div>
                <div class="door-edge" />
              </div>
            </div>
            <div class="door-lamp" />
          </div>
          <div class="door-step" />
        </div>
      </div>
    </div>
  </section>
</template>

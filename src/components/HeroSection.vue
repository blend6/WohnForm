<script setup lang="ts">
import hero from '../assets/img/hero.webp'
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-media" aria-hidden="true">
      <img :src="hero" alt="" data-parallax="0.22" data-zoom="0.10" fetchpriority="high">
      <div class="hero-veil" />
      <div class="hero-grid" />
    </div>

    <div class="hero-inner">
      <p class="eyebrow reveal">Meisterbetrieb · Peiting im Pfaffenwinkel</p>
      <h1 class="hero-title">
        <span class="line"><span class="w">QUALITÄT,</span></span>
        <span class="line"><span class="w">DIE MAN SIEHT.</span></span>
      </h1>
      <p class="hero-sub reveal">
        Handwerk, dem man vertraut. Ihr Partner für modernes Wohnen — Fenster, Türen, Rollläden und
        Garagentore. Von der Beratung bis zur Montage, alles aus einer Hand.
      </p>
      <div class="hero-cta reveal">
        <a href="#kontakt" class="btn btn-solid btn-lg">Kostenlose Beratung anfordern</a>
        <a href="#leistungen" class="btn btn-ghost btn-lg">Leistungen ansehen</a>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true"><span />scrollen</div>
  </section>
</template>

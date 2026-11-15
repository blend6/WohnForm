<script setup lang="ts">
import { reactive, ref } from 'vue'
import { contact, topics } from '../data/site'

const form = reactive({ name: '', email: '', tel: '', topic: topics[0], msg: '' })
const errors = reactive({ name: false, email: false })
const sent = ref(false)

function validate(): boolean {
  errors.name = !form.name.trim()
  errors.email = !/^\S+@\S+\.\S+$/.test(form.email.trim())
  return !errors.name && !errors.email
}

/** Kein Backend: öffnet das E-Mail-Programm mit vorausgefüllter Anfrage. */
function submit() {
  if (!validate()) return
  const subject = `Anfrage über die Website: ${form.topic}`
  const body = [
    `Name: ${form.name}`,
    `E-Mail: ${form.email}`,
    form.tel ? `Telefon: ${form.tel}` : '',
    `Thema: ${form.topic}`,
    '',
    form.msg,
  ].join('\n')
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
  Object.assign(form, { name: '', email: '', tel: '', topic: topics[0], msg: '' })
}

const bad = '#B4444A'
</script>

<template>
  <section id="kontakt" class="section contact">
    <div class="wrap contact-grid">
      <div class="contact-copy">
        <p class="eyebrow reveal">Kontakt</p>
        <h2 class="reveal">Jetzt unverbindlich<br>anfragen.</h2>
        <p class="lead reveal">Wir sind für Sie da. Rufen Sie an oder schreiben Sie uns — wir melden uns innerhalb eines Werktags.</p>

        <ul class="contact-list">
          <li class="reveal"><i class="ci ci-phone" /><a :href="contact.whatsappHref" target="_blank" rel="noopener">{{ contact.phone }}</a><span>WhatsApp · {{ contact.hours }}</span></li>
          <li class="reveal"><i class="ci ci-mail" /><a :href="`mailto:${contact.email}`">{{ contact.email }}</a><span>Antwort in 24 h</span></li>
          <li class="reveal"><i class="ci ci-pin" /><span class="strong">{{ contact.street }}, {{ contact.city }}</span><span>Inhaber: {{ contact.owner }}</span></li>
        </ul>
      </div>

      <form class="contact-form reveal" novalidate @submit.prevent="submit">
        <div class="field">
          <input id="f-name" v-model="form.name" type="text" name="name" required placeholder=" " :style="{ borderColor: errors.name ? bad : '' }">
          <label for="f-name">Ihr Name</label>
        </div>
        <div class="row">
          <div class="field">
            <input id="f-mail" v-model="form.email" type="email" name="email" required placeholder=" " :style="{ borderColor: errors.email ? bad : '' }">
            <label for="f-mail">E-Mail</label>
          </div>
          <div class="field">
            <input id="f-tel" v-model="form.tel" type="tel" name="tel" placeholder=" ">
            <label for="f-tel">Telefon</label>
          </div>
        </div>
        <div class="field">
          <select id="f-topic" v-model="form.topic" name="topic">
            <option v-for="t in topics" :key="t">{{ t }}</option>
          </select>
          <label for="f-topic" class="lbl-static">Thema</label>
        </div>
        <div class="field">
          <textarea id="f-msg" v-model="form.msg" name="msg" rows="4" placeholder=" " />
          <label for="f-msg">Ihr Anliegen</label>
        </div>
        <button type="submit" class="btn btn-solid btn-lg btn-full">Anfrage senden</button>
        <p class="form-note">Die Anfrage wird über Ihr E-Mail-Programm an {{ contact.email }} gesendet.</p>
        <p class="form-ok" :class="{ show: sent }">Danke! Ihr E-Mail-Programm wurde geöffnet — wir melden uns.</p>
      </form>
    </div>
  </section>
</template>

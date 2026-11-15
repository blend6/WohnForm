<script setup lang="ts">
import { reactive, ref } from 'vue'
import { contact, topics } from '../data/site'
import { sendInquiry } from '../composables/useEmailJs'

const empty = () => ({ name: '', email: '', tel: '', topic: topics[0], msg: '' })
const form = reactive(empty())
const errors = reactive({ name: false, email: false })
const status = ref<'idle' | 'sending' | 'ok' | 'error'>('idle')

function validate(): boolean {
  errors.name = !form.name.trim()
  errors.email = !/^\S+@\S+\.\S+$/.test(form.email.trim())
  return !errors.name && !errors.email
}

/** Versand über EmailJS – die Anfrage landet direkt im Postfach. */
async function submit() {
  if (status.value === 'sending' || !validate()) return
  status.value = 'sending'
  try {
    await sendInquiry({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.tel.trim() || '—',
      topic: form.topic,
      message: form.msg.trim() || '—',
    })
    status.value = 'ok'
    Object.assign(form, empty())
  } catch (err) {
    console.error('[EmailJS]', err)
    status.value = 'error'
  }
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
        <button type="submit" class="btn btn-solid btn-lg btn-full disabled:cursor-wait! disabled:opacity-70" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden' }}
        </button>
        <p class="form-note">Wir melden uns innerhalb eines Werktags bei Ihnen.</p>
        <p class="form-ok" :class="{ show: status === 'ok' }">Danke! Ihre Anfrage ist eingegangen — wir melden uns.</p>
        <p class="form-ok bg-[#B4444A]!" :class="{ show: status === 'error' }">
          Senden fehlgeschlagen. Bitte per
          <a :href="contact.whatsappHref" target="_blank" rel="noopener" class="underline">WhatsApp</a> oder
          <a :href="`mailto:${contact.email}`" class="underline">E-Mail</a> melden.
        </p>
      </form>
    </div>
  </section>
</template>

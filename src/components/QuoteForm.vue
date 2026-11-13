<script setup lang="ts">
import { ref } from 'vue'
import { CheckCircle2, Send } from 'lucide-vue-next'
const sent = ref(false)
const form = ref({ name: '', email: '', phone: '', service: '', message: '', consent: false })
const errors = ref('')
function submitForm() {
  errors.value = ''
  if (!form.value.name || !form.value.email || !form.value.service || !form.value.consent) {
    errors.value = 'Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie den Datenschutzhinweis.'
    return
  }
  // Demo only: connect a backend or form provider before production.
  const subject = encodeURIComponent(`Anfrage: ${form.value.service}`)
  const body = encodeURIComponent(`Name: ${form.value.name}\nE-Mail: ${form.value.email}\nTelefon: ${form.value.phone}\nLeistung: ${form.value.service}\nNachricht: ${form.value.message}`)
  window.location.href = `mailto:kontakt@ihre-domain.de?subject=${subject}&body=${body}`
  sent.value = true
}
</script>
<template>
  <form class="rounded-sm border border-[#e4e6df] bg-white p-6 sm:p-8" @submit.prevent="submitForm">
    <div v-if="sent" class="mb-5 flex items-center gap-2 bg-[#edf3eb] p-3 text-sm text-[#40543d]"><CheckCircle2 :size="18"/> Ihr E-Mail-Programm sollte sich mit Ihrer Anfrage öffnen.</div>
    <div class="grid gap-5 sm:grid-cols-2">
      <label class="field-label">Ihr Name *<input v-model="form.name" class="field-input" placeholder="Vor- und Nachname" autocomplete="name" /></label>
      <label class="field-label">E-Mail-Adresse *<input v-model="form.email" type="email" class="field-input" placeholder="name@beispiel.de" autocomplete="email" /></label>
      <label class="field-label">Telefonnummer<input v-model="form.phone" class="field-input" placeholder="+49 ..." autocomplete="tel" /></label>
      <label class="field-label">Wofür interessieren Sie sich? *
        <select v-model="form.service" class="field-input"><option value="" disabled>Bitte auswählen</option><option>Fenster</option><option>Türen</option><option>Rollläden</option><option>Insektenschutz</option><option>Garagentore</option><option>Sonnenschutz</option><option>Beratung allgemein</option></select>
      </label>
      <label class="field-label sm:col-span-2">Ihre Nachricht<textarea v-model="form.message" rows="4" class="field-input resize-y" placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben ..."></textarea></label>
    </div>
    <label class="mt-5 flex items-start gap-3 text-xs leading-5 text-[#737a70]"><input v-model="form.consent" type="checkbox" class="mt-1 accent-[#52604f]" /><span>Ich habe die Datenschutzhinweise gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *</span></label>
    <p v-if="errors" class="mt-3 text-xs text-red-700" role="alert">{{ errors }}</p>
    <button class="btn-primary mt-6 w-full sm:w-auto" type="submit">Anfrage vorbereiten <Send :size="15"/></button>
    <p class="mt-3 text-[11px] leading-5 text-[#92988f]">Hinweis: Vor dem Livegang die E-Mail-Adresse ersetzen und das Formular mit einem sicheren Backend/Formularanbieter verbinden. Die aktuelle Version öffnet den lokalen E-Mail-Client.</p>
  </form>
</template>
<style scoped>
.field-label { display:flex; flex-direction:column; gap:9px; color:#3e453d; font-size:12px; font-weight:700; }
.field-input { width:100%; border:1px solid #dfe3da; border-radius:2px; background:#fbfbf9; padding:13px 14px; color:#252b25; font-size:13px; font-weight:400; }
.field-input::placeholder { color:#a2a79f; }
</style>

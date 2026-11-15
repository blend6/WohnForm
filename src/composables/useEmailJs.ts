import emailjs from '@emailjs/browser'

/**
 * EmailJS-Zugangsdaten. Diese Werte sind öffentlich (sie landen ohnehin im Browser-Bundle);
 * Schutz erfolgt über "Allowed origins" im EmailJS-Dashboard.
 * Umgebungsvariablen (VITE_EMAILJS_*) überschreiben die Standardwerte.
 */
const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_2azao8g'
const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_qzb3xzl'
const PUBLIC_KEY: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'KUQn3juir4py4OoOT'

export const emailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/** Variablen, die im EmailJS-Template als {{name}}, {{email}} … verfügbar sind */
export interface InquiryParams {
  name: string
  email: string
  phone: string
  topic: string
  message: string
  [key: string]: unknown
}

export function sendInquiry(params: InquiryParams) {
  if (!emailJsConfigured) return Promise.reject(new Error('EmailJS ist nicht konfiguriert'))
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })
}

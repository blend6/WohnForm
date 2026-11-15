import emailjs from '@emailjs/browser'

/** Zugangsdaten aus .env.local bzw. den Umgebungsvariablen des Hostings */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

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
  return emailjs.send(SERVICE_ID!, TEMPLATE_ID!, params, { publicKey: PUBLIC_KEY! })
}

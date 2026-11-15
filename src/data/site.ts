import type { NavLink, TrustItem, Service, Layer, WhyPoint, Step, Reference } from '../types'
import refTuer from '../assets/img/ref-tuer.jpg'
import refRollladen from '../assets/img/ref-rollladen.jpg'
import refTerrasse from '../assets/img/ref-terrasse.jpg'

/** Kontaktdaten laut Flyer */
export const contact = {
  owner: 'Bajram Prvetica',
  street: 'Kohlenstraße 3b',
  city: '86971 Peiting',
  phone: '0157 55132616',
  /** Klick auf die Nummer öffnet direkt den WhatsApp-Chat */
  whatsappHref: 'https://wa.me/4915755132616',
  email: 'Prvetica.Bajram@web.de',
  hours: 'Mo–Fr 07:00–17:00 Uhr',
} as const

export const brands = ['VEKA', 'GEALAN', 'SCHÜCO'] as const

export const navLinks: NavLink[] = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#aufbau', label: 'Technik' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#ueber-uns', label: 'Über uns' },
]

export const trust: TrustItem[] = [
  { count: 15, label: 'Jahre Erfahrung' },
  { count: 1400, suffix: '+', label: 'montierte Elemente' },
  { count: 100, suffix: '%', label: 'eigene Monteure' },
  { count: 5, suffix: ' J.', label: 'Gewährleistung' },
]

export const services: Service[] = [
  { icon: 'window', title: 'Fenster',
    text: 'Hochwertige Fensterlösungen von VEKA, GEALAN und SCHÜCO — in Kunststoff, Aluminium oder Holz. Für mehr Licht, bessere Dämmung und ein modernes Zuhause.',
    chips: ['3-fach Verglasung', 'RC2 Sicherheit', 'Uw ab 0,73'] },
  { icon: 'door', title: 'Türen',
    text: 'Sichere, stilvolle und energieeffiziente Haustüren, Innentüren und Nebeneingangstüren — individuell auf Ihre Bedürfnisse abgestimmt.',
    chips: ['Haustüren', 'Innentüren', 'Nebeneingang'] },
  { icon: 'shutter', title: 'Rollläden',
    text: 'Manuell oder elektrisch — für Komfort, Sichtschutz und optimalen Wärmeschutz. Nachrüstung im Bestand inklusive.',
    chips: ['Elektrisch', 'Smart Home', 'Nachrüstung'] },
  { icon: 'mesh', title: 'Insektenschutz',
    text: 'Individuelle Lösungen für Fenster und Türen — frische Luft ohne lästige Insekten. Als Spannrahmen, Plissee oder Drehtür.',
    chips: ['Spannrahmen', 'Plissee', 'Drehtür'] },
  { icon: 'garage', title: 'Garagentore',
    text: 'Funktional, robust und modern — Sektionaltore und Rolltore für eine sichere und komfortable Zufahrt. Mit Funkantrieb oder App-Steuerung.',
    chips: ['Sektionaltor', 'Rolltor', 'Antrieb'] },
  { icon: 'sun', title: 'Sonnenschutz',
    text: 'Markisen, Raffstores und Screens — für ein angenehmes Wohlfühlklima zu jeder Zeit, drinnen wie draußen.',
    chips: ['Markisen', 'Raffstore', 'Screens'] },
]

export const layers: Layer[] = [
  { title: 'Blendrahmen', text: 'Mehrkammerprofil, thermisch getrennt' },
  { title: 'Dichtungsebene', text: 'Zwei umlaufende EPDM-Dichtungen' },
  { title: 'Sicherheitsbeschlag', text: 'Pilzkopfverriegelung, RC2 geprüft' },
  { title: '3-fach Wärmeschutzglas', text: 'Ug 0,5 W/m²K, Warme Kante' },
]

export const whyPoints: WhyPoint[] = [
  { title: 'Erfahrung und Fachkompetenz', text: 'Über 15 Jahre Praxis am Bau und im Bestand.' },
  { title: 'Individuelle Beratung und Planung', text: 'Vor Ort, ehrlich und ohne Verkaufsdruck.' },
  { title: 'Hochwertige Produkte namhafter Hersteller', text: 'Markenqualität von VEKA, GEALAN und SCHÜCO statt Billigimport.' },
  { title: 'Saubere Montage durch Fachpersonal', text: 'Fachgerecht, zuverlässig und termingerecht.' },
  { title: 'Zuverlässig, termintreu und regional', text: 'Kurze Wege im Pfaffenwinkel.' },
]

export const steps: Step[] = [
  { num: '01', title: 'Beratung', text: 'Kostenloses Erstgespräch bei Ihnen zu Hause. Wir hören zu, bevor wir empfehlen.' },
  { num: '02', title: 'Aufmaß & Angebot', text: 'Millimetergenaues Aufmaß durch uns — und ein transparentes Festpreisangebot.' },
  { num: '03', title: 'Montage', text: 'Termintreu, staubarm und sauber. Nach RAL-Richtlinie eingebaut und abgedichtet.' },
  { num: '04', title: 'Übergabe & Service', text: 'Einweisung, Endreinigung und ein Ansprechpartner, der auch danach rangeht.' },
]

export const references: Reference[] = [
  { img: refTuer, alt: 'Anthrazitfarbene Aluminium-Haustür mit Griffstange', vis: 'vis-door',
    tag: 'Sanierung · Schongau', title: 'Haustür & Nebeneingang',
    text: 'Aluminium-Haustür RC2 mit Fingerprint.' },
  { img: refRollladen, alt: 'Fassade mit neuen Fenstern und Rollläden', vis: 'vis-shutter', size: 'lg',
    tag: 'Bestand · Weilheim', title: 'Rollladen-Nachrüstung',
    text: '14 Vorbaurollläden, funkgesteuert.' },
  { img: refTerrasse, alt: 'Terrassenfront mit Raffstore-Sonnenschutz', vis: 'vis-terrace', size: 'wide',
    tag: 'Umbau · Pfaffenwinkel', title: 'Terrassenfront mit Sonnenschutz',
    text: 'Bodentiefe Verglasung, Screens und Markise als Gesamtkonzept.' },
]

export const topics = [
  'Fenster', 'Türen', 'Rollläden', 'Insektenschutz', 'Garagentore', 'Sonnenschutz', 'Mehreres / Beratung',
]

import type { Project, Service } from '../types'

export const services: Service[] = [
  {
    slug: 'fenster',
    title: 'Fenster',
    subtitle: 'Mehr Licht. Mehr Ruhe. Mehr Wohnqualität.',
    description: 'Moderne Fenster verbinden Wärmedämmung, Sicherheit und zeitloses Design. Wir begleiten Sie von der Auswahl bis zur fachgerechten Montage.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    features: ['Kunststoff-, Aluminium- und Holzfenster', 'Wärme- und Schallschutzverglasung', 'Individuelle Maße und Ausführungen', 'Demontage und fachgerechter Einbau'],
  },
  {
    slug: 'tueren',
    title: 'Türen',
    subtitle: 'Der erste Eindruck beginnt am Eingang.',
    description: 'Haustüren und Innentüren, die Architektur, Komfort und Sicherheit miteinander verbinden – passend zu Ihrem Zuhause.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    features: ['Moderne Haustüren', 'Innentüren und Nebeneingangstüren', 'Sicherheits- und Verriegelungssysteme', 'Individuelle Farben und Oberflächen'],
  },
  {
    slug: 'rolllaeden',
    title: 'Rollläden',
    subtitle: 'Komfort und Schutz auf Knopfdruck.',
    description: 'Rollladensysteme sorgen für Sichtschutz, Verdunkelung und zusätzlichen Wärmeschutz. Auf Wunsch auch elektrisch steuerbar.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    features: ['Manuelle und elektrische Bedienung', 'Nachrüstung bei Bestandsgebäuden', 'Sicht- und Sonnenschutz', 'Smart-Home-kompatible Lösungen'],
  },
  {
    slug: 'insektenschutz',
    title: 'Insektenschutz',
    subtitle: 'Frische Luft. Unbeschwerte Räume.',
    description: 'Maßgefertigte Insektenschutzlösungen für Fenster und Türen – dezent im Design und komfortabel im Alltag.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    features: ['Spannrahmen für Fenster', 'Dreh- und Schiebetüren', 'Plissee-Systeme', 'Maßanfertigung für Ihre Einbausituation'],
  },
  {
    slug: 'garagentore',
    title: 'Garagentore',
    subtitle: 'Sicher ankommen. Einfach bedienen.',
    description: 'Funktionale und formschöne Garagentore mit komfortabler Bedienung und passenden Antriebslösungen.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    features: ['Sektional- und Rolltore', 'Elektrische Antriebe', 'Sicherheitsfunktionen', 'Beratung zu Einbau und Modernisierung'],
  },
  {
    slug: 'sonnenschutz',
    title: 'Sonnenschutz',
    subtitle: 'Das richtige Licht zu jeder Tageszeit.',
    description: 'Außenliegender Sonnenschutz hilft, Räume angenehm zu halten und Licht gezielt zu lenken – für Fenster, Terrassen und große Glasflächen.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    features: ['Markisen für Terrasse und Balkon', 'Raffstores und Screens', 'Individuelle Bedienlösungen', 'Beratung passend zur Architektur'],
  },
]

export const projects: Project[] = [
  { id: 1, title: 'Fenster-Modernisierung', category: 'Fenster', location: 'Peiting & Umgebung', description: 'Austausch bestehender Fenster mit Fokus auf Licht, Komfort und Wärmeschutz.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', tag: 'Modernisierung' },
  { id: 2, title: 'Eingangsbereich neu gedacht', category: 'Türen', location: 'Region Pfaffenwinkel', description: 'Ein neuer Eingangsbereich mit klarer Linienführung und stimmiger Materialwahl.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85', tag: 'Haustür' },
  { id: 3, title: 'Mehr Komfort im Alltag', category: 'Rollläden', location: 'Projektbeispiel', description: 'Komfortable Beschattungslösung für mehr Privatsphäre und einfache Bedienung.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85', tag: 'Komfort' },
  { id: 4, title: 'Wohnen mit Tageslicht', category: 'Sonnenschutz', location: 'Projektbeispiel', description: 'Sonnenschutz als Ergänzung zu großzügigen Fensterflächen.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', tag: 'Sonnenschutz' },
]

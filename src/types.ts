export interface NavLink { href: string; label: string }
export interface TrustItem { count: number; suffix?: string; label: string }
export type ServiceIcon = 'window' | 'door' | 'shutter' | 'mesh' | 'garage' | 'sun'
export interface Service { icon: ServiceIcon; title: string; text: string; chips: string[] }
export interface Layer { title: string; text: string }
export interface WhyPoint { title: string; text: string }
export interface Step { num: string; title: string; text: string }
export interface Reference {
  img: string; alt: string; vis: string; size?: 'lg' | 'wide'
  tag: string; title: string; text: string
}

export interface Service {
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
}

export interface Project {
  id: number
  title: string
  category: string
  location: string
  description: string
  image: string
  tag: string
}

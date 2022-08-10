export interface Site {
  name: string
  title: string
  description: string
  image?: string
  video?: string
  features: Feature[]
  highlights: Highlight[]
  faqs: FAQ[]
  twitterHandle: string
}

export interface Feature {
  title: string
  description: string
  image: string
}

export interface Highlight {
  icon: string
  title: string
  description: string
}

export interface FAQ {
  q: string
  a: string
}

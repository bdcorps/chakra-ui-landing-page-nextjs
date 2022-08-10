export interface SiteType {
  name: string
  logo: string
  title: string
  description: string
  image?: string
  video?: string
  features: FeatureType[]
  highlights: HighlightType[]
  faqs: FAQType[]
  twitterHandle: string
}

export interface FeatureType {
  title: string
  description: string
  image: string
}

export interface HighlightType {
  icon: string
  title: string
  description: string
}

export interface FAQType {
  q: string
  a: string
}

export interface CTAType {
  name: string
  link: string
}

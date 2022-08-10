export interface Site {
  email: string
  subdomain: string
  name: string
  description: string
  posts: Post[]
}

export interface Post {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export interface Data {
  name: string
}

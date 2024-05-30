import { groq } from 'next-sanity'

export const settingsQuery = groq`*[_type == 'settings'][0]`
export const postsQuery = groq`*[_type == 'posts']{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current}`
export const postQuery = groq`*[_type == 'posts' && slug.current == $slug][0]{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content }`
export const eventsQuery = groq`*[_type == 'events']{_id, 'slug': slug.current, title, subtitle, banner, date, 'category': category->slug.current}`
export const eventQuery = groq`*[_type == 'events' && slug.current == $slug][0]{
  _id, title, subtitle, banner, content, date, 'slug': slug.current, 'category': category->slug.current
}`
export const servicesQuery = groq`*[_type == 'services']{ _id, banner, order, title, 'slug': slug.current }`
export const serviceQuery = groq`*[_type == 'services' && slug.current == $slug][0]{
  _id, banner, order, title, 'slug': slug.current, content
}`
export const projectsQuery = groq`*[_type == 'projects' && category->slug.current == $type]{
  _id, title, subtitle, banner, date, 'slug': slug.current, 'category': category->slug.current
}`
export const projectQuery = groq`*[_type == 'projects' && slug.current == $slug][0]{
  _id, title, subtitle, banner, date, 'slug': slug.current, 'category': category->slug.current, content
}`
export const aboutQuery = groq`*[_type == 'about'][0]`

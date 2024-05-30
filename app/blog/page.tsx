import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { postsQuery } from '@/sanity/queries'
import { PostsQueryResult } from '@/sanity/sanity-types'
import groq from 'groq'
import Link from 'next/link'

export default async function Page() {
  const posts = await sanityFetch<PostsQueryResult>({ query: postsQuery })
  return (
    <Section>
      {posts.map(post => (
        <div>
          <div>
            <Link href={`blog/${post.slug.current}`}>{post.title}</Link>
          </div>
          <sub>{post.subtitle}</sub>
          <div>{post.date}</div>
        </div>
      ))}
    </Section>
  )
}

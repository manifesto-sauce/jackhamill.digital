import LinkFrame from '@/components/LinkFrame'
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
        <LinkFrame
          key={post._id}
          title={post.title}
          subtitle={post.subtitle}
          href={`blog/${post.slug}`}
        />
      ))}
    </Section>
  )
}

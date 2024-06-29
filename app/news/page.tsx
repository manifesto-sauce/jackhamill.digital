import LinkFrame from '@/components/LinkFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { eventsQuery, postsQuery } from '@/sanity/queries'
import { EventsQueryResult, PostsQueryResult } from '@/sanity/sanity-types'
import groq from 'groq'
import Link from 'next/link'
import Client from './client'

export default async function Page() {
  const posts = await sanityFetch<PostsQueryResult>({ query: postsQuery })

  const events = await sanityFetch<EventsQueryResult>({ query: eventsQuery })

  return (
    <>
      <Client />
      <Section>
        {events.map(event => (
          <LinkFrame
            className='textBox'
            key={event._id}
            title={event.title}
            subtitle={event.subtitle}
            href={`news/events/${event.slug}`}
          />
        ))}
        {posts.map(post => (
          <LinkFrame
            className='textBox'
            key={post._id}
            title={post.title}
            subtitle={post.subtitle}
            href={`news/posts/${post.slug}`}
          />
        ))}
      </Section>
    </>
  )
}

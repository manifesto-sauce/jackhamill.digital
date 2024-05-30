import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { eventsQuery, postsQuery } from '@/sanity/queries'
import { EventsQueryResult, PostsQueryResult } from '@/sanity/sanity-types'
import groq from 'groq'
import Link from 'next/link'

export default async function Events() {
  const events = await sanityFetch<EventsQueryResult>({ query: eventsQuery })
  return (
    <Section>
      {events.map(event => (
        <div>
          <div>
            <Link href={`events/${event.slug.current}`}>{event.title}</Link>
          </div>
          <sub>{event.subtitle}</sub>
          <div>{event.date}</div>
        </div>
      ))}
    </Section>
  )
}

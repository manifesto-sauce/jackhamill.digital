import ContentFrame from '@/components/ContentFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { eventQuery, postQuery } from '@/sanity/queries'
import { EventQueryResult, PostQueryResult } from '@/sanity/sanity-types'
import invariant from 'tiny-invariant'

export default async function Event({ params }) {
  const event = await sanityFetch<EventQueryResult>({
    query: eventQuery,
    params: { slug: params.event }
  })
  invariant(event)
  return (
    <>
      <Section>
        <div>{event.title}</div>
        {event.subtitle && <div>{event.subtitle}</div>}
      </Section>

      {event.content && <ContentFrame content={event.content}></ContentFrame>}
    </>
  )
}

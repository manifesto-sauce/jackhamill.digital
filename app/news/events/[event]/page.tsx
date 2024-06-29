import ContentFrame from '@/components/ContentFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { eventQuery, postQuery } from '@/sanity/queries'
import { EventQueryResult, PostQueryResult } from '@/sanity/sanity-types'
import invariant from 'tiny-invariant'

export default async function Event({ params }) {
  const eventData = await sanityFetch<EventQueryResult>({
    query: eventQuery,
    params: { slug: params.event }
  })
  invariant(eventData)
  return (
    <>
      <Section>
        <h1 className='text-h1'>{eventData.title}</h1>
        {eventData.subtitle && <div>{eventData.subtitle}</div>}
      </Section>
      <Section className='mt-8'>
        {eventData.content && (
          <ContentFrame content={eventData.content}></ContentFrame>
        )}
      </Section>
    </>
  )
}

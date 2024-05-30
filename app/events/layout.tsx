import LinkFrame from '@/components/LinkFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { eventsQuery } from '@/sanity/queries'
import { EventsQueryResult } from '@/sanity/sanity-types'
import Link from 'next/link'
import EventsClient from './client'

export default async function Events({ children }) {
  const events = await sanityFetch<EventsQueryResult>({ query: eventsQuery })

  return (
    <div className='flex'>
      <EventsClient events={events} />
      {children && (
        <>
          <div className='max-w-1/2 h-full border-l border-fg/70'>
            {children}
          </div>
        </>
      )}
    </div>
  )
}

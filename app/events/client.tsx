import LinkFrame from '@/components/LinkFrame'
import { EventsQueryResult } from '@/sanity/sanity-types'

export default function EventsClient({
  events
}: {
  events: EventsQueryResult
}) {
  return (
    <div className='grow *:max-w-xl *:mx-auto px-4 py-4'>
      {events.map(event => (
        <LinkFrame
          key={event._id}
          title={event.title}
          subtitle={event.subtitle}
          href={`/events/${event.slug}`}
        />
      ))}
    </div>
  )
}

'use client'

import Section from '@/components/Section'
import { ServicesQueryResult } from '@/sanity/sanity-types'
import { sortBy } from 'lodash'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function WorksHeader({
  services
}: {
  services: ServicesQueryResult
}) {
  const selectedService = useSelectedLayoutSegment()
  return (
    <div
      className={`sm:w-[150px] px-4 w-full sm:block flex space-x-2 flex-wrap`}>
      {sortBy(services, x => x.order).map(service => (
        <Link
          href={`/work/${service.slug}`}
          key={service._id}
          className={`${selectedService === service.slug ? 'font-bold' : ''} font-heading block heading`}>
          {service.title}
        </Link>
      ))}
    </div>
  )
}

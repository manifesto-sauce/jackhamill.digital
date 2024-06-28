'use client'

import Section from '@/components/Section'
import { ServicesQueryResult } from '@/sanity/sanity-types'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function WorksHeader({
  services
}: {
  services: ServicesQueryResult
}) {
  const selectedService = useSelectedLayoutSegment()
  return (
    <div className={`w-[150px] px-4`}>
      {services.map(service => (
        <Link
          href={`/work/${service.slug}`}
          key={service._id}
          className={`${selectedService === service.slug ? 'font-bold' : ''} font-heading block`}>
          {service.title}
        </Link>
      ))}
    </div>
  )
}

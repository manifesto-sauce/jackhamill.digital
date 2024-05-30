'use client'

import Section from '@/components/Section'
import { ServicesQueryResult } from '@/sanity/sanity-types'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function WorksHeader({
  services
}: {
  services: ServicesQueryResult
}) {
  const selectedService = useSelectedLayoutSegment()
  return (
    <Section className={`flex items-center w-full`}>
      {services.map(service => (
        <div
          key={service._id}
          className={`${selectedService === service.slug.current ? 'font-bold' : ''}`}>
          {service.title}
        </div>
      ))}
    </Section>
  )
}

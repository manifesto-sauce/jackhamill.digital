import ContentFrame from '@/components/ContentFrame'
import LinkFrame from '@/components/LinkFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { projectsQuery, serviceQuery } from '@/sanity/queries'
import { ProjectsQueryResult, ServiceQueryResult } from '@/sanity/sanity-types'
import invariant from 'tiny-invariant'

export default async function Service({
  children,
  params
}: React.PropsWithChildren & { params: { service: string } }) {
  const service = await sanityFetch<ServiceQueryResult>({
    query: serviceQuery,
    params: {
      slug: params.service
    }
  })

  invariant(service)

  return (
    <>
      {service.content && (
        <Section>
          <ContentFrame content={service.content} />
        </Section>
      )}

      {children}
    </>
  )
}

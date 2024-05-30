import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { projectsQuery, serviceQuery } from '@/sanity/queries'
import { ProjectsQueryResult, ServiceQueryResult } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'

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
  const projects = await sanityFetch<ProjectsQueryResult>({
    query: projectsQuery,
    params: {
      type: params.service
    }
  })

  return (
    <>
      <Section>
        <div className='*:font-heading text-center'>
          <PortableText value={service!.description!} />
        </div>
      </Section>

      <div>
        {projects.map(project => (
          <div>
            {project.title}
            {project.subtitle}
          </div>
        ))}
      </div>
    </>
  )
}

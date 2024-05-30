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
  const projects = await sanityFetch<ProjectsQueryResult>({
    query: projectsQuery,
    params: {
      type: params.service
    }
  })

  return (
    <>
      {service.content && (
        <Section>
          <ContentFrame content={service.content} />
        </Section>
      )}

      <Section innerClassName='sm:flex flex-wrap'>
        {projects.map(project => (
          <LinkFrame
            key={project._id}
            href={`/work/${params.service}/${project.slug}`}
            title={project.title}
            subtitle={project.subtitle}
            banner={project.banner}
            className='p-4 aspect-square w-full sm:w-1/2'
            innerClassName='border border-accent h-full w-full p-4 rounded hover:bg-accent/30 transition-colors duration-300 relative'
          />
        ))}
      </Section>
      {children}
    </>
  )
}

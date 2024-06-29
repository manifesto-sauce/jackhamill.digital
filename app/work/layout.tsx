import { sanityFetch } from '@/sanity/lib/fetch'
import { projectsQuery, servicesQuery } from '@/sanity/queries'
import { ProjectsQueryResult, ServicesQueryResult } from '@/sanity/sanity-types'
import WorksHeader from './header'
import Client from './client'
import Works from './works'

export default async function Work({ children }) {
  const services = await sanityFetch<ServicesQueryResult>({
    query: servicesQuery
  })

  const projects = await sanityFetch<ProjectsQueryResult>({
    query: projectsQuery
  })

  return (
    <>
      {/*  header for categories */}
      <Client />
      <div className='flex w-full h-[calc(100vh-64px)]'>
        <WorksHeader services={services} />
        <div className='w-[66%] flex-none h-full overflow-y-auto'>
          {<Works projects={projects} />}
        </div>
      </div>
      {children}
    </>
  )
}

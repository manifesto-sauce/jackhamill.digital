import { sanityFetch } from '@/sanity/lib/fetch'
import { servicesQuery } from '@/sanity/queries'
import { ServicesQueryResult } from '@/sanity/sanity-types'
import WorksHeader from './header'

export default async function Work({ children }) {
  const services = await sanityFetch<ServicesQueryResult>({
    query: servicesQuery
  })
  return (
    <>
      <WorksHeader services={services} />
      {children}
    </>
  )
}

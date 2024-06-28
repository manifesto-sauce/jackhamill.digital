'use client'

import { sanityFetch } from '@/sanity/lib/fetch'
import { servicesQuery } from '@/sanity/queries'
import { ServicesQueryResult } from '@/sanity/sanity-types'
import WorksHeader from './header'
import { Reactive, Hydra } from 'reactive-frames'

export default async function Work({ children }) {
  const services = await sanityFetch<ServicesQueryResult>({
    query: servicesQuery
  })

  return (
    <>
      {/*  header for categories */}
      <Reactive className='fixed top-0 left-0 h-screen w-screen'>
        <Hydra
          name='h'
          setup={self => {
            self.osc(12, 10).out()
          }}
          draw={self => self.tick()}
        />
      </Reactive>
      <div className='flex w-full h-full'>
        <WorksHeader services={services} />
        <div className='w-[66%] flex-none h-full overflow-y-auto'>
          {children}
        </div>
      </div>
    </>
  )
}

import { sanityFetch } from '@/sanity/lib/fetch'
import { PortableText } from '@portabletext/react'
import groq from 'groq'
import invariant from 'tiny-invariant'
import Link from 'next/link'
import { projectQuery } from '@/sanity/queries'
import { ProjectQueryResult } from '@/sanity/sanity-types'
import ContentFrame from '@/components/ContentFrame'

export default async function Works({
  params
}: {
  params: { service: string; project: string }
}) {
  const work = await sanityFetch<ProjectQueryResult>({
    query: projectQuery,
    params: { slug: params.project }
  })
  invariant(work)
  console.log(params)

  const to = `/work/${params.service}`

  return (
    <div className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50 p-8 backdrop-blur-sm'>
      <Link
        href={to}
        scroll={false}
        className='absolute left-0 top-0 -z-10 h-full w-full'
      />
      <div className='relative w-full h-fit max-h-full max-w-4xl cursor-default rounded-lg border border-gray-400 bg-black/20 backdrop-blur-lg overflow-y-auto'>
        <div className='bg-cover bg-center px-2 pb-2'>
          <div className='h-[200px] w-full flex flex-col justify-center items-center space-y-2'>
            <div className='top-4 z-10 text-center text-2xl font-bold drop-shadow-text bg-black/50 p-2 rounded-lg font-heading'>
              {work.title}
            </div>
            <div className='text-center bg-black/50 p-2 rounded-lg font-heading'>
              {work.subtitle}
            </div>
          </div>
          <div className='rounded py-1 bg-black/50 backdrop-blur p-2'>
            {work.content && <ContentFrame content={work.content} />}
          </div>
        </div>
      </div>
    </div>
  )
}

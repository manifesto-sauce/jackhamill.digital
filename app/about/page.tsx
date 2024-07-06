import SanityImageWrapper from '@/components/SanityImageWrapper'
import Section from '@/components/Section'
import ViewButton from '@/components/ViewButton'
import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutQuery } from '@/sanity/queries'
import { sanityFileInfo } from '@/sanity/queries/utilities'
import { AboutQueryResult } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'
import { Hydra, Reactive } from 'reactive-frames'
import invariant from 'tiny-invariant'
import Client from './client'
import Socials from '@/components/Socials'

export default async function About() {
  const about = await sanityFetch<AboutQueryResult>({ query: aboutQuery })
  invariant(about)
  console.log(about)

  return (
    <>
      <Client />
      <Section className=''>
        <div className='w-full px-2 flex flex-col items-center'>
          <SanityImageWrapper
            // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
            id={about.headshot!.asset!._ref}
            className='w-full rounded-lg max-w-[300px]'
          />
        </div>
        <div className='textBox'>
          <PortableText value={about.bio!} />
        </div>
        {// map the array of work experiences to div elements to display them
        about.work?.map(project => (
          <div key={project._key} className='textBox'>
            <h2 className='text-h3'>{project.name}</h2>
            {project.description && (
              <PortableText value={project.description} />
            )}
          </div>
        ))}
        {about.cv && (
          <ViewButton href={sanityFileInfo(about.cv!.asset!._ref!).url}>
            CV
          </ViewButton>
        )}
      </Section>
    </>
  )
}

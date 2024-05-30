import SanityImageWrapper from '@/components/SanityImageWrapper'
import Section from '@/components/Section'
import ViewButton from '@/components/ViewButton'
import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutQuery } from '@/sanity/queries'
import { sanityFileInfo } from '@/sanity/queries/utilities'
import { AboutQueryResult } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'
import invariant from 'tiny-invariant'

export default async function About() {
  const about = await sanityFetch<AboutQueryResult>({ query: aboutQuery })
  invariant(about)

  return (
    <Section>
      <div className='w-[50%] max-w-[300px] float-left mr-4 mb-4'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={about.headshot!.asset!._ref}
          className='w-full h-full rounded-lg'
        />
      </div>

      <PortableText value={about.bio!} />
      {about.cv && (
        <ViewButton href={sanityFileInfo(about.cv!.asset!._ref!).url}>
          CV
        </ViewButton>
      )}
    </Section>
  )
}

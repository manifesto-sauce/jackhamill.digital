import ContentFrame from '@/components/ContentFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { postQuery } from '@/sanity/queries'
import { PostQueryResult } from '@/sanity/sanity-types'
import invariant from 'tiny-invariant'

export default async function Post({ params }) {
  const postData = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params: { slug: params.post }
  })
  invariant(postData)
  return (
    <>
      <Section>
        <h1 className='text-h1'>{postData.title}</h1>
        {postData.subtitle && <div>{postData.subtitle}</div>}
      </Section>
      <Section className='mt-8'>
        <ContentFrame content={postData.content}></ContentFrame>
      </Section>
    </>
  )
}

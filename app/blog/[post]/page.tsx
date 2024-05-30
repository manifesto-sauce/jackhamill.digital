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
        <div>{postData.title}</div>
        {postData.subtitle && <div>{postData.subtitle}</div>}
      </Section>
      <Section>
        <ContentFrame content={postData.content}></ContentFrame>
      </Section>
    </>
  )
}

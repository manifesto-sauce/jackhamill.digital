import type { ClientPerspective, QueryParams } from 'next-sanity'

import { client } from './client'

/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (60 seconds)
 * and will also fetch from the CDN.
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {}
}: {
  query: string
  params?: QueryParams
}) {
  return client.fetch<QueryResponse>(query, params, {
    perspective: 'published',
    // The `published` perspective is available on the API CDN
    useCdn: true,
    // When using the `published` perspective we use time-based revalidation to match the time-to-live on Sanity's API CDN (60 seconds)
    // @ts-ignore
    next: { revalidate: 60 }
  })
}

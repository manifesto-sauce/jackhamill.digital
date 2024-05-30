import { Content } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'
import AssetFrame from './AssetFrame'

export default function ContentFrame({ content }: { content: Content }) {
  return content.map(value =>
    value._type === 'assetInfo' ? (
      <AssetFrame assetInfo={value} key={value._key} />
    ) : (
      <PortableText value={value} key={value._key} />
    )
  )
}

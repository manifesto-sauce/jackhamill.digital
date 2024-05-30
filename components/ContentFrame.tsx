import { Content } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'

export default function ContentFrame({ content }: { content: Content }) {
  return content.map(value =>
    value._type === 'assetInfo' ? <div></div> : <PortableText value={value} />
  )
}

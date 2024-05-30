import { defineArrayMember } from 'sanity'
import { defineType } from 'sanity'

const content = defineType({
  name: 'content',
  type: 'array',
  of: [
    defineArrayMember({ type: 'description' }),
    defineArrayMember({
      type: 'assetInfo'
    })
  ]
})

export default content

import { defineField, defineType } from 'sanity'

const workInfo = defineType({
  type: 'object',
  name: 'workInfo',
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'description' }]
    }),
    defineField({
      name: 'image',
      type: 'imageInfo'
    })
  ]
})

export default workInfo

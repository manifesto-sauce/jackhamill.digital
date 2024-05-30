import { defineArrayMember, defineType, defineField } from 'sanity'

const event = defineType({
  name: 'events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'subtitle',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'services' }]
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'banner',
      type: 'bannerInfo'
    }),
    defineField({
      name: 'content',
      type: 'content'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  },
  orderings: [
    {
      title: 'Most Recent',
      name: 'releaseDateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    }
  ]
})

export default event

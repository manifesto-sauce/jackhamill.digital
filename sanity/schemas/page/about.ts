import { defineField, defineType } from 'sanity'

const about = defineType({
  name: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'Site',
              type: 'string',
              options: {
                list: ['Instagram', 'Facebook', 'X', 'SoundCloud', 'Bandcamp'],
                layout: 'dropdown'
              }
            },
            {
              name: 'Handle',
              type: 'string'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [{ type: 'description' }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'headshot',
      type: 'image',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'work',
      type: 'array',
      of: [{ type: 'workInfo' }]
    }),
    defineField({
      name: 'cv',
      type: 'file',
      options: { accept: 'application/pdf' }
    }),
    defineField({
      name: 'resume',
      title: 'Résume',
      type: 'file',
      options: { accept: 'application/pdf' }
    })
  ]
})

export default about

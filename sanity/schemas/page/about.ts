import { defineField, defineType } from 'sanity'

const about = defineType({
  name: 'about',
  type: 'document',
  fields: [
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

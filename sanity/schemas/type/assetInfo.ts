import { defineArrayMember, defineType, defineField } from 'sanity'

const assetInfo = defineType({
  name: 'assetInfo',
  type: 'object',
  preview: {
    select: {
      linkSource: 'linkSource',
      uploadSource: 'uploadSource',
      htmlSource: 'htmlSource',
      assetType: 'assetType',
      title: 'title',
      description: 'description'
    },
    prepare: ({
      linkSource,
      uploadSource,
      assetType,
      htmlSource,
      title,
      description
    }) => ({
      title:
        title ??
        description ??
        (assetType === 'uploadSource'
          ? uploadSource
          : assetType === 'htmlSource'
            ? htmlSource.slice(0, 30)
            : linkSource)
    })
  },
  fields: [
    defineField({
      type: 'string',
      name: 'assetType',
      options: { list: ['link', 'image', 'file', 'html'], layout: 'radio' },
      validation: rule => rule.required()
    }),
    defineField({
      type: 'image',
      name: 'imageSource',
      hidden: context => {
        if (!context.parent) return false
        return context.parent['assetType'] !== 'image'
      },
      validation: rule =>
        rule.custom((value, context) => {
          return (context.parent as any)['assetType'] !== 'image' || value
            ? true
            : 'Please add an image.'
        })
    }),
    defineField({
      type: 'file',
      name: 'uploadSource',
      hidden: context => {
        if (!context.parent) return false
        return context.parent['assetType'] !== 'file'
      },
      validation: rule =>
        rule.custom((value, context) => {
          return (context.parent as any)['assetType'] !== 'file' || value
            ? true
            : 'Please add a file.'
        })
    }),
    defineField({
      type: 'url',
      name: 'linkSource',
      hidden: context => {
        if (!context.parent) return false
        return context.parent['assetType'] !== 'link'
      },
      validation: rule =>
        rule.custom((value, context) => {
          return (context.parent as any)['assetType'] !== 'link' || value
            ? true
            : 'Please add a link.'
        })
    }),
    defineField({
      type: 'text',
      name: 'htmlSource',
      hidden: context => {
        if (!context.parent) return false
        return context.parent['assetType'] !== 'html'
      },
      validation: rule =>
        rule.custom((value, context) => {
          return (context.parent as any)['assetType'] !== 'embed' || value
            ? true
            : 'Please add some HTML to embed.'
        })
    }),
    defineField({ type: 'boolean', name: 'embed', initialValue: true }),
    defineField({
      type: 'string',
      name: 'title',
      description:
        'If embedding, provides a heading title. If linking out, provides text for the button (default: "See more").'
    }),
    defineField({ type: 'text', name: 'description', rows: 3 })
  ]
})

export default assetInfo

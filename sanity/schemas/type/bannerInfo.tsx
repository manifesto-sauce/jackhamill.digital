import { defineType, defineField } from 'sanity'

const bannerInfo = defineType({
  name: 'bannerInfo',
  type: 'object',
  fields: [
    defineField({
      name: 'bannerType',
      type: 'string',
      options: {
        list: ['none', 'gradient', 'image', 'video', 'custom']
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'imageInfo',
      hidden: ({ parent }) => parent?.bannerType !== 'image'
    }),
    defineField({
      name: 'gradient',
      type: 'object',
      fields: [
        {
          name: 'type',
          type: 'string',
          options: { list: ['radial', 'diagonal', 'horizontal', 'vertical'] },
          validation: rule => rule.required()
        },
        { name: 'color1', type: 'color', validation: rule => rule.required() },
        { name: 'color2', type: 'color', validation: rule => rule.required() }
      ],
      hidden: ({ parent }) => parent?.bannerType !== 'gradient'
    }),
    defineField({
      name: 'video',
      type: 'file',
      options: {
        accept: 'video/webm'
      },
      description: (
        <div>
          Recommended: A 5-10 second video in <b>.webm</b> format with no audio.
          You can convert a video{' '}
          <a href='https://cloudconvert.com/mov-to-webm'>here</a>
        </div>
      ),
      hidden: ({ parent }) => parent?.bannerType !== 'video'
    }),
    defineField({
      name: 'custom',
      type: 'text',
      description: (
        <div>A custom SVG/HTML element describing the banner to use.</div>
      ),
      hidden: ({ parent }) => parent?.bannerType !== 'custom'
    })
  ]
})

export default bannerInfo

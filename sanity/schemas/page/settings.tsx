import { defineType, defineField } from 'sanity'

const settings = defineType({
  name: 'settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string'
    }),
    defineField({
      name: 'inspiration',
      type: 'text',
      description:
        "Tell me about what you're looking for out of this website. This is just for ideas, it won't be displayed on the site."
    }),
    defineField({
      name: 'backgroundColor',
      type: 'color',
      options: {
        disableAlpha: true
      },
      description: <div>The background color of your site.</div>
    }),
    defineField({
      name: 'backgroundAltColor',
      type: 'color',
      options: {
        disableAlpha: true
      },
      description: <div>The alternate background color of your site.</div>
    }),
    defineField({
      name: 'foregroundColor',
      type: 'color',
      options: {
        disableAlpha: true
      },
      description: <div>The foreground (text) color of your site.</div>
    }),
    defineField({
      name: 'accentColor',
      type: 'color',
      options: {
        disableAlpha: true
      },
      description: (
        <div>
          The accent color of your site, used for buttons and things that stand
          out.
        </div>
      )
    }),
    defineField({
      name: 'accentAltColor',
      type: 'color',
      options: {
        disableAlpha: true
      },
      description: (
        <div>
          The alternate accent color of your site, used for alternate
          backgrounds and borders.
        </div>
      )
    }),
    defineField({
      name: 'bodyFont',
      type: 'fontInfo',
      description: (
        <div>
          The font for body text (descriptions and paragraphs). See{' '}
          <a href='https://fonts.google.com' target='_blank'>
            Google Fonts
          </a>{' '}
          for a free library.
        </div>
      )
    }),
    defineField({
      name: 'headingFont',
      type: 'fontInfo',
      description: (
        <div>
          The font for headings. See{' '}
          <a href='https://fonts.google.com' target='_blank'>
            Google Fonts
          </a>{' '}
          for a free library.
        </div>
      )
    })
  ]
})

export default settings

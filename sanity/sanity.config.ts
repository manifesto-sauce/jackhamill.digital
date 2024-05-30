/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { colorInput } from '@sanity/color-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './env'
import { schema } from './schemas'
import { locate } from './presentation/locate'

const singletonDocuments = [
  { id: 'settings', title: 'Settings' },
  { id: 'about', title: 'About' }
]
const sanityConfig = defineConfig({
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    colorInput(),
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            ...singletonDocuments.map(({ id, title }) =>
              S.listItem()
                .title(title)
                .child(S.document().schemaType(id).title(title).documentId(id))
            ),
            ...S.documentTypeListItems().filter(
              listItem =>
                !singletonDocuments.find(item => item.id === listItem.getId()!)
            )
          ])
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // @ts-ignore
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve: {
        locations: locate
      },
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      }
    })
  ]
})

export default sanityConfig

import { BASE_URL_FILES } from '../env'
import mime from 'mime-types'

export const sanityFileInfo = (id: string) => {
  const [type, name, extension] = id.split('-')
  let fileType: 'audio' | 'video' | 'code' | 'pdf' | 'image' | 'general' = [
    'aac',
    'mp3',
    'oga',
    'opus',
    'wav',
    'weba',
    'aiff'
  ].includes(extension)
    ? 'audio'
    : ['avi', 'mp4', 'mpeg', 'ogv', 'webm', 'mov'].includes(extension)
      ? 'video'
      : ['pdf'].includes(extension)
        ? 'pdf'
        : [
              'apng',
              'avif',
              'bmp',
              'gif',
              'ico',
              'jpeg',
              'jpg',
              'png',
              'svg',
              'tif',
              'webp'
            ].includes(extension)
          ? 'image'
          : [
                'css',
                'csv',
                'html',
                'ics',
                'js',
                'mjs',
                'cjs',
                'ts',
                'mts',
                'mjs',
                'txt'
              ].includes(extension)
            ? 'code'
            : 'general'

  return {
    url: `${BASE_URL_FILES}${name}.${extension}`,
    type: fileType
  }
}

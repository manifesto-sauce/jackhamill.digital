import { BASE_URL_FILES } from '../env'
export const sanityFileURL = (id: string) => {
  const [type, name, extension] = id.split('-')
  return `${BASE_URL_FILES}/${type}/${name}.${extension}`
}

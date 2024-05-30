import sanity from '../sanity.json'
export const projectId = sanity.api.projectId
export const dataset = sanity.api.dataset
export const apiVersion = 'v2024-05-23' as string
export const useCdn = true
export const BASE_URL_IMAGES = `https://cdn.sanity.io/images/${projectId}/${dataset}/`
export const BASE_URL_FILES = `https://cdn.sanity.io/files/${projectId}/${dataset}/`

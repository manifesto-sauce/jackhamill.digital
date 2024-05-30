import event from './document/events'
import post from './document/posts'
import project from './document/projects'
import service from './document/services'
import about from './page/about'
import settings from './page/settings'
import assetInfo from './type/assetInfo'
import bannerInfo from './type/bannerInfo'
import content from './type/content'
import description from './type/description'
import fontInfo from './type/fontInfo'
import imageInfo from './type/imageInfo'
import rawAssetInfo from './type/rawAssetInfo'

const documents = [event, post, project, service]

const pages = [about, settings]

const types = [
  assetInfo,
  bannerInfo,
  content,
  description,
  imageInfo,
  rawAssetInfo,
  fontInfo
]

export const schema = {
  types: [...documents, ...pages, ...types]
}

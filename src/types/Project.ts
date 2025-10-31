export type LinkType = 
  | 'git'
  | 'local'
  | 'live'
  | 'flickr'

export type ProjectLinkCollection = {
  [key in LinkType]?:string
}

export const LinkLabels = {
  git: 'git',
  local: 'case study',//'learn more'
  live: 'live site',
  'flickr': 'photos'
}

export type VideoSourceSet = {
  title: string,
  mobile?: string,
  desktop?: string,
}
export type Project = {
  id: string,
  title: string,
  slug?: string,
  description?: string,
  current?: boolean,
  draft?:boolean,
  image?:string,
  video?:VideoSourceSet,
  links?: ProjectLinkCollection,
  primaryLink?: LinkType,
  status?: "in-progress | archived | live"
}

export type StaticImageSrc= {
  src: string,
  aspectRatio: "square" | "portrait" | "landscape"
}

export type ResponsiveImageSrc= {
  base: string,
  md: string
}


export type ProjectDetails = {
  id: string,
  title: string,
  slug?: string,
  body: string[],
  highlights?: string[],
  links?: ProjectLinkCollection,
  images?: Array<StaticImageSrc | ResponsiveImageSrc>,
  video?: VideoSourceSet,
  tags?: string[],
  relatedProjects? : string[]
}
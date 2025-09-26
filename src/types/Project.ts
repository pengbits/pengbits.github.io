export type LinkType = 
  | 'git'
  | 'local'
  | 'live'

export type ProjectLinkCollection = {
  [key in LinkType]?:string
}

export const LinkLabels = {
  git: 'git',
  local: 'case study',//'learn more'
  live: 'live site'
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
  video?:VideoSourceSet,
  links?: ProjectLinkCollection,
  primaryLink?: LinkType,
  status?: "in-progress | archived | live"
}

export type ProjectDetails = {
  id: string,
  title: string,
  slug?: string,
  body: string[],
  links?: ProjectLinkCollection,
  images?: string[],
  video?: VideoSourceSet,
  tags?: string[],
  relatedProjects? : string[]
}
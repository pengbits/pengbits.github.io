export type ProjectLinkCollection = {
  git?: string,
  live?: string,
  local?: string,
  primary?: string
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
  status?: "in-progress | archived | live"
}

export type ProjectDetails = {
  id: string,
  title: string,
  slug: string,
  body: string[],
  links?: ProjectLinkCollection,
  images?: string[],
  video?: VideoSourceSet,
  tags?: string[]
}
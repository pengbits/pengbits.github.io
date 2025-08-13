export type ProjectLinkCollection = {
  git?: string,
  live?: string,
  local?: string,
  primary?: string
}
export type Project = {
  id: string,
  title: string,
  slug?: string,
  description?: string,
  current?: boolean,
  draft?:boolean,
  links?: ProjectLinkCollection,
  status?: "in-progress | archived | live"
}
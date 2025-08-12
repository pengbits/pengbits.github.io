export type ProjectLink = {
  title: string,
  url: string
}
export type Project = {
  id: string,
  title: string,
  slug?: string,
  description?: string,
  current?: boolean,
  draft?:boolean,
  links?: ProjectLink[],
  status?: "in-progress | archived | live"
}
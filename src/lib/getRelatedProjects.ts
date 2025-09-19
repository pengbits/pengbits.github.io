import {projects_map} from "@/data/projects"
import { getProject } from "./getProject"
type RelatedProjectLink = {
  title: string,
  link: string
}
export const getRelatedProjects = ({id}:{id:string}):RelatedProjectLink[] => {
  return (getProject({id}).relatedProjects || []).map((relatedId:string) => {
    const {title,links} = projects_map[relatedId]
    return {
      title,
      link: links && links.local ? links.local : ''
    }
  }).filter(r => r.link !== '')
}

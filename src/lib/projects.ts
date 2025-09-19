import project_details_data from "@/data/projects/details"
import {projects_map} from "@/data/projects"

export const getProject = ({id}:{id:string}) => {
  if(!(id in project_details_data)){
    throw new Error(`Could not find any project data for id=${id}`)
  }
  return project_details_data[id]
}

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

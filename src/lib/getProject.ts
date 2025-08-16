import { ProjectDetails } from "@/types/Project"
import DETAILS from "@/data/projects/details"


export const getProject = ({id}:{id:string}) => {
  if(!(id in DETAILS)){
    throw new Error(`Could not find any project data for id=${id}`)
  }
  return DETAILS[id]
}
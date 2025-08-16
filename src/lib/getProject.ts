import { ProjectDetails } from "@/types/Project"
import DETAILS from "@/data/projects/details"


export const getProject = ({id}:{id:string}) => {
  if(!(id in DETAILS)){
    throw new Error('no project data for'+id)
  }
  return DETAILS[id]
}
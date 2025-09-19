import project_details_data from "@/data/projects/details"

export const getProject = ({id}:{id:string}) => {
  if(!(id in project_details_data)){
    throw new Error(`Could not find any project data for id=${id}`)
  }
  const data = project_details_data[id]
  console.log(`project#${id} relateds:`, data.relatedProjects?.map(id => id))
  return data
}
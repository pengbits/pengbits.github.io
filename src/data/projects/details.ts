import { ProjectDetails } from '@/types/Project'
import project_1 from './1'
import project_2 from './2'


interface ProjectIndex  {
  [key: string] : ProjectDetails
}

const index:ProjectIndex = {
  "1": project_1,
  "2": project_2
}

export default index
import { ProjectDetails } from '@/types/Project'
import project_1 from './1'

interface ProjectIndex  {
  [key: string] : ProjectDetails
}

const index:ProjectIndex = {
  "1": project_1
}

export default index
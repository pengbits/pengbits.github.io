import { ProjectDetails } from '@/types/Project'
import project_1 from './1'
import project_2 from './2'
import project_3 from './3'
import project_4 from './4'
import project_5 from './5'
import project_6 from './6'
import project_7 from './7'


interface ProjectIndex  {
  [key: string] : ProjectDetails
}

const index:ProjectIndex = {
  "1": project_1,
  "2": project_2,
  "3": project_3,
  "4": project_4,
  "5": project_5,
  "6": project_6,
  "7": project_7
}

export default index
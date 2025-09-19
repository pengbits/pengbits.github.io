import { EditorializedSkill } from '@/types/Skills'
import {Box,List} from '@chakra-ui/react'

type SkillsListProps = {
  skills: {
    a: EditorializedSkill[], 
    b: EditorializedSkill[] 
  }
}

export const SkillsList = ({skills}:SkillsListProps) => {
return (<Box display={{md:'flex'}}>
  <List.Root px={5} flexBasis='50%'>
    {skills.a.map((skill,i) => {
      return (<List.Item 
        key={i}
        marginBottom={2}>
          {skill.name}
        </List.Item>
      )
    })}
  </List.Root>

  <List.Root px={5} flexBasis='50%'>
    {skills.b.map((skill,i) => {
      return (<List.Item 
        key={i}
        marginBottom={2}>
          {skill.name}
        </List.Item>
      )
    })}
  </List.Root>
</Box>)
}
import { Flex, Box } from "@chakra-ui/react"
import { SectionNavigationProps } from "@/types/Section"

export const SectionsHorizontal = ({sections,display}:SectionNavigationProps) => (
  <Flex 
    as="ul" justify="flex-end"
    display={display}
    mt="0" gap={{base:"1", md:"4"}} 
  >
  {sections.map(({title,titleShort,id}) => (
    <li key={id}>
      <Box asChild px='4' py='2' borderRadius={8} _hover={{backgroundColor:'#f1f1f1'}}>
        <a style={{display:'block'}} href={`#${id}`}>{titleShort || title}</a>
      </Box>
    </li>)
  )}
</Flex>
)

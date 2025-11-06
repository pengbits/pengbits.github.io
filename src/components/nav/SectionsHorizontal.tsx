"use client";
import { Flex, Box } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import { SectionNavigationProps } from "@/types/Section"
const base_url = '/'
export const SectionsHorizontal = ({sections,display, appendQuery}:SectionNavigationProps) => {
    return (<Flex 
      as="ul" justify="flex-end"
      display={display}
      mt="0" gap={{base:"1", md:"4"}} 
    >
    {sections.map(({title,titleShort,id}) => (
      <li key={id}>
        <Box asChild px='4' py='2' borderRadius={8} 
          _hover={{
            bg: "#F1F1F1",
            _dark: {
              bg: "#27272a"
            }
          }}>
          <a style={{display:'block'}} href={`${base_url}${appendQuery ? `?${appendQuery}` : ''}#${id}`}>{titleShort || title}</a>
        </Box>
      </li>)
    )}
    <Box py="1" as="li">
      <ColorModeButton />
    </Box>
  </Flex>
  )
}

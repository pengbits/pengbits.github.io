import { Box } from "@chakra-ui/react"
import { sectionIdFromTitle } from "@/data/sections"

type SectionAnchorProps = {
  title: string
}

export const SectionAnchor = ({title}:SectionAnchorProps) => (
  <Box as="div" h="40" id={sectionIdFromTitle(title)}></Box>
)
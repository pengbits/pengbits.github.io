import { Box } from "@chakra-ui/react"
import { SectionsMenuIcon } from "./SectionsMenuIcon"
import { Section } from "@/types/Section"
type SectionsMenuProps = {
  sections: Section[],
  display: any
}
export const SectionsMenu = ({sections, display}:SectionsMenuProps) => (
  <Box display={display}>
    <SectionsMenuIcon />
  </Box>
)

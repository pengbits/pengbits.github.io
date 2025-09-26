
import { Box, Menu, Portal } from "@chakra-ui/react"
import { SectionsMenuIcon } from "./SectionsMenuIcon"
import { SectionNavigationProps } from "@/types/Section"


export const SectionsMenu = ({sections, display}:SectionNavigationProps) => (
  <Box display={display}>
    <Menu.Root>
      <Menu.Trigger asChild>
        <SectionsMenuIcon />
      </Menu.Trigger>
      <Portal>

        <Menu.Positioner>
          <Menu.Content>
          {sections.map(s => {
            const label = s.titleShort || s.title
            return (<Menu.Item 
              key={s.id} 
              value={s.id}
            >
              <a href={`#${s.id}`} title={label}>{label}</a>
            </Menu.Item>)
          })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  </Box>
)

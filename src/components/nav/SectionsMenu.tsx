
import { Box, Menu, Portal } from "@chakra-ui/react"
import { SectionsMenuIcon } from "./SectionsMenuIcon"
import { Section } from "@/types/Section"

type SectionsMenuProps = {
  sections: Section[],
  display: any
}

export const SectionsMenu = ({sections, display}:SectionsMenuProps) => (
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

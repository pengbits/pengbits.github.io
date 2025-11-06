"use client";
import { Box, Menu, Portal } from "@chakra-ui/react"
import { SectionNavigationProps } from "@/types/Section"
import { SectionsMenuIcon } from "./SectionsMenuIcon"
import { ThemeSwitcherMenuItem } from "./ThemeSwitcherMenuItem"
const base_url = '/'

export const SectionsMenu = ({sections, display, appendQuery}:SectionNavigationProps) => {
  return (
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
              <a href={`${base_url}${appendQuery ? `?${appendQuery}` : ''}#${s.id}`} title={label}>{label}</a>
            </Menu.Item>)
          })}
          <Menu.Separator />
          <ThemeSwitcherMenuItem />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  </Box>
)
}
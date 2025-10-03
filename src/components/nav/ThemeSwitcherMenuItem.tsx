"use client"

import { Menu } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"

export const ThemeSwitcherMenuItem = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (<Menu.Item
    value="theme"
    onClick={toggleColorMode}>
    {colorMode}{' '}{colorMode == "light" ? <LuSun /> : <LuMoon />}
  </Menu.Item>
)}
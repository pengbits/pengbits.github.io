import { Box, Flex, Container, Text } from "@chakra-ui/react"
import sections_data from "@/data/sections"
import about_data from "@/data/about"
import { SectionsMenu } from "./SectionsMenu"
import { SectionsHorizontal } from "./SectionsHorizontal"
import Link from "next/link"

export const Nav = () => (
  <Box as="header" zIndex='200' position="fixed" h='18' top='0' w="100%" 
    background={{base:"white", _dark:"black"}}
    // outline='purple solid 1px'
    borderBottom='black solid 2px'
    borderColor={{base:"black", _dark:"white"}}
  >
    <Container as="nav" maxWidth="100%" px="0">
      <Box px={{base:"1rem", md:"15vw"}}>
      <Flex justifyContent="space-between" alignItems='center' py="4">
        <Text flexBasis="1/2" as="h1" py="2">
          <Link href="/">&copy; {about_data.nickname}</Link>
        </Text> 
        <SectionsHorizontal 
          display={{base:'none', md:'flex'}} 
          sections={sections_data}>
        </SectionsHorizontal>
        <SectionsMenu 
          display={{base:'block',md:'none'}} 
          sections={sections_data}>
        </SectionsMenu>
      </Flex>
      </Box>
    </Container>
  </Box>
)

export default Nav
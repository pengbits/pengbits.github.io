import { Box, Flex, Container, Text } from "@chakra-ui/react"
import sections_data from "@/data/sections"
import { SectionsMenu } from "./SectionsMenu"
import { SectionsHorizontal } from "./SectionsHorizontal"
import Link from "next/link"

export const Nav = () => (
  <Box as="header" zIndex='200' position="fixed" h='18' top='0' w="100%" 
    background="white" 
    // outline='purple solid 1px'
    borderBottom='black solid 2px'
  >
    <Container as="nav" maxW="3xl">
      <Flex justifyContent="space-between" alignItems='center' py="4">
        <Text flexBasis="1/2" as="h1" py="2">
          <Link href="/">&copy; Peng Bits</Link>
        </Text>
        <SectionsHorizontal 
          display={{base:'none', md:'flex'}} sections={sections_data}>
        </SectionsHorizontal>
        <SectionsMenu 
          display={{base:'block',md:'none'}} sections={sections_data}>
        </SectionsMenu>
      </Flex>
    </Container>
  </Box>
)

export default Nav
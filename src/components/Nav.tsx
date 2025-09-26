import { Box, Flex, Container, Text } from "@chakra-ui/react"
import sections from "@/data/sections"

const SectionsFlex = () => (
  <Flex 
    as="ul" justify="flex-end"
    display={{base:'none', md:'flex'}}
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

const SectionsMenu = () => (
 <Box 
    h='8' 
    w='8' 
    display={{base:'block',md:'none'}}
    position='relative'
    outline='purple solid 1px'
    background='#F1F1F1'
  >
    <span></span>
    <span></span>
    <span></span>
  </Box> 
)

export const Nav = () => (
  <Box as="header" zIndex='200' position="fixed" h='18' top='0' w="100%" 
    background="white" 
    outline='purple solid 1px'
    borderBottom='black solid 2px'
  >
    <Container as="nav" maxW="3xl">
      <Flex justifyContent="space-between" alignItems='center' py="4">
        <Text flexBasis="1/2" as="h1" py="2">&copy; Peng Bits</Text>
        <SectionsFlex></SectionsFlex>
        <SectionsMenu ></SectionsMenu>
      </Flex>
    </Container>
  </Box>
)
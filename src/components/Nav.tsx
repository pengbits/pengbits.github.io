import { Box, Flex, Container, Text } from "@chakra-ui/react"
import sections from "@/data/sections"

export const Nav = () => (
  <Box as="header" zIndex='200' position="fixed" top='0' h='20' w="100%" 
    background="white" 
    // border='purple solid 1px'
    borderBottom='black solid 2px'
  >
    <Container as="nav" mt="4" maxW="3xl" position='relative'>
      {/* <div style={{border:'green solid 1px'}}> */}
      <Text as="h1" position="absolute"  py="2">&copy; Peng Bits</Text>
      <Flex mt="0" gap="4" as="ul" justify="flex-end">
        {sections.map(({title,titleShort,id}) => (
          <li key={id}>
            <Box asChild px='4' py='2' borderRadius={8} _hover={{backgroundColor:'#f1f1f1'}}>
              <a style={{display:'block'}} href={`#${id}`}>{titleShort || title}</a>
            </Box>
          </li>)
        )}
      </Flex>
      {/* </div> */}
    </Container>
  </Box>
)
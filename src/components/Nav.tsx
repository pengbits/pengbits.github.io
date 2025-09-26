import { Box, Flex, Container, List } from "@chakra-ui/react"
import sections from "@/data/sections"

export const Nav = () => (
<Box as="header" zIndex='200' position="fixed" top='0' h='20' w="100%" 
  background="white" border='black solid 2px' borderWidth="0 0 2px 0">
    <Container as="nav"  maxW="3xl">
      <Flex gap="4" as="ul" justify="flex-end">
        {sections.map(({title,titleShort,id}) => {
          return (<li key={id}>
            <a href={`#${id}`}>{titleShort || title}</a>
          </li>)
        })}
      </Flex>
    </Container>
</Box>)
"use client";
import { Box, Flex, Container, Text } from "@chakra-ui/react"
import sections_data from "@/data/sections"
import about_data from "@/data/about"
import { SectionsMenu } from "./SectionsMenu"
import { SectionsHorizontal } from "./SectionsHorizontal"
import Link from "next/link"
import { InnerContainer } from "../InnerContainer"
import { useParams } from "next/navigation"
import { projects_map } from "@/data/projects"

export const Nav = () => {
  // If on a project route and priority < 200, append allProjects=true to nav links
  let appendQuery: string | undefined = undefined;
  try {
    const params = useParams();
    const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params?.id[0] : undefined;
    if (id && projects_map[id] && typeof projects_map[id].priority === 'number' && projects_map[id].priority < 200) {
      appendQuery = 'allProjects=true';
    }
  } catch {}

  return (
  <Box as="header" zIndex='200' position="fixed" h='18' top='0' w="100%" 
    background={{base:"white", _dark:"black"}}
    // outline='purple solid 1px'
    borderBottom='black solid 2px'
    borderColor={{base:"black", _dark:"white"}}
  >
    <Container as="nav" maxWidth="100%" px="0">
      <InnerContainer>
      <Flex justifyContent="space-between" alignItems='center' py="4">
        <Text flexBasis="1/2" as="h1" py="2">
          <Link href={`/${appendQuery ? `?${appendQuery}` : ''}`}>&copy; {about_data.nickname}</Link>
        </Text> 
        <SectionsHorizontal 
          display={{base:'none', md:'flex'}} 
          sections={sections_data}
          appendQuery={appendQuery}
          >
        </SectionsHorizontal>
        <SectionsMenu 
          display={{base:'block',md:'none'}} 
          sections={sections_data}
          appendQuery={appendQuery}
          >
        </SectionsMenu>
      </Flex>
      </InnerContainer>
    </Container>
  </Box>
)}

export default Nav
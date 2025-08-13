import { Heading, GridItem, Link, Text} from "@chakra-ui/react";
import {Project} from "@/types/Project"
import ProjectLinkCollection from "./ProjectLinkCollection";
export const ProjectGridItem = ({
  title,
  description,
  links
}:Project) => {
  return (<GridItem  
    colSpan={{base:2, md:1}}
  >
    {links && links.primary ? 
      <Heading size="3xl"><Link target={links.primary.indexOf('/') == 0 ? "_self":"_blank"} href={links.primary}>{title}</Link></Heading> :
      <Heading size="3xl">{title}</Heading>}
    <Text mb='2'>{description}</Text>
    <ProjectLinkCollection links={links} />
  </GridItem>)
}
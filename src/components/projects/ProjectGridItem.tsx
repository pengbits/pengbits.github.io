import { Heading, GridItem, Link, Text} from "@chakra-ui/react";
import {Project} from "@/types/Project"
import ProjectLinkCollection from "./ProjectLinkCollection";
export const ProjectGridItem = ({
  title,
  description,
  links,
  primaryLink
}:Project) => {

  return (<GridItem  
    colSpan={{base:2, md:1}}
  >
    {primaryLink && links ? 
      <Heading size="3xl"><Link target={(links[primaryLink] || '').indexOf('/') == 0 ? "_self":"_blank"} href={links[primaryLink]}>{title}</Link></Heading> :
      <Heading size="3xl">{title}</Heading>}
    <Text mb='2'>{description}</Text>
    <ProjectLinkCollection links={links} />
  </GridItem>)
}
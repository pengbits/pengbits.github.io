import { Heading, GridItem, Link} from "@chakra-ui/react";
import {Project} from "@/types/Project"
import ProjectLinkCollection from "./ProjectLinkCollection";
export const ProjectGridItem = ({
  id,
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
    <p>{description}</p>
    <ProjectLinkCollection links={links} />
  </GridItem>)
}
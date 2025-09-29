import { Heading, GridItem, Link, Text, Image} from "@chakra-ui/react";
import {Project} from "@/types/Project"
import ProjectLinkCollection from "./ProjectLinkCollection";
// import Image from "next/image";
import { IMAGE_BASE } from "@/lib/images";
import { targetForPath } from "@/lib/links";

const LinkedImage = ({src,href}:{src:string, href?:string}) => (
  <Link display="block" target={targetForPath(href || '')} href={href}>
    <Image
      mb="4"
      src={`${IMAGE_BASE}/${src}`}
      width='100%'
      aspectRatio={4/3}
      htmlWidth={512}
      htmlHeight={384}
      alt="primary image of the project"
    />
  </Link>
)
export const ProjectGridItem = ({
  title,
  description,
  links,
  primaryLink,
  image
}:Project) => {

  return (<GridItem  
    colSpan={{base:2, md:1}}
    mb='16'
  >
    {image && <LinkedImage src={image} href={links && primaryLink ? links[primaryLink] : undefined} />}
    {primaryLink && links ? 
      <Heading size="3xl"><Link target={targetForPath(links[primaryLink] || '')} href={links[primaryLink]}>{title}</Link></Heading> :
      <Heading size="3xl">{title}</Heading>}
    <Text mb='2'>{description}</Text>
    <ProjectLinkCollection links={links} />
  </GridItem>)
}
import { Heading } from "@chakra-ui/react";
import {Project} from "@/types/Project"
import { GridItem } from "@chakra-ui/react";

export const ProjectGridItem = ({id,title,description}:Project) => {
  return (<GridItem  colSpan={{base:2, md:1}} style={{outline:'purple solid 1px'}}>
    <Heading size="3xl">{title}</Heading>
    <p>{description}</p>
  </GridItem>)
}
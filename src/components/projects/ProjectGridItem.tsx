import { Heading } from "@chakra-ui/react";
import Project from "@/types/Project"
import { GridItem } from "@chakra-ui/react";

export const ProjectGridItem = ({id,title,description}:Project) => {
  return (<div key={id}>
    <Heading size="3xl">{title}</Heading>
    <p>{description}</p>
  </div>)
}
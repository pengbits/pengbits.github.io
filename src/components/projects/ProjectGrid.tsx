
import { Project } from "@/types/project";
import { ProjectGridItem } from "./ProjectGridItem";
import { Grid } from "@chakra-ui/react";

export const ProjectGrid = ({projects}:{projects:Project[]}) => {
  return projects.map(p => <ProjectGridItem {...p} />)
}
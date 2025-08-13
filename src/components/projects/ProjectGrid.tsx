
import { Project } from "@/types/project";
import { ProjectGridItem } from "./ProjectGridItem";
import { Grid } from "@chakra-ui/react";

export const ProjectGrid = ({projects}:{projects:Project[]}) => {
  return (<Grid templateColumns="repeat(2, 1fr)" gap="6">
    {projects.map(props => <ProjectGridItem 
      key={props.id}
      {...props} 
    />)}
  </Grid>)
}
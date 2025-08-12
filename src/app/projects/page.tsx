import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import ProjectsData from "./project.json"

export default function Projects() {
  const projects = ProjectsData.projects || []
  return (
    <Container maxWidth='md'>
      <Typography variant="h2">Projects</Typography>
      {projects.map(({id,description,title}) => {
        return (
          <div key={id}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </div>
        )
      })}
    </Container>
  );
}

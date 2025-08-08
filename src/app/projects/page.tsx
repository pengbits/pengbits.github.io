import ProjectsData from "./project.json"
export default function Projects() {
  const projects = ProjectsData.projects || []
  return (
    <div >
      <h1>Projects</h1>
      {projects.map(({id,description,title}) => {
        return (
          <div key={id}>
            <h3 className="text-2xl">{title}</h3>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  );
}

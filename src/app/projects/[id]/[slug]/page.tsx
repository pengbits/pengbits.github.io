import { Container, } from "@chakra-ui/react"
import { Section } from "@/components/Section"
import PROJECTS from "@/data/projects"
import { getProject } from "@/lib/getProject"

export const generateStaticParams = function(){
  return PROJECTS.map(project => ({
    id: project.id,
    slug: project.slug
  })) 
}

export default async function Project({
  params
}:{
  params: Promise<{
    id: string
  }>
}) {
  const {id} = await params
  const data = getProject({id})
  return (<Container maxWidth="3xl">
    <Section
      heading="6xl" 
      title={data.title}>
    </Section>
    <Section
      heading="5xl" 
      title="Projects"
      padding={{
          x:4,
          y:8
        }}
      >
    </Section>
  </Container>)
}

import { Container, HStack, Tag, Text} from "@chakra-ui/react"
import { Section } from "@/components/Section"
import { BodyText } from "@/components/projects/BodyText"
import PROJECTS from "@/data/projects"
import {ProjectDetails} from "@/types/Project"
import { getProject } from "@/lib/getProject"
import ProjectLinkCollection from "@/components/projects/ProjectLinkCollection"

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
  const data:ProjectDetails = getProject({id})

  return (<Container maxWidth="3xl">
    <Section
      heading="5xl" 
      title={data.title}
      padding={{x:4,y:32}}
    >
      <BodyText body={data.body} />
    </Section>
    <Section
      heading="3xl" 
      title="Tags"
      padding={{
          x:4,
          y:8
        }}
      >
        <HStack>
          {data.tags?.map((t,i) => (<Tag.Root  key={i}>
            <Tag.Label>{t}</Tag.Label>
          </Tag.Root>)
        )}
        </HStack>
    </Section>
    <Section
      heading="3xl" 
      title="Links"
      padding={{
          x:4,
          y:8
        }}
      >
        <ProjectLinkCollection omit="local" links={data.links}></ProjectLinkCollection>    
      </Section>
  </Container>)
}

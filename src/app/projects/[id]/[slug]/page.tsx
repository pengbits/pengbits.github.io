import { Container, HStack, Tag} from "@chakra-ui/react"
import { Section } from "@/components/Section"
import { BodyText } from "@/components/projects/BodyText"
import ProjectLinkCollection from "@/components/projects/ProjectLinkCollection"
import { ResponsiveVideo } from "@/components/projects/ResponsiveVideo"
import { ResponsiveImage } from "@/components/projects/ResponsiveImage"
import { ButtonLink } from "@/components/ButtonLink"

import project_data from "@/data/projects"
import { ProjectDetails } from "@/types/Project"
import { getProject, getRelatedProjects } from "@/lib/projects"

export const generateStaticParams = function(){
  return project_data.map(project => ({
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
  const related_data = data.relatedProjects?.length ? getRelatedProjects({id}) : []

  return (<Container maxWidth="3xl">
    <Section
      heading="5xl" 
      title={data.title}
      padding={{x:4}}
    ></Section>
    
    {data.images?.length && <Section
      heading="3xl"
      title=""
      padding={{x:4}}
    >
      {data.images.map((src,i) => (
        <ResponsiveImage key={i} src={src} />
      ))}
    </Section>}

    {data.video && <Section
      heading="3xl"
      title=""
      padding={{x:4}}>
      <ResponsiveVideo src={data.video} />
    </Section>
    }
    <Section
      heading="3xl" 
      padding={{x:4}}
      title="About">
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
          y:4
        }}
      >
        <ProjectLinkCollection omit="local" links={data.links}></ProjectLinkCollection>    
      </Section>
    {related_data.length > 0 && <Section
      heading="3xl" 
      title="Related Projects"
      padding={{
          x:4,
          y:4
        }}
      >
        {related_data.map((r,i) => (<ButtonLink 
          key={i} href={r.link}>{r.title}
        </ButtonLink>))}
      </Section>
    }
  </Container>)
}

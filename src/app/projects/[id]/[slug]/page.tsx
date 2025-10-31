import { HStack, Tag } from "@chakra-ui/react"
import { Section } from "@/components/Section"
import { Highlights } from "@/components/projects/Highlights"
import { BodyText } from "@/components/projects/BodyText"
import ProjectLinkCollection from "@/components/projects/ProjectLinkCollection"
import { ResponsiveVideo } from "@/components/projects/ResponsiveVideo"
import { ResponsiveImage } from "@/components/projects/ResponsiveImage"
import { StaticImage } from "@/components/projects/StaticImage"
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

  return (<>
    <Section
      heading="5xl" 
      title={data.title}
      padding={{y:"20vh"}}
    ></Section>
    
    {data.images?.length && <Section
      heading="3xl"
      title=""
    >
      {data.images.map((image,i) => {
        return ('base' in image) ?
          <ResponsiveImage key={i} src={{base:image.base, md:image.md}} />
        :
          <StaticImage key={i} src={image.src} aspectRatio={image.aspectRatio} />
      })}
    </Section>}

    {data.video && <Section
      heading="3xl"
      title="">
      <ResponsiveVideo src={data.video} />
    </Section>
    }
    {data.highlights?.length && <Section
      heading="3xl" 
      title="Highlights">
      <Highlights data={data.highlights} />
    </Section>}
    <Section
      heading="3xl" 
      title="About">
      <BodyText body={data.body} />
    </Section>
    <Section
      heading="3xl"
      title="Tags"
      >
        <HStack wrap="wrap">
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
          y:4
        }}
      >
        <ProjectLinkCollection omit="local" links={data.links}></ProjectLinkCollection>    
      </Section>
    {related_data.length > 0 && <Section
      heading="3xl" 
      title="Related Projects"
      padding={{
          y:4
        }}
      >
        {related_data.map((r,i) => (<ButtonLink 
          key={i} href={r.link}>{r.title}
        </ButtonLink>))}
      </Section>
    }
</>)
}

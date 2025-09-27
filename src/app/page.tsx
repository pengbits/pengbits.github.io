// vendor
import { Container, List } from "@chakra-ui/react"
// components
import { Section } from "@/components/Section"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { SkillsList } from "@/components/skills/SkillsList"
import { SectionAnchor } from "@/components/SectionAnchor"
import { ContactLinks } from "@/components/contact/ContactLinks"
// data
import project_data from "@/data/projects"
import work_history_data from "@/data/work"
import about_data from "@/data/about"
import skills_data from "@/data/skills"

export default function Home() {
  return (
    <Container maxWidth="3xl" 
      // border={'purple solid 1px'}
      >
      <Section
        heading="6xl" 
        title={about_data.name}
        padding={{
          y:20
        }}>
        <p>{about_data.tagline}</p>
      </Section>
      {/*
      
      =:projects 
      */}
      <SectionAnchor
        title="Projects">
      </SectionAnchor>
      <Section
        heading="5xl" 
        title="Projects"
        padding={{
            y:8
          }}
        >
        <ProjectGrid projects={project_data} />
      </Section>
      {/*
      
      =:skills 
      */}
      <SectionAnchor
        title="Skills">
      </SectionAnchor>
      <Section
        heading="5xl" 
        title="Skills"
      >
        <SkillsList skills={skills_data.columns} />
      </Section>
      {/*
      
      =:work 
      */}
      <SectionAnchor
        title="Work Experience">
      </SectionAnchor>
      <Section
        heading="5xl" 
        title="Work Experience"
      >
        {work_history_data.map(({name,location,roles},c) => {
          return (
          <Section
            heading="4xl" 
            title={name}
            subTitle={location}
            key={c}
            padding={{
              y:4
            }}
          >
            {roles.map(({title,startDate,endDate,achievements},r) => {
            return (
            <Section
                heading="2xl" 
                title={title}
                subTitle={`${startDate} - ${endDate}`}
                key={r}
                padding={{
                  y:6
                }}
              >
              <List.Root px={5}>
                {achievements.map((text,a) => {
                  return <List.Item 
                  marginBottom={2}  
                  key={a}>{text}</List.Item>
                })}
              </List.Root>
            </Section>)
          })}
          </Section>)
        })}
      </Section>
      {/*
      
      =:contact 
      */}
      <SectionAnchor
        title="Get In Touch">
      </SectionAnchor>
      <Section
        heading="5xl" 
        title="Get In Touch"> 
          <p>I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out.</p>
          <ContactLinks />
      </Section>
      <Section heading="xs"
        marginTop={20}
        title="&copy; Peng Bits 2025. All wrongs reversed.">
      </Section>
    </Container>
  )
}

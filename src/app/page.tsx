// vendor
import { Container, List, Text,Box, Flex } from "@chakra-ui/react"
// components
import { Section } from "@/components/Section"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { SkillsList } from "@/components/skills/SkillsList"
import { SectionAnchor } from "@/components/SectionAnchor"
import { ContactLinks } from "@/components/contact/ContactLinks"
import { ContactForm } from "@/components/contact/ContactForm"
// data
import project_data from "@/data/projects"
import work_history_data from "@/data/work"
import about_data from "@/data/about"
import skills_data from "@/data/skills"
import contact_data from "@/data/contact"

export default function Home() {
  return (<>
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
  </>
  )
}

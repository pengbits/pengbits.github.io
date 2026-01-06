// vendor
import { List } from "@chakra-ui/react"
import { Suspense } from "react"
// components
import { Section } from "@/components/Section"
import { ProjectsSection } from "@/components/projects/ProjectsSection"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { SkillsList } from "@/components/skills/SkillsList"
import { SectionAnchor } from "@/components/SectionAnchor"
import { Recommendations } from "@/components/recommendations/Recommendations"

// data
import { projects_list_min_priority } from "@/data/projects"
import work_history_data from "@/data/work"
import about_data from "@/data/about"
import skills_data from "@/data/skills"
import recommendation_data from "@/data/recommendations"
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
        <Suspense fallback={<ProjectGrid projects={projects_list_min_priority(200)} />}>
          <ProjectsSection />
        </Suspense>
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
      =:recommendations 
      */}

      <Section
        heading="4xl" 
        title="Recommendations"
      >
        <Recommendations data={recommendation_data} />
      </Section>
  </>
  )
}

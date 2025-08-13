import { Container, Heading, List, Text, } from "@chakra-ui/react"
import { Section } from "@/components/Section"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import PROJECTS from "@/data/projects"
import WORK_HISTORY from "@/data/work"

export default function Home() {
  return (<Container maxWidth="2xl">
    <Section
      heading="6xl" 
      title="Dave Paul">
      <p>Sed ut sollicitudin massa. Nullam in pellentesque neque.</p> 
    </Section>
    <Section
      heading="5xl" 
      title="Projects">
      <ProjectGrid projects={PROJECTS} />
    </Section>
    <Section
      heading="5xl" 
      title="Work Experience"
    >
      {WORK_HISTORY.map(({name,location,roles},c) => {
        return (
        <Section
          heading="4xl" 
          title={name}
          subTitle={location}
          key={c}
        >
          {roles.map(({title,startDate,endDate,achievements},r) => {
          return (
           <Section
              heading="2xl" 
              title={title}
              subTitle={`${startDate} - ${endDate}`}
              key={r}
              padding={0}
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
    <Section
      heading="5xl" 
      title="Get In Touch">
      <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out.</p>
      <p>Email: peng.bits@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/davepaul">linkedin.com/in/davepaul</a></p>
      <p>Github: <a href="https://github.com/pengbits">pengbits</a></p>
    </Section>
  </Container>
  )
}

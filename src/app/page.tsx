import { Container, List, Grid, GridItem } from "@chakra-ui/react"
import { Section } from "@/components/Section"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import PROJECTS from "@/data/projects"
import WORK_HISTORY from "@/data/work"
import ABOUT from "@/data/about"
import SKILLS from "@/data/skills"
console.log(SKILLS)
export default function Home() {
  return (<Container maxWidth="3xl">
    <Section
      heading="6xl" 
      title={ABOUT.name}>
      <p>{ABOUT.tagline}</p>
    </Section>
    <Section
      heading="5xl" 
      title="Projects"
      padding={{
          x:4,
          y:8
        }}
      >
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
           padding={{
            x:0,
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
              padding={{x:0,y:6}}
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
      title="Skills"
    >
      <Grid mt={4} templateColumns="repeat(2, 1fr)" gap="6">
        {SKILLS.map((s,i) => {
          return (<GridItem 
            key={i} 
            colSpan={{base:2, md:1}}>
              {s.name}
            </GridItem>
          )
          })}
      </Grid>
    </Section>
    <Section
      heading="5xl" 
      title="Get In Touch">
      <p>I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out.</p>
      <p>Email: peng.bits@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/davepaul">linkedin.com/in/davepaul</a></p>
      <p>Github: <a href="https://github.com/pengbits">pengbits</a></p>
    </Section>
    <Section heading="xs"
      marginTop={20}
      title="&copy; Peng Bits 2025. All wrongs reversed.">
    </Section>
  </Container>

  )
}

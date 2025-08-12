import { Container, Heading, List, Text, Box } from "@chakra-ui/react"
import PROJECTS from "@/data/projects"
import WORK_HISTORY from "@/data/work"

export default function Home() {
  return (<Container maxWidth="2xl">
    <Box padding={4}>
      <Heading size="6xl">Dave Paul</Heading>
      <p>Sed ut sollicitudin massa. Nullam in pellentesque neque.</p> 
    </Box>
    <Box padding={4}>
      <Heading size="5xl">Projects</Heading>
      {PROJECTS.map(({title,id,description}) => {
        return (<div key={id}>
        <Heading size="3xl">{title}</Heading>
        <p>{description}</p>
      </div>)
    })}
    </Box>
    <Box padding={4}>
      <Heading size="5xl">Work Experience</Heading>
      {WORK_HISTORY.map(({name,location,roles},c) => {
        return (<div key={c}>
          <Heading size="4xl">{name} <Text as="span" textStyle="md">{location}</Text></Heading>
          
          {roles.map(({title,startDate,endDate,achievements},r) => {
          return (<div key={r}>
            <Heading size="2xl">{title} <Text as="span" textStyle="md">{startDate} - {endDate}</Text></Heading>
            <List.Root px={5}>
              {achievements.map((text,a) => {
                return <List.Item 
                marginBottom={2}  
                key={a}>{text}</List.Item>
              })}
            </List.Root>
          </div>)
        })}
        </div>)
      })}
    </Box>
    <Box padding={4}>
      <Heading size="5xl">Get In Touch</Heading>
      <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out.</p>
      <p>Email: peng.bits@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/davepaul">linkedin.com/in/davepaul</a></p>
      <p>Github: <a href="https://github.com/pengbits">pengbits</a></p>
    </Box>
  </Container>
  )
}

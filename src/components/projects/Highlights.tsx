import { List } from "@chakra-ui/react"
export const Highlights = ({data}:{data:string[]}) => (
  <List.Root>
    {data.map((bullet,i) => (
      <List.Item my='1' mx='8' key={i}>{bullet}
    </List.Item>))}
  </List.Root>
  )
import { Text } from "@chakra-ui/react"
type BodyTextProps = {
  body: string[]
}
export const BodyText = ({body}:BodyTextProps) => {
  return body.map((p,i) => {
    return <Text 
      key={i} 
      fontSize="medium" 
      as="p"
      mb="4"
    >
      {p}
    </Text>
  })
}
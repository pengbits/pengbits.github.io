import { Text } from "@chakra-ui/react"
import { applyFormatting } from "@/lib/markup"
type BodyTextProps = {
  body: string[],
  useMarkup: boolean
}
export const BodyText = ({body, useMarkup}:BodyTextProps) => {
  return body.map((p,i) => {
    return <Text 
      key={i} 
      fontSize="medium" 
      as="p"
      mb="4"
      dangerouslySetInnerHTML={{
        __html: applyFormatting(p)
      }}
    ></Text>
  })
}
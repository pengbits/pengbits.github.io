import { Text } from "@chakra-ui/react"
import { applyFormatting } from "@/lib/markup"
import styles from "./BodyText.module.css"
type BodyTextProps = {
  body: string[]
}
export const BodyText = ({body}:BodyTextProps) => {
  return body.map((p,i) => {
    return <Text 
    className="body-text"
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
import {Heading, Text, Box } from "@chakra-ui/react"
import {ReactNode} from "react"
import { ConditionalValue } from "@chakra-ui/react"

type SectionProps = {
  padding?:number
  title:string,
  subTitle?:string,
  heading:ConditionalValue<"sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined>,
  description?:string,
  children:ReactNode
}
const default_padding = 4
export const Section = ({padding,title,subTitle,heading,description,children}:SectionProps) => {
  return (
    <Box padding={padding !== undefined ? padding : default_padding}>
      <Heading size={heading}>{title} {subTitle && <Text as="span" textStyle="md">{subTitle}</Text>}</Heading>
      {description && <p>{description}</p>}
      {children}
    </Box>
)
}
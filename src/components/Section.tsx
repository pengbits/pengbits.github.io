import {Heading, Text, Box } from "@chakra-ui/react"
import {ReactNode} from "react"
import { ConditionalValue } from "@chakra-ui/react"

type SectionProps = {
  marginTop?:number
  padding?:{
    y:number,
    x:number
  },
  title:string,
  subTitle?:string,
  heading:ConditionalValue<"sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined>,
  description?:string,
  children?:ReactNode
}
const default_padding = 4
export const Section = ({marginTop,padding,title,subTitle,heading,description,children}:SectionProps) => {
  return (
    <Box 
      mt={marginTop || 0}
      px={padding?.x !== undefined ? padding.x : default_padding}
      py={padding?.y !== undefined ? padding.y : default_padding}
    >
      <Heading size={heading}>{title} {subTitle && <Text as="span" textStyle="md" display={{md:"block"}}>{subTitle}</Text>}</Heading>
      {description && <p>{description}</p>}
      {children}
    </Box>
) 
}
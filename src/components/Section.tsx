import {Heading, Text, Box } from "@chakra-ui/react"
import {ReactNode} from "react"
import { ConditionalValue } from "@chakra-ui/react"
    
type SectionProps = {
  marginTop?:number
  padding?:{
    y?:number,
    x?:number
  },
  title:string,
  subTitle?:string,
  heading:ConditionalValue<"sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined>,
  description?:string,
  children?:ReactNode
}
const default_padding = {
  x:0,
  y:4
}
const SectionSubtitle = ({children}:{children:ReactNode}) => {
  return  (<Text as="span" 
    display={{base:'block', md:'inline'}} 
    mb={{base: '4', md:'0'}}
    textStyle="md">
      {children}
  </Text>)
}

export const Section = ({marginTop,padding,title,subTitle,heading,description,children}:SectionProps) => {
  return (<>
    <Box 
      // outline='green solid 1px'
      mt={marginTop || 0}
      // TODO just pass through padding and margin and use box api, 
      // we don't need our own strategy and data structure for this
      px={padding?.x !== undefined ? padding.x : default_padding.x}
      py={padding?.y !== undefined ? padding.y : default_padding.y}
    >
      <Heading className="mb-2" size={heading}>{title} {subTitle && <SectionSubtitle>{subTitle}</SectionSubtitle>}</Heading>
      {description && <p>{description}</p>}
      {children}
    </Box>
  </>) 
}
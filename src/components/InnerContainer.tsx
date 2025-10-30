import {ReactNode} from "react"
import { Box } from "@chakra-ui/react"

export const InnerContainer = ({children}:{children:ReactNode}) => {
  return (<Box px={{base:"1rem",  md:"10vw", lg:"20vw"}}>
    {children}
  </Box>)
}
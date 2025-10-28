import {Box,Text,Flex} from "@chakra-ui/react"

import { SectionAnchor } from "./SectionAnchor"
import { Section } from "./Section"
import { ContactForm } from "./contact/ContactForm"
import { ContactLinks } from "./contact/ContactLinks"

import contact_data from "@/data/contact"
export const Footer = () => {
  return (<>
  <SectionAnchor
    title="Contact">
  </SectionAnchor>
  <Section
    heading="5xl" 
    title="Contact"> 
      <Text mb={{base:"4", md:"8"}}>{contact_data.headline}</Text>
      <Flex alignItems="initial" flexDir={{base:'column', md:'row'}}>
        <Box flexBasis="1/2" pr="2" mb={{base:"8", md:"0"}}>
          <ContactLinks />
        </Box>
        <Box flexBasis="1/2">
          <ContactForm />
        </Box>
      </Flex>
  </Section>
  <Section heading="xs"
    marginTop={20}
    title="&copy; Peng Bits 2025. All wrongs reversed.">
  </Section>
</>)
}

import { HStack, Button} from "@chakra-ui/react" 
import { ProjectLinkCollection, LinkLabels} from "@/types/Project"
import { ReactNode } from "react"

type ProjectLinkCollectionProps = {
  links?: ProjectLinkCollection,
  omit?: string
}
type ButtonProps = {
  target?: string,
  href: string,
  children: ReactNode
}
const ButtonLink = ({href, children}:ButtonProps) => {
  return (
    <Button size="xs" variant="subtle">
      <a target={href.indexOf('/') == 0 ? "_self":"_blank"} href={href}>{children}</a>
    </Button>)
}

const ProjectLinkCollectionComponent = ({links,omit}:ProjectLinkCollectionProps) => {
  if(!links) return null
  return <HStack>
    {links.live &&  (!omit || omit !== 'live')  && <ButtonLink href={links.live}>{LinkLabels.live}</ButtonLink>}
    {links.local && (!omit || omit !== 'local') && <ButtonLink href={links.local}>{LinkLabels.local}</ButtonLink>}
    {links.git  &&  (!omit || omit !== 'git')   && <ButtonLink href={links.git}>{LinkLabels.git}</ButtonLink>}
  </HStack>

}
export default ProjectLinkCollectionComponent
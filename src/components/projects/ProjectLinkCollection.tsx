import { HStack} from "@chakra-ui/react" 
import { ProjectLinkCollection, LinkLabels} from "@/types/Project"
import { ButtonLink } from "@/components/ButtonLink"

type ProjectLinkCollectionProps = {
  links?: ProjectLinkCollection,
  omit?: string
}

const ProjectLinkCollectionComponent = ({links,omit}:ProjectLinkCollectionProps) => {
  if(!links) return null
  return <HStack>
    {links.live &&  (!omit || omit !== 'live')  && <ButtonLink href={links.live}>{LinkLabels.live}</ButtonLink>}
    {/* {links.local && (!omit || omit !== 'local') && <ButtonLink href={links.local}>{LinkLabels.local}</ButtonLink>} */}
    {links.git  &&  (!omit || omit !== 'git')   && <ButtonLink href={links.git}>{LinkLabels.git}</ButtonLink>}
  </HStack>

}
export default ProjectLinkCollectionComponent
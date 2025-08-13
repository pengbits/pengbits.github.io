import { HStack, Button} from "@chakra-ui/react" 
import { ProjectLinkCollection } from "@/types/project"

type ProjectLinkCollectionProps = {
  links: ProjectLinkCollection | undefined
}
export default ({links}:ProjectLinkCollectionProps) => {
  if(!links) return null

  return <HStack>
    {links.live &&  <Button size="xs" variant="subtle"><a target="_blank" href={links.live}>live site</a></Button>}
    {links.local && <Button size="xs" variant="subtle"><a target="_blank" href={links.local}>details</a></Button>}
    {links.git &&   <Button size="xs" variant="subtle"><a target="_blank" href={links.git}>github</a></Button>}
  </HStack>

}
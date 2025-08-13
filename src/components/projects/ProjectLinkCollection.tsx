import { ProjectLinkCollection } from "@/types/project"

type ProjectLinkCollectionProps = {
  links: ProjectLinkCollection | undefined
}
export default ({links}:ProjectLinkCollectionProps) => {
  if(!links) return null

  return <ul>
    {links.live &&  <li><a target="_blank" href={links.live}>live site</a></li>}
    {links.local && <li><a target="_blank" href={links.local}>details</a></li>}
    {links.git &&   <li><a target="_blank" href={links.git}>github</a></li>}
  </ul>

}
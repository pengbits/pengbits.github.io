import { Box } from '@chakra-ui/react'
import type {VideoSourceSet} from '@/types/Project'
import { Video } from './Video'
type ResponsiveVideoProps = {
  src: VideoSourceSet
}
export const ResponsiveVideo = ({src:{title,desktop,mobile}}:ResponsiveVideoProps) => {
  return (<Box mb={4}>
    {desktop && <Box display={{base:'none',lg:'block'}}><Video src={desktop} aspect='landscape'  /></Box>}
    {mobile &&  <Box display={{base:'block',lg:'none'}}><Video src={mobile} aspect='portrait'     /></Box>}
  </Box>)
}
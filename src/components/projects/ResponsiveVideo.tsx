import { Box } from '@chakra-ui/react'
import type {VideoSourceSet} from '@/types/Project'
import { Video } from './Video'
type ResponsiveVideoProps = {
  src: VideoSourceSet
}
export const ResponsiveVideo = ({src:{desktop,mobile}}:ResponsiveVideoProps) => {
  return (<Box mb={4}>
    {desktop && <Box display={{base:'none', md:'block'}}><Video src={desktop} aspect='landscape'  /></Box>}
    {mobile &&  <Box display={{base:'block',md:'none'}}><Video src={mobile} aspect='portrait'     /></Box>}
  </Box>)
}
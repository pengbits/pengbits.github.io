
import { AspectRatio} from '@chakra-ui/react';

export const YouTubeEmbed = ({videoUrl}:{videoUrl:string}) => {
  return (
    <AspectRatio  ratio={16 / 9}>
      <iframe src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </AspectRatio>
  )
}
import { Image } from "@chakra-ui/react"
import { IMAGE_BASE } from "@/lib/images"

type StaticImageProps = {
  src:string,
  aspectRatio: "square" | "portrait" | "landscape"
}

const aspectRatioMap = {
  square: 1/1,
  portrait: 1/2,
  landscape: 16/9
}

export const StaticImage = ({src,aspectRatio}:StaticImageProps) => (
<>
  <Image
    mb="8"
    src={`${IMAGE_BASE}/${src}`}
    width='100%'
    aspectRatio={aspectRatioMap[aspectRatio]}
    alt="project image"
    borderColor="gray.400"
    borderWidth="1px"
    borderStyle="solid"
  />
</>
)
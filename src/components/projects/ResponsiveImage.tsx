import { Image } from "@chakra-ui/react"
import { IMAGE_BASE } from "@/lib/images"

type ResponsiveImageProps = {
  src: {
    base: string,
    md: string
  }
}
export const ResponsiveImage = ({src}:ResponsiveImageProps) => (
<>
  <Image
    display={{base:'block',md:'none'}}
    mb="4"
    src={`${IMAGE_BASE}/${src.base}`}
    width='100%'
    aspectRatio={1/2}
    alt="project image"
  />
  <Image
    display={{base:'none', md:'block'}}
    mb="4"
    src={`${IMAGE_BASE}/${src.md}`}
    width='100%'
    aspectRatio={4/3}
    alt="project image"
  />
</>
)
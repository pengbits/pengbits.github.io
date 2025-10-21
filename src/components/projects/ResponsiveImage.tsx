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
    mb="8"
    src={`${IMAGE_BASE}/${src.base}`}
    width='100%'
    aspectRatio={1/2}
    alt="project image"
    borderColor="gray.400"
    borderWidth="1px"
    borderStyle="solid"
  />
  <Image
    display={{base:'none', md:'block'}}
    mb="8"
    src={`${IMAGE_BASE}/${src.md}`}
    width='100%'
    aspectRatio={4/3}
    alt="project image"
    borderColor="gray.400"
    borderWidth="1px"
    borderStyle="solid"
  />
</>
)
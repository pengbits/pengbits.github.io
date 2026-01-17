import { Carousel, IconButton, Box } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import type { Recommendation } from "@/types/Recommendation"
import { RecommendationItem } from "./RecommendationItem"



type RecommendationsProps = {
  data: Recommendation[] 
}

export const Recommendations = ({data}:RecommendationsProps) => (
<Carousel.Root slideCount={3}  mx="auto">
  <Carousel.ItemGroup>
    {(data || []).map((r,index) => (
    <Carousel.Item key={index} index={index}>
      <Box w="100%" minH="300px">
        <RecommendationItem content={r} />
      </Box>
    </Carousel.Item> 
    ))}
  </Carousel.ItemGroup>
  <Carousel.Control justifyContent="center" gap="4">
    <Carousel.PrevTrigger asChild>
      <IconButton size="xs" variant="ghost">
        <LuChevronLeft />
      </IconButton>
    </Carousel.PrevTrigger>

    <Carousel.Indicators />

    <Carousel.NextTrigger asChild>
      <IconButton size="xs" variant="ghost">
        <LuChevronRight />
      </IconButton>
    </Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>
)
import { Box, Heading, Text } from "@chakra-ui/react"
import type { Recommendation } from "@/types/Recommendation"

type RecommendationsProps = {
  data: Recommendation[] // recommendation
}
type RecommendationItemProps = {
  content: Recommendation
}

const RecommendationItem = ({content:{author,title,body}}:RecommendationItemProps) => (
  <Box mb="4">
    <Heading size="lg">
      {author}
    </Heading>
    <Text fontSize="sm">
      {title}
    </Text>
    <Text fontSize="md">
      {body.map((line,k) => (
        <Box as="span" key={k} marginBottom="2">{line}</Box>
      ))}
    </Text>
  </Box>
)


export const Recommendations = ({data}:RecommendationsProps) => (
  <Box>
    {(data || []).map((r,index) => (<RecommendationItem 
      content={r} key={index}
    />))}
  </Box>
)
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Flex, Box, Heading, Text } from "@chakra-ui/react"
import type { Recommendation } from "@/types/Recommendation"
import { IMAGE_BASE_RECOMMENDATIONS } from "@/lib/images"

type RecommendationsProps = {
  data: Recommendation[] // recommendation
}

const RecommendationItem = ({r:{image,author,title,date,body}}:RecommendationItemProps) => (
  <Box mb="4">
    <Flex flexDir="row">
      <Avatar.Root size="xl" mt="2" >
        <Avatar.Image src={`${IMAGE_BASE_RECOMMENDATIONS}/${image}`}></Avatar.Image>
        <Avatar.Fallback name="Author" />
      </Avatar.Root>
      <Box ml="4">
        <Heading size="lg">
          {author}
        </Heading>
        <Heading size="md">
          {title}
        </Heading>
         <Text fontSize="md">
          {date}
         </Text>
        <Text fontSize="md">
          {body.map((line,k) => (
            <Box key={k} as="span" display="block" marginBottom="2">{line}</Box>
          ))}
        </Text>
      </Box>
    </Flex>
  </Box>
)

type RecommendationItemProps = {
  r: Recommendation
}

export const Recommendations = ({data}:RecommendationsProps) => (
  <Box>
    {(data || []).map((r,index) => (<RecommendationItem 
      r={r} key={index}
    />))}
  </Box>
)
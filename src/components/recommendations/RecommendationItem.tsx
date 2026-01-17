import { Avatar, Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react"
import type { Recommendation } from "@/types/Recommendation"
import { IMAGE_BASE_RECOMMENDATIONS } from "@/lib/images"

type RecommendationItemProps = {
  content: Recommendation
}
export const RecommendationItem = ({content:{image,author,title,date,body,mediumText}}:RecommendationItemProps) => (
  <Box mb="4">
    <Flex >
      <Box flexBasis="auto" m="4">
        <Avatar.Root size="xl">
          <Avatar.Image src={`${IMAGE_BASE_RECOMMENDATIONS}/${image}`}></Avatar.Image>
          <Avatar.Fallback name="Author" />
        </Avatar.Root>
      </Box>
      <Box >
        <Heading size="lg">
          {author}
        </Heading>
        <Heading size="md">
          {title}
        </Heading>
         <Text fontSize="md" mb="2">
          {date}
         </Text>
        <Text fontSize="md">
          {mediumText} 
        </Text>
        <Button 
        asChild
          mt="4"
          size="xs" 
          variant="subtle"
        >
        <Link target="_blank" href="https://www.linkedin.com/in/davepaul/details/recommendations/">
          Read More</Link>
        </Button>
        
        {/* <Text fontSize="md" display="none">
          {body.map((line,k) => (
            <Box key={k} as="span" display="block" marginBottom="2">{line}</Box>
          ))}
        </Text> */}
      </Box>
    </Flex>
  </Box>
)


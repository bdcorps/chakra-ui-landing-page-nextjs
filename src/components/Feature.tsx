import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FeatureProps {}

const Feature: FunctionComponent<FeatureProps> = () => {
  return (
    <Container
      maxW="container.xl"
      centerContent
      p={16}
      rounded="lg"
      backgroundColor="gray.100"
      my={10}
    >
      <Stack
        spacing={10}
        alignItems="center"
        direction={["column", null, "row"]}
      >
        <Box>
          <Image
            src="https://www.plain.com/_next/image/?url=%2Fimages%2Ffeature-grid-queues.png&w=3840&q=100"
            backgroundColor="rgb(255, 235, 204)"
          />
        </Box>

        <VStack align="flex-start">
          <Text color="gray.500">Queues</Text>
          <Heading>Manage your workload</Heading>
          <Text color="gray.500">
            Stay on top of your and your team's workload with Queues. Instantly
            see who needs help, who's being looked after and who needs a follow
            up. Plain also works out who to help next, so you can stay in the
            zone.
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Feature;
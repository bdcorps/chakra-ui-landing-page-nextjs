import {
  Box,
  Center,
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
    <Center w="full" minH="100vh">
      <Container maxW="container.xl" rounded="lg">
        <Stack
          spacing={16}
          alignItems="center"
          direction={["column", null, "row"]}
          w="full"
          h="full"
        >
          <Box backgroundColor="#5000FF" rounded="md">
            <Image src="https://www.plain.com/_next/image/?url=%2Fimages%2Ffeature-grid-queues.png&w=3840&q=100" />
          </Box>

          <VStack align="flex-start" maxW={400}>
            <Text color="gray.500">Queues</Text>
            <Heading>Manage your workload</Heading>
            <Text color="gray.500">
              Stay on top of your and your team's workload with Queues.
              Instantly see who needs help, who's being looked after and who
              needs a follow up. Plain also works out who to help next, so you
              can stay in the zone.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Center>
  );
};

export default Feature;

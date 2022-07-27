import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FeatureProps {
  reverse?: boolean;
}

const Feature: FunctionComponent<FeatureProps> = ({
  reverse,
}: FeatureProps) => {
  const rowDirection = reverse ? "row-reverse" : "row";
  return (
    <Center w="full" minH="100vh">
      <Container maxW="container.xl" rounded="lg">
        <Stack
          spacing={16}
          alignItems="center"
          direction={["column", null, rowDirection]}
          w="full"
          h="full"
        >
          <Box bgGradient="linear(to-b, gray.100, gray.50)" rounded="md">
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
            <Button colorScheme="brand" variant="link">
              Learn more →
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Center>
  );
};

export default Feature;

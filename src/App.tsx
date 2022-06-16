import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Spacer,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

function FAQ({ items }: any) {
  return (
    <Box borderWidth="1px" borderRadius="lg" w="full">
      <Accordion>
        {items.map((item: any, i: number) => {
          return (
            <AccordionItem key={`faq_${i}`}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.a}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}

const App = () => {
  const site = {
    name: "Launchman",
    title: "Your landing pages can bring in 10x more search traffic",
    description:
      "Launchman lets you generate landing pages that target long-tailed keywords at scale. Pages are server-side rendered so Google ranks you better than your typical React SPA.",
    image:
      "https://assets-global.website-files.com/5fb2b5d778be407a560568d8/60256ca15179d3117fd1f3ab_home-selector-recruiting.png",
    features: [
      {
        title: "Chat via Slack or email",
        description:
          "Chat with us throughout the day by adding us to your own Slack channel or simply send us an email.",
      },
      {
        title: "Chat via Slack or email",
        description:
          "Chat with us throughout the day by adding us to your own Slack channel or simply send us an email.",
      },
    ],
    faq: [
      {
        q: "Can I bring my own design?",
        a: "We can chat about the page design that you would want to use.",
      },
      {
        q: "I have slightly different needs, how can I contact you?",
        a: "Email me at sukh@saasbase.dev",
      },
      {
        q: "Can I bring my own design?",
        a: "We can chat about the page design that you would want to use.",
      },
      {
        q: "I have slightly different needs, how can I contact you?",
        a: "Email me at sukh@saasbase.dev",
      },
    ],
    twitterHandle: "thisissukh_",
  };

  const { name, title, description, image, features, faq, twitterHandle } =
    site;

  return (
    <>
      <Helmet>
        <title>
          {name} | {title}
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>

      <Box bg="gray.50">
        <Container maxW="container.lg">
          <Box>
            <Center p={4} minHeight="70vh">
              <VStack>
                <Text fontWeight={500} fontSize="lg" color="brand.500">
                  {name}
                </Text>

                <Container maxW="container.md" textAlign="center">
                  <Heading size="2xl" mb={4} color="gray.700">
                    {title}
                  </Heading>
                  <Text fontSize="xl" color="gray.500">
                    {description}
                  </Text>
                  <Button
                    mt={8}
                    colorScheme="brand"
                    onClick={() => {
                      window.open("https://launchman.cc", "_blank");
                    }}
                  >
                    I need this for $10/month →
                  </Button>

                  <Text my={2} fontSize="sm" color="gray.500">
                    102+ builders have signed up in the last 30 days
                  </Text>
                </Container>
              </VStack>
            </Center>
          </Box>
        </Container>

        <Container maxW="container.2xl">
          <Center p={[0, 10]}>
            <Image src={image}></Image>
          </Center>
        </Container>

        <Container maxW="container.2xl" centerContent my={24}>
          <SimpleGrid spacingX={10} spacingY={20} minChildWidth="300px">
            {features.map(({ title, description }) => (
              <Box p="6" rounded="md">
                <Text fontWeight={500}>{title}</Text>
                <Text color="gray.500" mt={4}>
                  {description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>

        <Container my={24} maxW="container.md">
          <Box w="full">
            <VStack spacing={10} w="full">
              <Text fontWeight={500} fontSize="2xl" align="center">
                Frequently asked questions
              </Text>
              <FAQ items={faq} />
            </VStack>
          </Box>
        </Container>

        <Container my={24} maxW="container.lg">
          <VStack spacing={6} backgroundColor="brand.400" rounded="xl" p={6}>
            <VStack spacing={4} maxW="md">
              <Text
                fontWeight={600}
                fontSize="3xl"
                align="center"
                color="white"
              >
                Subscribe to {name}
              </Text>
              <Text fontSize="lg" align="center" color="white">
                {description}
              </Text>
            </VStack>

            <Button
              size="lg"
              colorScheme="brand"
              onClick={() => (window.location.href = "https://launchman.cc")}
            >
              I want this!
            </Button>
          </VStack>
        </Container>

        <Container maxW="container.lg">
          <Flex py={6}>
            <Box>
              <Text>© 2022 Launchman</Text>
              <Text>Made by Sukh</Text>
            </Box>
            <Spacer />

            <LinkBox>
              <LinkOverlay
                href={`https://twitter.com/${twitterHandle}`}
                isExternal
              >
                <Image src="./twitter.svg"></Image>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default App;

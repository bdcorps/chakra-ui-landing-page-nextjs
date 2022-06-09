import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Wrap,
  Image,
  WrapItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

function Testimonial() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text>
        Example Video Editor is the best in the game. It has saved me 10 hours
        of work every week. Highly recommended for day to day marketers!
      </Text>
      <Text align="right" mt={4}>
        - Sukh (Social Media Ad creator)
      </Text>
    </Box>
  );
}

function FAQ({ items }: any) {
  return (
    <Box borderWidth="1px" borderRadius="lg">
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

function App() {
  let targetSite;

  if (!targetSite) {
    targetSite = {
      id: "launchman",
      name: "Launchman",
      title:
        "Bring 10x more customers from Google Search using Programmatic SEO",
      image:
        "https://launchman.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2Fa38b6d46-8ab3-4a6a-9438-bf311061e38b%2Fimages%2F67142688-d65c-4a95-8306-1bef086f5407.png&w=3840&q=80",
      description:
        "Launchman is a no-code tool that lets you generate landing pages at scale for every use case/feature/target customer your product is serving. We're talking massive scale - like 1K+ pages in an instant.",

      at_apiKey: "",
      at_base: "appIKPr7wEU898tPr",
      at_table: "tbljZ5v3FB2GKRhVK",
      accountId: "sukh",
      pages: [],
    };
  }

  const { name, title, description, image } = targetSite;

  const items: any[] = [
    {
      q: "Can I bring my own design?",
      a: "We can chat about the page design that you would want to use.",
    },
    {
      q: "I have slightly different needs, how can I contact you?",
      a: "Email me at sukh@saasbase.dev",
    },
  ];
  return (
    <Container maxW="container.2xl">
      <Box padding="4" color="black" w="full">
        <Center p={4} minHeight="70vh">
          <VStack>
            <Text fontWeight={500} fontSize="lg" color="#5000FF">
              {name}
            </Text>

            <Container textAlign="center" flex="1" maxW="container.md">
              <Heading size="2xl" mb={4}>
                {title}
              </Heading>
              <Text fontSize="xl" color="gray.700">
                {description}
              </Text>
              <Button
                mt={10}
                colorScheme="brand"
                onClick={() => {
                  window.open(
                    "https://buy.stripe.com/14k6se2ub73ca64cMN",
                    "_blank"
                  );
                }}
              >
                I need this for $10/month/site →
              </Button>
            </Container>
          </VStack>
        </Center>
        <Center pt="20vh" py={8} w="full">
          <VStack spacing={30} w="full">
            <Box flex="2">
              <Image src={image} alt="image"></Image>
            </Box>

            <Center minHeight="60vh">
              <VStack spacing={10}>
                <Text fontSize="2xl" fontWeight={500}>
                  Trusted by teams worldwide
                </Text>

                <Wrap spacing={20} justify="center">
                  <WrapItem>
                    <Testimonial />
                  </WrapItem>
                  <WrapItem>
                    <Testimonial />
                  </WrapItem>
                  <WrapItem>
                    <Testimonial />
                  </WrapItem>
                </Wrap>
              </VStack>
            </Center>
          </VStack>
        </Center>
      </Box>

      <Container maxW="lg">
        <VStack spacing={10}>
          <Text fontWeight={500} fontSize="2xl" align="center">
            Frequently asked questions
          </Text>
          <FAQ items={items} />
        </VStack>
      </Container>

      <Center p={10}>
        <VStack spacing={10}>
          <Text fontWeight={500} fontSize="2xl" align="center">
            Ready? Lets get started.
          </Text>
          <Button
            size="lg"
            colorScheme="brand"
            onClick={() =>
              (window.location.href =
                "https://buy.stripe.com/14k6se2ub73ca64cMN")
            }
          >
            I want this!
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}

export default App;

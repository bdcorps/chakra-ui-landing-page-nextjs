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
  Flex,
  Spacer,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

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
      name: "Launchman",
      title: "The data-driven CRM for modern teams",
      image:
        "https://assets-global.website-files.com/5fb2b5d778be407a560568d8/601164cc9156d4e7ded7c054_home-hero_dark.png",
      description:
        "Attio gives you all you need to build the perfect relationship management tool for your team.",
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
    <>
      <Helmet>
        <title>Sample Landing Page</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <Container maxW="lg">
        <Box>
          <Center p={4} minHeight="70vh">
            <VStack>
              <Text fontWeight={500} fontSize="lg" color="#5000FF">
                {name}
              </Text>

              <Container textAlign="center" flex="1">
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

                {/* <Text >
                  102+ marketers have trusted us to expand their TOFT growth
                </Text> */}

                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={10}>
                  <GridItem w="100%" h="10">
                    <Image
                      src="https://www.aerotime.com/img/swiggy.svg"
                      opacity={0.75}
                    ></Image>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Image
                      src="https://www.aerotime.com/img/swiggy.svg"
                      opacity={0.75}
                    ></Image>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Image
                      src="https://www.aerotime.com/img/swiggy.svg"
                      opacity={0.75}
                    ></Image>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Image
                      src="https://www.aerotime.com/img/swiggy.svg"
                      opacity={0.75}
                    ></Image>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Image
                      src="https://www.aerotime.com/img/swiggy.svg"
                      opacity={0.5}
                    ></Image>
                  </GridItem>
                </Grid>
              </Container>
            </VStack>
          </Center>
          <Center pt="20vh" py={8} w="full">
            <VStack spacing={30} w="full">
              <Box w="full" boxSize="full">
                <Image src={image} alt="image"></Image>
              </Box>

              <Center>
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

        <Container>
          <VStack spacing={10}>
            <Text fontWeight={500} fontSize="2xl" align="center">
              Frequently asked questions
            </Text>
            <FAQ items={items} />
          </VStack>
        </Container>
      </Container>

      <Container backgroundColor="brand.400" p={8} my={24} rounded="xl">
        <VStack spacing={10}>
          <VStack spacing={4} w="md">
            <Text fontWeight={600} fontSize="3xl" align="center" color="white">
              Subscribe to Webflow Inspo
            </Text>
            <Text fontSize="lg" align="center" color="white">
              Get the best, coolest, and latest in design and no-code delivered
              to your inbox each week.
            </Text>
          </VStack>

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
      </Container>

      <Container>
        <Flex py={6}>
          <Box>
            <Text>C 2022 Launchman</Text>

            <Text>Made by Jakib and Marta</Text>
          </Box>
          <Spacer />

          <Box rounded="lg" backgroundColor="gray.400" w="48px" h="48px"></Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;

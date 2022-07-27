import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { CTA } from "./components/CTA";
import Feature from "./components/Feature";
import DrawerHome from "./components/HeaderResponsive";
import PricingBox from "./components/PricingBox";

// todo: seo

function FAQ({ items }: any) {
  return (
    <Box borderRadius="lg" w="full" p={4}>
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
    name: "Biller",
    title: "You don't have to chase your clients around to get paid",
    description:
      "Freelancers use Biller to accept payments and send invoices to clients with a single click",
    image:
      "https://assets-global.website-files.com/5fb2b5d778be407a560568d8/60256ca15179d3117fd1f3ab_home-selector-recruiting.png",
    features: [
      {
        icon: "✨",
        title: "No-code",
        description:
          "We are No-Code friendly. There is no coding required to get started. Launchman connects with Airtable and lets you generate a new page per row. It's just that easy!",
      },
      {
        icon: "🎉",
        title: "Make Google happy",
        description:
          "We render all our pages server-side; when Google's robots come to index your site, the page does not have to wait for JS to be fetched. This helps you get ranked higher.",
      },
      {
        icon: "😃",
        title: "Rapid experimenting",
        description:
          "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
      },
      {
        icon: "🔌",
        title: "Rapid experimenting",
        description:
          "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
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

  const [isBilledAnnually, setIsBilledAnnually] = useState<boolean>(true);

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
      {/* <Header
        name="Launchman"
        logo="https://realfavicongenerator.net/homepage_icons/platforms/windows_2x.png"
      /> */}
      <DrawerHome name={site.name} />
      <Box bg="gray.50">
        <Container maxW="container.lg">
          <Box>
            <Center p={4} minHeight="70vh">
              <VStack>
                <Container maxW="container.md" textAlign="center">
                  <Heading size="2xl" mb={4} color="gray.700">
                    {title}
                  </Heading>
                  <Text fontSize="xl" color="gray.500">
                    {" "}
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
            <video
              playsInline
              autoPlay
              muted
              poster="https://ruttl.com/assets/img/index-hero.jpg"
            >
              <source
                src="https://ruttl.com/assets/video/index-hero.webm"
                type="video/mp4"
              />
            </video>

            {/* <Image
              src={image}
              alt="Sample product image from attio.com"
            ></Image> */}
          </Center>
        </Container>
        <Box w="full">
          <Container maxW="container.2xl" centerContent py={20}>
            <Text color="gray.600" fontSize="lg">
              The best design-led companies use Kernel
            </Text>

            <Wrap spacing={20} mt={8} align="center">
              <WrapItem>
                <Image src="./logo-1.svg" />
              </WrapItem>
              <WrapItem>
                <Image src="./logo-2.svg" />
              </WrapItem>
              <WrapItem>
                <Image src="./logo-1.svg" />
              </WrapItem>
            </Wrap>
          </Container>
        </Box>
        <Box backgroundColor="white" w="full" id="features">
          <Feature />
          <Feature reverse={true} />
          <Feature />
        </Box>
        <Container maxW="container.md" centerContent py={28}>
          <SimpleGrid spacingX={10} spacingY={20} minChildWidth="300px">
            {features.map(({ title, description, icon }) => (
              <Box p={4} rounded="md">
                <Text fontSize="4xl">{icon}</Text>
                <Text fontWeight={500}>{title}</Text>
                <Text color="gray.500" mt={4}>
                  {description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
        <Container py={28} maxW="container.lg" w="full" id="pricing">
          <VStack spacing={10} align="center">
            <ButtonGroup isAttached>
              <Button
                onClick={() => {
                  setIsBilledAnnually(true);
                }}
                colorScheme={isBilledAnnually ? "brand" : "gray"}
              >
                Annually (-10%)
              </Button>
              <Button
                onClick={() => {
                  setIsBilledAnnually(false);
                }}
                colorScheme={isBilledAnnually ? "gray" : "brand"}
              >
                Monthly
              </Button>
            </ButtonGroup>

            <SimpleGrid columns={[1, null, 3]} spacing={10}>
              <PricingBox
                pro={false}
                name="Starter"
                isBilledAnnually={isBilledAnnually}
              />
              <PricingBox
                pro={true}
                name="Creator"
                isBilledAnnually={isBilledAnnually}
              />
              <PricingBox
                pro={false}
                name="Enterprise"
                isBilledAnnually={isBilledAnnually}
              />
            </SimpleGrid>
          </VStack>
        </Container>
        <Container py={28} maxW="container.md">
          <Box w="full">
            <VStack spacing={10} w="full">
              <Text fontWeight={500} fontSize="2xl" align="center">
                Frequently asked questions
              </Text>
              <FAQ items={faq} />
            </VStack>
          </Box>
        </Container>
        <CTA
          heading={`Subscribe to ${site.name}`}
          cta={{ name: "I want this!", link: "#" }}
        />
        <Container maxW="container.lg">
          <Flex py={6}>
            <Box>
              <Text>© 2022 {site.name}</Text>
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

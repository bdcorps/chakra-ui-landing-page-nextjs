import {
  Box,
  Button,
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
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { CTA } from '../components/CTA'
import { FAQSection } from '../components/FAQSection'
import { Feature } from '../components/Feature'
import Layout from '../components/Layout'
import { PricingSection } from '../components/PricingSection'
import { FeatureType, SiteType } from '../types'

const SiteIndex = () => {
  const site: SiteType = {
    name: 'Biller',
    logo: 'https://launchman-space.nyc3.digitaloceanspaces.com/launchman-logo.png',
    title: "You don't have to chase your clients around to get paid",
    description:
      'Freelancers use Biller to accept payments and send invoices to clients with a single click',
    image:
      'https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.png',
    video:
      'https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.webm',
    features: [
      {
        title: 'Detailed Analytics',
        description:
          "No more spending hours writing formulas in Excel to figure out how much you're making. We surface important metrics to keep your business going strong.",
        image: './feature1.png',
      },
      {
        title: 'Track your clients',
        description:
          'Know when and how your projects are going so you can stay on top of delivery dates.',
        image: './feature2.png',
      },
      {
        title: 'Manage projects',
        description:
          "You don't have to hunt your email inbox to find that one conversation. Every task, project, and client information is just a click away.",
        image: './feature3.png',
      },
    ],
    highlights: [
      {
        icon: '✨',
        title: 'No-code',
        description:
          "We are No-Code friendly. There is no coding required to get started. Launchman connects with Airtable and lets you generate a new page per row. It's just that easy!",
      },
      {
        icon: '🎉',
        title: 'Make Google happy',
        description:
          "We render all our pages server-side; when Google's robots come to index your site, the page does not have to wait for JS to be fetched. This helps you get ranked higher.",
      },
      {
        icon: '😃',
        title: 'Rapid experimenting',
        description:
          "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
      },
      {
        icon: '🔌',
        title: 'Rapid experimenting',
        description:
          "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
      },
    ],
    faqs: [
      {
        q: 'How many clients can I bring on?',
        a: 'You can bring on 3 clients with the Free plan. Upgrade to Pro for additional seats.',
      },
      {
        q: 'Can I connect it to my CRM?',
        a: 'Yes! We support Notion and PipeDrive currently.',
      },
      {
        q: 'Do you support international payments?',
        a: 'Yes - payments can be made from and to any country.',
      },
      {
        q: 'Who can I connect to for support?',
        a: 'Email me at sukh@saasbase.dev',
      },
    ],
    twitterHandle: 'thisissukh_',
  }

  const {
    name,
    logo,
    title,
    description,
    image,
    video,
    features,
    highlights,
    faqs,
    twitterHandle,
  } = site

  return (
    <>
      <NextSeo
        title={`${name} | ${title}`}
        description={description}
        additionalLinkTags={[{ rel: 'icon', href: site.logo }]}
      />
      <Layout>
        <Container maxW="container.lg">
          <Box>
            <Center p={4} minHeight="70vh">
              <VStack>
                <Container maxW="container.md" textAlign="center">
                  <Heading as="h1" size="2xl" mb={4} color="gray.700">
                    {title}
                  </Heading>
                  <Text as="h2" fontSize="xl" color="gray.500">
                    {description}
                  </Text>
                  <Button mt={8} colorScheme="brand">
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
        <Container maxW="container.xl">
          <Center p={[0, 10]}>
            <video playsInline autoPlay muted poster={image} loop>
              <source src={video} type="video/mp4" />
            </video>

            {/*
          if you want to show an image instead, uncomment this

          <Image
              rounded="md"
              src={image}
              alt="Sample product image from attio.com"
            ></Image> */}
          </Center>
        </Container>
        <Box w="full">
          <Container maxW="container.2xl" centerContent py={[20]}>
            <Text color="gray.600" fontSize="lg">
              Used by teams worldwide
            </Text>

            <Wrap
              spacing={[10, 20]}
              mt={8}
              align="center"
              justify="center"
              w="full"
            >
              <WrapItem>
                <Image src="./logo-1.svg" alt="Microsoft logo" />
              </WrapItem>
              <WrapItem>
                <Image src="./logo-2.svg" alt="Adobe logo" />
              </WrapItem>
              <WrapItem>
                <Image src="./logo-1.svg" alt="Microsoft logo" />
              </WrapItem>
              <WrapItem>
                <Image src="./logo-2.svg" alt="Adobe logo" />
              </WrapItem>
            </Wrap>
          </Container>
        </Box>
        <VStack
          backgroundColor="white"
          w="full"
          id="features"
          spacing={16}
          py={[16, 0]}
        >
          {features.map(
            ({ title, description, image }: FeatureType, i: number) => {
              return (
                <Feature
                  key={`feature_${i}`}
                  title={title}
                  description={description}
                  image={image}
                  reverse={i % 2 === 1}
                />
              )
            }
          )}
        </VStack>
        <Container maxW="container.md" centerContent py={[8, 28]}>
          <SimpleGrid spacingX={10} spacingY={20} minChildWidth="300px">
            {highlights.map(({ title, description, icon }, i: number) => (
              <Box p={4} rounded="md" key={`highlight_${i}`}>
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
          <PricingSection />
        </Container>
        <Container py={28} maxW="container.md">
          <Box w="full">
            <VStack spacing={10} w="full">
              <Text fontWeight={500} fontSize="2xl" align="center">
                Frequently asked questions
              </Text>
              <FAQSection items={faqs} />
            </VStack>
          </Box>
        </Container>
        <CTA
          heading={`Get started with ${site.name}  today!`}
          cta={{ name: 'I want this!', link: '#' }}
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
                <Image src="./twitter.svg" alt="Twitter logo"></Image>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}

export default SiteIndex

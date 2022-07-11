import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const navlinks = [
  { name: "Home", link: "#" },
  { name: "Pricing", link: "#" },
];

const DesktopSidebarContents = () => {
  return (
    <Container maxW="container.lg">
      <Stack
        justify="space-between"
        p={[0, 4]}
        w="full"
        direction={["column", "row"]}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <Heading fontSize="xl">SaaSBase</Heading>
        </Box>
        <Spacer />
        <Stack align="flex-start" spacing={8} direction={["column", "row"]}>
          <Text fontWeight={500}>Features</Text>
          <Text fontWeight={500}>Pricing</Text>
          <Text fontWeight={500}>FAQ</Text>
        </Stack>
        <Spacer />
        <LinkBox>
          <LinkOverlay href={`https://twitter.com/thisissukh_`} isExternal>
            <Image src="twitter.svg"></Image>
          </LinkOverlay>
        </LinkBox>
      </Stack>
    </Container>
  );
};
const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="full" align="center">
        <Heading fontSize="xl">SaaSBase</Heading>
        <Spacer />
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg="gray.50">
            <DrawerCloseButton />
            <DrawerHeader>SaaSBase</DrawerHeader>

            <DrawerBody>
              <DesktopSidebarContents />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

const Sidebar = ({ children }: any) => {
  return (
    <chakra.header id="header">
      <Box display={{ base: "flex", md: "none" }} p={4}>
        <MobileSidebar />
      </Box>

      <Box display={{ base: "none", md: "flex" }} bg="gray.50">
        <DesktopSidebarContents />
      </Box>
    </chakra.header>
  );
};

const DrawerHome: NextPage = ({ children }: any) => {
  return (
    <Box>
      <Sidebar />
    </Box>
  );
};

export default DrawerHome;

// https://levelup.gitconnected.com/create-a-responsive-navigation-bar-using-chakraui-6489473e933

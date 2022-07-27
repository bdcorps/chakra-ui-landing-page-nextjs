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
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
];

const DesktopSidebarContents = ({ name }: any) => {
  return (
    <Container maxW="container.lg">
      <Stack
        justify="space-between"
        p={[0, 4]}
        w="full"
        direction={["column", "row"]}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <Heading fontSize="xl">{name}</Heading>
        </Box>
        <Spacer />
        <Stack align="flex-start" spacing={8} direction={["column", "row"]}>
          {navLinks.map((navLink: any, i: number) => {
            return (
              <Link href={navLink.link} key={`navlink_${i}`}>
                {navLink.name}
              </Link>
            );
          })}
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
const MobileSidebar = ({ name }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="full" align="center">
        <Heading fontSize="xl">{name}</Heading>
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
            <DrawerHeader>{name}</DrawerHeader>

            <DrawerBody>
              <DesktopSidebarContents />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

interface SidebarProps {
  name: string;
}

const Sidebar = ({ name }: SidebarProps) => {
  return (
    <chakra.header id="header">
      <Box display={{ base: "flex", md: "none" }} p={4}>
        <MobileSidebar name={name} />
      </Box>

      <Box display={{ base: "none", md: "flex" }} bg="gray.50">
        <DesktopSidebarContents name={name} />
      </Box>
    </chakra.header>
  );
};

interface DrawerHomeProps {
  name: string;
}

const DrawerHome = ({ name }: DrawerHomeProps) => {
  return (
    <Box>
      <Sidebar name={name} />
    </Box>
  );
};

export default DrawerHome;

// https://levelup.gitconnected.com/create-a-responsive-navigation-bar-using-chakraui-6489473e933

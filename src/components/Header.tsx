import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface HeaderProps {
  name: string;
  logo: string;
}

const Header: FunctionComponent<HeaderProps> = ({
  name,
  logo,
}: HeaderProps) => {
  return (
    <Box p={2}>
      <Container maxW="container.lg">
        <HStack py={2} spacing={6} align="center" w="full">
          <Flex w="full">
            <HStack spacing={2}>
              <Image src={logo} w={8} alt="Logo"></Image>
              <Link fontWeight={600} fontSize="md" color="brand.500" href="/">
                {name}
              </Link>
            </HStack>
            <Spacer />
            <HStack spacing={4} fontWeight="medium">
              <Link href="/tools">Home</Link>
              <Link href="/tools">Features</Link>
              <Link href="/categories">Pricing</Link>
            </HStack>
            <Spacer />

            <LinkBox>
              <LinkOverlay href={`https://twitter.com/thisissukh_`} isExternal>
                <Image src="twitter.svg"></Image>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;

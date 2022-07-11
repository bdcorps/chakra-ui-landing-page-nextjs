import {
  Box,
  Container,
  Divider,
  HStack,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface FooterProps {
  name: string;
  logo: string;
}

const Footer: FunctionComponent<FooterProps> = ({
  name,
  logo,
}: FooterProps) => {
  return (
    <Box>
      <Divider />
      <Container maxW="container.xl" p={4}>
        <HStack py={2} spacing={6} align="center">
          <HStack spacing={2}>
            <Text fontWeight={600} fontSize="md">
              © 2022 {name}
            </Text>
          </HStack>
          <LinkBox>
            {/* <LinkOverlay href={`https://twitter.com/AnthonyCastrio`} isExternal>
              <Image src="twitter.svg"></Image>
            </LinkOverlay> */}
          </LinkBox>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;

import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface PricingBoxProps {
  pro: boolean;
  name: string;
}

const PricingBox: FunctionComponent<PricingBoxProps> = ({
  pro,
  name,
}: PricingBoxProps) => {
  return (
    <Box
      boxShadow="sm"
      p={6}
      rounded="lg"
      bg={pro ? "brand.400" : "white"}
      borderColor={pro ? "brand.500" : "gray.200"}
      borderWidth={2}
      color={pro ? "white" : "current"}
    >
      <VStack spacing={3} align="flex-start">
        <Text
          color={pro ? "white" : "brand.500"}
          fontWeight={600}
          casing="uppercase"
          fontSize="sm"
        >
          {name}
        </Text>
        <Box w="full">
          <Text fontSize="3xl" fontWeight="medium">
            $99
          </Text>
          <Text color={pro ? "white" : "gray.600"} fontSize="sm">
            per month per site
          </Text>
        </Box>

        <Text color={pro ? "white" : "gray.600"}>
          Unlock key features and higher usage limits
        </Text>
        <VStack>
          <Button
            size="sm"
            color={pro ? "brand.500" : "white"}
            bgColor={pro ? "white" : "brand.500"}
          >
            Free 14-day trial →
          </Button>
        </VStack>

        <VStack pt={8} spacing={4} align="flex-start">
          <Text fontWeight="medium">Everything in Basic, plus:</Text>
          <List spacing={3}>
            <ListItem>
              <HStack align="flex-start" spacing={1}>
                <ListIcon
                  as={CheckCircleIcon}
                  color={pro ? "white" : "brand.500"}
                  mt={1}
                />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </Text>
              </HStack>
            </ListItem>
          </List>
        </VStack>
      </VStack>
    </Box>
  );
};

export default PricingBox;

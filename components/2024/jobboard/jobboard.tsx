import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SponsorLogo } from "../common/sponsor_logo";

export function JobboardCard(props: {
  name: string;
  imgSrc: string;
  description: string;
  url: string;
  isPc: boolean;
  inverse?: boolean;
}) {
  return (
    <WrapItem>
      {props.isPc && (
        <HStack align={"start"}>
          <Container width="332px">
            <SponsorLogo
              url={props.url}
              logoImagePath={props.imgSrc}
              padding={8}
              size={"300px"}
              inverse={props.inverse}
              alt={props.name}
            />
          </Container>
          <Box>
            <Box>
              <Heading as="h4" size="md" pt={0} pb={2}>
                {props.name}
              </Heading>
            </Box>
            <Box>
              <Text fontSize="sm" whiteSpace="pre-wrap">
                {props.description}
              </Text>
            </Box>
            <Box mt={4}>
              <Button rightIcon={<FaExternalLinkAlt />}>
                <Link href={props.url} isExternal>
                  応募はこちらから
                </Link>
              </Button>
            </Box>
          </Box>
        </HStack>
      )}
      {!props.isPc && (
        <VStack>
          <Box>
            <Center>
              <SponsorLogo
                url={props.url}
                logoImagePath={props.imgSrc}
                padding={8}
                size={"315px"}
                inverse={props.inverse}
                alt={props.name}
              />
            </Center>
          </Box>
          <Box p={2}>
            <Center py={2}>
              <Heading as="h4" size="md" pb={2}>
                {props.name}
              </Heading>
            </Center>
            <Box>
              <Text fontSize="sm">{props.description}</Text>
            </Box>
            <Box py={2}>
              <Button width={"100%"}>
                <Link href={props.url} isExternal>
                  応募はこちらから
                  <Icon as={FaExternalLinkAlt} />
                </Link>
              </Button>
            </Box>
          </Box>
        </VStack>
      )}
    </WrapItem>
  );
}

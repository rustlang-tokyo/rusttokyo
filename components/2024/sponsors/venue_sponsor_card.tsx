import type { VenueSponsor } from "@/types/2024/types";
import { Box, Center, Heading, Link, Text } from "@chakra-ui/react";
import { SponsorLogo } from "../common/sponsor_logo";

export function VenueSponsorCard(props: {
  item: VenueSponsor;
  isPc: boolean;
}) {
  return (
    <Box>
      <Center py={4}>
        <SponsorLogo
          size={"300px"}
          url={props.item.url}
          logoImagePath={props.item.logoImagePath}
          alt={props.item.name}
          padding={8}
        />
      </Center>
      <Box maxWidth={"300px"}>
        <Center maxWidth={"300px"}>
          <Heading as="h4" size="md" pb={2}>
            <Link href={props.item.url} textDecoration="underline" isExternal>
              {props.item.name}
            </Link>
          </Heading>
        </Center>
        <Text whiteSpace="pre-wrap">{props.item.description}</Text>
      </Box>
    </Box>
  );
}

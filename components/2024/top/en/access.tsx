import { headlines } from "@/constants/2024/css/css";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

export function Access(props: { isPc: boolean }) {
  const contentFontSize = props.isPc ? "md" : "sm";

  return (
    <Container maxW="container.xl">
      <VStack>
        <Heading className={headlines} as="h2" size="2xl">
          Access
        </Heading>
        <Text fontSize={contentFontSize} textAlign="center">
          The event will be held on the 16th floor of SHIBUYA FUKURAS. On the
          day, please enter through the office entrance on the 2nd floor and
          proceed to the GMO reception on the 8th floor.
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          Bottled water will be provided at the venue, but no other food or
          drinks will be offered.
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          Re-entry to the event venue will not be permitted, so please prepare
          your lunch in advance before entering.
        </Text>
      </VStack>
    </Container>
  );
}

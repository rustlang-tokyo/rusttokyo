import { headlines } from "@/constants/2024/css/css";
import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";

export function Access(props: { isPc: boolean }) {
  const contentFontSize = props.isPc ? "md" : "sm";

  return (
    <Container maxW="container.xl">
      <VStack>
        <Heading className={headlines} as="h2" size="2xl">
          Access
        </Heading>
        <Text fontSize={contentFontSize} textAlign="center">
          The event will be held on the 16th floor of SHIBUYA FUKURAS. There
          will be no food or drinks provided at the venue on the day.
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          Additionally, re-entry to the event venue is difficult, so please make
          sure to prepare your lunch in advance before entering.
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          Bottled water will be provided at the venue, but please purchase any
          other beverages beforehand.
        </Text>
        <Heading as="h3" size="lg" mt={4}>
          Entry Instructions
        </Heading>
        <Text fontSize={contentFontSize} textAlign="center">
          Since the event will be held on a holiday, the entry procedures for
          the venue will differ from those on weekdays.
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          Please refer to{" "}
          <Link
            color={"cottonCandy.100"}
            target="_blank"
            href="https://www.gmo.jp/en/company-profile/access-map/fukuras02/"
          >
            How to enter SHIBUYA FUKURAS
          </Link>{" "}
          for detailed information.
        </Text>
      </VStack>
    </Container>
  );
}

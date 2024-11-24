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
        <Text fontSize={contentFontSize}>TODO</Text>
      </VStack>
    </Container>
  );
}

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
          渋谷フクラス 16階にて開催いたします。
          当日はオフィスエントランス(2階)より入場し、8階のGMO受付までお越しください。
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          また、会場内でペットボトルのお水の配布は予定していますが、それ以外の飲食物の提供は予定していません。
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          イベント会場への再入場ができないため、入場前にお昼ご飯の用意を各自でお願いします。
        </Text>
      </VStack>
    </Container>
  );
}

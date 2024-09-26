import { headlines } from "@/constants/2024/css/css";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

export function Location(props: { isPc: boolean }) {
  const columnHight = props.isPc ? 500 : 250;
  const contentFontSize = props.isPc ? "md" : "sm";

  return (
    <Container maxW="container.xl">
      <VStack>
        <Heading className={headlines} as="h2" size="2xl">
          Location
        </Heading>
        <Text fontSize={contentFontSize}>
          〒150-0043　東京都渋谷区道玄坂1丁目2番3号 渋谷フクラス 16階
        </Text>
        <Text fontSize={contentFontSize}>
          GMOインターネットグループ　グループ第２本社　GMO Yours・フクラス
        </Text>
        <Text fontSize={contentFontSize}>8F 受付までお越しください。</Text>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJr0GFVeuLGGAREhIcwnkAIfk&key=AIzaSyB87GSaKUDt-2vax2m6M7y-jdKXF4sOSB0&language=ja"
          allowFullScreen
          width="100%"
          height={columnHight}
          title="渋谷フクラス"
        />
      </VStack>
    </Container>
  );
}

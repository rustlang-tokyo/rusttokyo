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
          Floor 16 Shibuya FUKURAS, 1 Chome-2-3 Dogenzaka, Shibuya City, Tokyo
          150-0043, Japan
        </Text>
        <Text fontSize={contentFontSize}>
          GMO Internet Group’s second main office GMO Yours, Fukuras
        </Text>
        <Text fontSize={contentFontSize}>
          Please come to the reception desk on the 8th floor.
        </Text>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJr0GFVeuLGGAREhIcwnkAIfk&key=AIzaSyB87GSaKUDt-2vax2m6M7y-jdKXF4sOSB0&language=en"
          allowFullScreen
          width="100%"
          height={columnHight}
          title="Shibuya FUKURAS"
        />
      </VStack>
    </Container>
  );
}

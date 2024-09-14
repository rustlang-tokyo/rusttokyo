import { EnTopTextList, JaTopTextList } from "@/constants/2022/top/texts";
import { Box, Center, Container, Img, Text } from "@chakra-ui/react";

export function Eyecatch(props: {
  isPc: boolean;
  textSource: JaTopTextList | EnTopTextList;
}) {
  return (
    <Container maxW="container.xl">
      <Box>
        <Center>
          <Img
            src="/static/2022/logo/rusttokyo2022_top.png"
            alt="Rust.Tokyo 2022"
          />
        </Center>
      </Box>
      <Box>
        <Text fontSize="sm">{props.textSource.dateText}</Text>
      </Box>
    </Container>
  );
}

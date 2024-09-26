import type { EnTopTextList, JaTopTextList } from "@/constants/2021/top/texts";
import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiCalendarPlus } from "react-icons/bi";

export function Eyecatch(props: {
  isPc: boolean;
  textSource: JaTopTextList | EnTopTextList;
}) {
  const columnSize = props.isPc ? 2 : 1;
  const buttonTextAlign = props.isPc ? "left" : "center";

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={columnSize}>
        <Center>
          <Image
            src="/static/logo/rust.tokyo_logo_2021.gif"
            alt="Rust.Tokyo logo"
            boxSize="355"
            objectFit="contain"
          />
        </Center>
        <Center>
          <Stack w="100%">
            <Box py={{ base: 8 }}>
              <Image
                src="/static/logo/title_pc.gif"
                alt="Rust.Tokyo 2021"
                w="520px"
              />
              <Text fontSize="2xl">September 18th at 10:00am JST</Text>
            </Box>
            <Box textAlign={buttonTextAlign}>
              <Button
                bg="purple.100"
                color="white"
                _hover={{ bg: "#43327A" }}
                leftIcon={<BiCalendarPlus />}
              >
                <Link href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rust.Tokyo+2021&details=The+Rust+Conference+happening+online!&dates=20210918T010000Z/20210918T060000Z&ctz=Asia/Tokyo">
                  {props.textSource.addCalendarText}
                </Link>
              </Button>
            </Box>
          </Stack>
        </Center>
      </SimpleGrid>
    </Container>
  );
}

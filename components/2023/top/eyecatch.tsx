import type { EnTopTextList, JaTopTextList } from "@/constants/2023/top/texts";
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
            src="/static/2023/logo/rust.tokyo2023_top.png"
            alt="Rust.Tokyo 2023"
          />
        </Center>
      </Box>
      <Box>
        <Text fontSize="sm">{props.textSource.dateText}</Text>
      </Box>
      {/* <Box mt="20px">
        <Button leftIcon={<BiCalendarPlus />} width={275.4}>
          <Link
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rust.Tokyo+2023&details=The+Rust+Conference+happening+offline+and+online!&dates=20231021T130000/20231021T184000&ctz=Asia/Tokyo"
            isExternal
          >
            {props.textSource.addCalendarText}
          </Link>
        </Button>
      </Box>
      <Box mt="20px">
        <Button leftIcon={<RiTicket2Line />} width={275.4}>
          <Link href="https://ti.to/rust-tokyo/2023" isExternal>
            {props.textSource.purchaseTicketText}
          </Link>
        </Button>
      </Box>
      <Box mt="20px">
        <Button leftIcon={<RiTicket2Line />} width={275.4}>
          <Link href="https://rust.connpass.com/event/296283/" isExternal>
            {props.textSource.registerAttendOnline}
          </Link>
        </Button>
      </Box> */}
    </Container>
  );
}

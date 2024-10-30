import type { EnTopTextList, JaTopTextList } from "@/constants/2024/top/texts";
import { Box, Center, Container, Img, Text } from "@chakra-ui/react";
import { BiCalendarPlus } from "react-icons/bi";
import { RiTicket2Line } from "react-icons/ri";
import { LinkButton } from "./link_button";

export function Eyecatch(props: {
  isPc: boolean;
  textSource: JaTopTextList | EnTopTextList;
}) {
  return (
    <Container maxW="container.xl">
      <Box>
        <Center>
          <Img
            src="/static/2024/logo/rust.tokyo2024_top.png"
            alt="Rust.Tokyo 2024"
          />
        </Center>
      </Box>
      <Box>
        <Text fontSize="sm">{props.textSource.dateText}</Text>
      </Box>
      <Box mt="20px">
        <LinkButton
          leftIcon={<BiCalendarPlus />}
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rust.Tokyo+2024&details=The+Rust+Conference+happening+offline+and+online!&dates=20241130T110000/20241130T165000&ctz=Asia/Tokyo&location=Shibuya+FUKURAS%2C+1-ch%C5%8Dme-2-3+D%C5%8Dgenzaka%2C+Shibuya+City%2C+Tokyo+150-0043%2C+Japan"
        >
          {props.textSource.addCalendarText}
        </LinkButton>
      </Box>
      <Box mt="20px">
        <LinkButton
          href="https://ti.to/rust-tokyo/2024"
          leftIcon={<RiTicket2Line />}
        >
          {props.textSource.purchaseTicketText}
        </LinkButton>
      </Box>
      {/* <Box mt="20px">
        <Button leftIcon={<RiTicket2Line />} width={275.4}>
          <Link href="https://rust.connpass.com/event/296283/" isExternal>
            {props.textSource.registerAttendOnline}
          </Link>
        </Button>
      </Box> */}
    </Container>
  );
}

import {
  Box,
  Center,
  Container,
  Divider,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <Box bgColor="vampireBlack.100">
      <Divider border={"3px"} />
      <Center py={4}>
        <Text>Copyright &copy; Rust.Tokyo 2023 all rights reserved.</Text>
      </Center>
      <Divider />
      <Container maxW="container.xl">
        <Box py={4}>
          <Text>
            <Icon as={FaXTwitter} mr={2} />
            Follow us on X!{" "}
            <Link
              href="https://twitter.com/rustlang_tokyo"
              textDecoration="underline"
            >
              &#64;rustlang_tokyo
            </Link>
          </Text>
          <Text>
            <Icon as={AiOutlineMail} mr={2} />
            Contact us: rust-tokyo-staff&#64;googlegroups.com
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

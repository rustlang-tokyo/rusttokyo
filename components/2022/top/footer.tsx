import {
  Box,
  Center,
  Container,
  Divider,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

export function Footer() {
  return (
    <Box bgColor="vampireBlack.100">
      <Divider border={"3px"} />
      <Center py={4}>
        <Text>Copyright &copy; Rust.Tokyo 2022 all rights reserved.</Text>
      </Center>
      <Divider />
      <Container maxW="container.xl">
        <Box py={4}>
          <Text>
            <Icon as={AiOutlineInfoCircle} mr={2} />
            <Link href="/scta" textDecoration="underline">
              特定商取引法に基づく表示
            </Link>
          </Text>
          <Text>
            <Icon as={AiOutlineTwitter} mr={2} />
            Twitterもぜひフォローしてください!{" "}
            <Link
              href="https://twitter.com/rustlang_tokyo"
              textDecoration="underline"
            >
              &#64;rustlang_tokyo
            </Link>
          </Text>
          <Text>
            <Icon as={AiOutlineMail} mr={2} />
            お問い合わせ: rust-tokyo-staff&#64;googlegroups.com
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

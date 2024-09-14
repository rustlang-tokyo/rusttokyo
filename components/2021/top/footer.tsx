import { PostConferences } from "@/components/common/postconferences";
import {
  Box,
  Center,
  Container,
  Divider,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const conferences = [
  {
    url: "/2019/",
    name: "2019",
  },
];

export function Footer() {
  return (
    <Box bg="ivy.100" color="gray.50">
      <Container maxW="container.xl">
        <Center py={4}>
          <Text>Copyright &copy; Rust.Tokyo 2021 all rights reserved.</Text>
        </Center>
        <Divider />
        <HStack>
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
          <Box py={4}>
            <Text>過去の開催</Text>
            <PostConferences conferences={conferences} />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

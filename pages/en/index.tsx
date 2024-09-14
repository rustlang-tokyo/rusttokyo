import { Footer } from "@/components/common/en/footer";
import { Header } from "@/components/common/en/header";
import { Eyecatch } from "@/components/common/eyecatch";
import { headlines } from "@/constants/common/css/css";
import { topPagePath } from "@/constants/common/header/navigation";
import {
  Box,
  Center,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");
  return (
    <Box>
      <Head>
        <title>Rust.Tokyo</title>
        <meta property="og:title" content="Rust.Tokyo" />
      </Head>
      <Header isPc={isPc} currentPage={topPagePath} />
      <Box bg="vampireBlack.100" py={{ base: 12 }}>
        <Box>
          <Eyecatch />
        </Box>
      </Box>
      <Box bg="vampireBlack.100">
        <Center>
          <Heading
            className={headlines}
            as="h2"
            size="2xl"
            color="cottonCandy.100"
            py={{ base: 4 }}
          >
            What&#39;s Rust.Tokyo?
          </Heading>
        </Center>
        <Center>
          <Text py={{ base: 4 }} color="white">
            Rust.Tokyo is a conference for Rustaceans.
          </Text>
        </Center>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 4 }}>
        <Center>
          <Heading
            className={headlines}
            as="h2"
            size="2xl"
            color="cottonCandy.100"
            py={{ base: 4 }}
          >
            Upcoming event
          </Heading>
        </Center>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 8 }}>
        <Center>
          <VStack>
            <Box>
              <ChakraLink href="/2023/en">
                <Text fontSize="4xl" py={{ base: 4 }} color="white">
                  2023
                </Text>
              </ChakraLink>
            </Box>
          </VStack>
        </Center>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 4 }}>
        <Center>
          <Heading
            className={headlines}
            as="h2"
            size="2xl"
            color="cottonCandy.100"
            py={{ base: 4 }}
          >
            Past events
          </Heading>
        </Center>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 8 }}>
        <Center>
          <VStack>
            <Box>
              <ChakraLink href="/2022/en">
                <Text fontSize="4xl" py={{ base: 4 }} color="white">
                  2022
                </Text>
              </ChakraLink>
            </Box>
            <Box>
              <ChakraLink href="/2021/en">
                <Text fontSize="4xl" py={{ base: 4 }} color="white">
                  2021
                </Text>
              </ChakraLink>
            </Box>
            <Box>
              <ChakraLink href="/2019/en">
                <Text fontSize="4xl" py={{ base: 4 }} color="white">
                  2019
                </Text>
              </ChakraLink>
            </Box>
          </VStack>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}

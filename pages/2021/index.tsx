import { Meta } from "@/components/2021/common/meta";
import { SponsorList } from "@/components/2021/sponsors/sponsor_list";
import { Eyecatch } from "@/components/2021/top/eyecatch";
import { Footer } from "@/components/2021/top/footer";
import { Header } from "@/components/2021/top/header";
import { Organizers } from "@/components/2021/top/organizers";
import { headlines } from "@/constants/2021/css/css";
import { topPagePath } from "@/constants/2021/header/navigation";
import {
  goldSponsors,
  silverSponsors,
} from "@/constants/2021/sponsors/sponsors";
import { topI18nTexts } from "@/constants/2021/top/texts";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta />
      <Header isPc={isPc} currentPage={topPagePath} />
      <Box bg="ivory.100" py={{ base: 12 }}>
        <Eyecatch isPc={isPc} textSource={topI18nTexts.ja} />
      </Box>
      <Box py={{ base: 12 }}>
        <Container maxW="container.xl">
          <Center>
            <VStack>
              <Heading
                className={headlines}
                as="h2"
                size="2xl"
                color="coral.100"
                py={{ base: 4 }}
              >
                TICKET
              </Heading>
              <Box pt={{ base: 8 }}>
                <VStack>Rust.Tokyo は終了しました。</VStack>
              </Box>
            </VStack>
          </Center>
        </Container>
      </Box>
      <Box bg="ivory.100" py={{ base: 12 }}>
        <Container maxW="container.xl">
          <Center>
            <VStack spacing={12}>
              <Heading
                className={headlines}
                as="h2"
                size="2xl"
                color="coral.100"
                py={{ base: 4 }}
              >
                SPONSORS
              </Heading>

              <SponsorList
                goldSponsors={goldSponsors.ja}
                silverSponsors={silverSponsors.ja}
                isPc={isPc}
                textSource={topI18nTexts.ja}
              />
            </VStack>
          </Center>
        </Container>
      </Box>
      <Box py={{ base: 12 }}>
        <Organizers isPc={isPc} />
      </Box>
      <Footer />
    </>
  );
}

import { Meta } from "@/components/2021/common/meta";
import { SponsorList } from "@/components/2021/sponsors/sponsor_list";
import { Footer } from "@/components/2021/top/en/footer";
import { Header } from "@/components/2021/top/en/header";
import { headlines } from "@/constants/2021/css/css";
import { sponsorPagePath } from "@/constants/2021/header/navigation";
import {
  goldSponsors,
  silverSponsors,
} from "@/constants/2021/sponsors/sponsors";
import { sponsors } from "@/constants/2021/title/pagetitle";
import { topI18nTexts } from "@/constants/2021/top/texts";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={sponsors.en} />
      <Header isPc={isPc} currentPage={sponsorPagePath} />
      <Box bg="ivory.100" py={{ base: 12 }}>
        <Container maxW="container.xl">
          <Center>
            <Heading
              className={headlines}
              as="h2"
              size="2xl"
              color="coral.100"
              py={{ base: 4 }}
            >
              SPONSORS
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box py={{ base: 8 }}>
        <Container maxW="container.xl" pb={12}>
          <Center>
            <VStack spacing={12}>
              <SponsorList
                goldSponsors={goldSponsors.en}
                silverSponsors={silverSponsors.en}
                isPc={isPc}
                textSource={topI18nTexts.en}
              />
            </VStack>
          </Center>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

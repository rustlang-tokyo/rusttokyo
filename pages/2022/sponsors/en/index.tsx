import { Meta } from "@/components/2022/common/meta";
import { SponsorList } from "@/components/2022/sponsors/sponsor_list";
import { Footer } from "@/components/2022/top/en/footer";
import { Header } from "@/components/2022/top/en/header";
import { headlines } from "@/constants/2022/css/css";
import { sponsorPagePath } from "@/constants/2022/header/navigation";
import {
  bronzeSponsors,
  goldSponsors,
  silverSponsors,
} from "@/constants/2022/sponsors/sponsors";
import { sponsors } from "@/constants/2022/title/pagetitle";
import { topI18nTexts } from "@/constants/2022/top/texts";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

// NOTE(tkat0): Copied from 2022/sponsors/index.tsx and only replaced ".ja" with ".en".
export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={sponsors.en} />
      <Header isPc={isPc} currentPage={sponsorPagePath} />
      <Box bg="vampireBlack.100" pt={16}>
        <Container maxW="container.xl">
          <Center>
            <Heading className={headlines} as="h2" size="2xl">
              SPONSORS
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 4 }}>
        <Container maxW="container.xl" pb={12}>
          <Center>
            <VStack spacing={12}>
              <SponsorList
                goldSponsors={goldSponsors.en}
                silverSponsors={silverSponsors.en}
                bronzeSponsors={bronzeSponsors.en}
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

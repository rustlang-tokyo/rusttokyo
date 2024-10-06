import { Meta } from "@/components/2024/common/meta";
import { SponsorList } from "@/components/2024/sponsors/sponsor_list";
import { Footer } from "@/components/2024/top/footer";
import { Header } from "@/components/2024/top/header";
import { headlines } from "@/constants/2024/css/css";
import { sponsorPagePath } from "@/constants/2024/header/navigation";
import {
  bronzeSponsors,
  goldSponsors,
  silverSponsors,
} from "@/constants/2024/sponsors/sponsors";
import { sponsors } from "@/constants/2024/title/pagetitle";
import { topI18nTexts } from "@/constants/2024/top/texts";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={sponsors.ja} />
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
                goldSponsors={goldSponsors.ja}
                silverSponsors={silverSponsors.ja}
                bronzeSponsors={bronzeSponsors.ja}
                isPc={isPc}
                textSource={topI18nTexts.ja}
              />
            </VStack>
          </Center>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

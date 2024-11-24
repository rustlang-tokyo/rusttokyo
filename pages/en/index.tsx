import { Meta } from "@/components/2024/common/meta";
import { SponsorList } from "@/components/2024/sponsors/sponsor_list";
import { Eyecatch } from "@/components/2024/top/en/eyecatch";
import { Footer } from "@/components/2024/top/en/footer";
import { Header } from "@/components/2024/top/en/header";
import { Location } from "@/components/2024/top/en/location";
import { Organizers } from "@/components/2024/top/organizers";
import { Staff } from "@/components/2024/top/staff";
import { headlines } from "@/constants/2024/css/css";
import { topPagePath } from "@/constants/2024/header/navigation";
import {
  bronzeSponsors,
  goldSponsors,
  silverSponsors,
  venueSponsors,
} from "@/constants/2024/sponsors/sponsors";
import { topI18nTexts } from "@/constants/2024/top/texts";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta />
      <Header isPc={isPc} currentPage={topPagePath} />
      <Box
        textAlign="center"
        pt="20px"
        pb="10px"
        bgColor="vampireBlack.100"
        minHeight="100%"
      >
        <Eyecatch isPc={isPc} textSource={topI18nTexts.en} />
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 12 }}>
        <Container maxW="container.xl">
          <Center>
            <VStack spacing={4}>
              <Heading className={headlines} as="h2" size="2xl">
                SPONSORS
              </Heading>

              <SponsorList
                goldSponsors={goldSponsors.en}
                silverSponsors={silverSponsors.en}
                bronzeSponsors={bronzeSponsors.en}
                venueSponsors={venueSponsors.en}
                isPc={isPc}
                textSource={topI18nTexts.en}
              />
            </VStack>
          </Center>
        </Container>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>
        <Location isPc={isPc} />
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>
        <Organizers isPc={isPc} />
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>
        <Staff isPc={isPc} />
      </Box>
      <Footer />
    </>
  );
}

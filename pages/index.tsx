import { Meta } from "@/components/2024/common/meta";
import { Eyecatch } from "@/components/2024/top/eyecatch";
import { Footer } from "@/components/2024/top/footer";
import { Header } from "@/components/2024/top/header";
import { Location } from "@/components/2024/top/location";
import { Organizers } from "@/components/2024/top/organizers";
import { topPagePath } from "@/constants/2024/header/navigation";
import { topI18nTexts } from "@/constants/2024/top/texts";
import { Box } from "@chakra-ui/react";
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
        <Eyecatch isPc={isPc} textSource={topI18nTexts.ja} />
      </Box>
      {/*<Box bg="vampireBlack.100" py={{ base: 12 }}>*/}
      {/*  <Container maxW="container.xl">*/}
      {/*    <Center>*/}
      {/*      <VStack spacing={4}>*/}
      {/*        <Heading className={headlines} as="h2" size="2xl">*/}
      {/*          SPONSORS*/}
      {/*        </Heading>*/}

      {/*        <SponsorList*/}
      {/*          goldSponsors={goldSponsors.ja}*/}
      {/*          silverSponsors={silverSponsors.ja}*/}
      {/*          bronzeSponsors={bronzeSponsors.ja}*/}
      {/*          isPc={isPc}*/}
      {/*          textSource={topI18nTexts.ja}*/}
      {/*        />*/}
      {/*      </VStack>*/}
      {/*    </Center>*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      <Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>
        <Location isPc={isPc} />
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>
        <Organizers isPc={isPc} />
      </Box>
      {/*<Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>*/}
      {/*  <Staff isPc={isPc} />*/}
      {/*</Box>*/}
      <Footer />
    </>
  );
}

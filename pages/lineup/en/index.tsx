import { Meta } from "@/components/2024/common/meta";
import { SessionList } from "@/components/2024/lineup/session_list";
import { Footer } from "@/components/2024/top/en/footer";
import { Header } from "@/components/2024/top/en/header";
import { headlines } from "@/constants/2024/css/css";
import { lineupPagePath } from "@/constants/2024/header/navigation";
import { selectedSessions } from "@/constants/2024/lineup/en/session_selections";
import { sessionListPageTextsEn } from "@/constants/2024/lineup/text";
import { lineup } from "@/constants/2024/title/pagetitle";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={lineup.ja} />
      <Header isPc={isPc} currentPage={lineupPagePath} />
      <Box bg="vampireBlack.100" pt={16} pb={8}>
        <Container maxW="container.xl">
          <Center>
            <Heading className={headlines} as="h2" size="2xl">
              LINEUP & SCHEDULE
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box bg="vampireBlack.100" pb={24}>
        <Container maxW="container.xl">
          <VStack>
            <Box maxW="container.lg">
              <SessionList
                isPc={isPc}
                textSource={sessionListPageTextsEn}
                sessions={selectedSessions}
              />
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

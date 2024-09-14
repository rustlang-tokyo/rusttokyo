import { Meta } from "@/components/2022/common/meta";
import { SessionList } from "@/components/2022/lineup/session_list";
import { Footer } from "@/components/2022/top/footer";
import { Header } from "@/components/2022/top/header";
import { headlines } from "@/constants/2022/css/css";
import { lineupPagePath } from "@/constants/2022/header/navigation";
import { selectedSessions } from "@/constants/2022/lineup/session_selections";
import { sessionListPageTextsJa } from "@/constants/2022/lineup/text";
import { lineup } from "@/constants/2022/title/pagetitle";
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
                textSource={sessionListPageTextsJa}
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

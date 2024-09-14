import { Meta } from "@/components/2022/common/meta";
import { JobboardCard } from "@/components/2022/jobboard/jobboard";
import { Footer } from "@/components/2022/top/footer";
import { Header } from "@/components/2022/top/header";
import { headlines } from "@/constants/2022/css/css";
import { jobboardPagePath } from "@/constants/2022/header/navigation";
import { sponsors } from "@/constants/2022/jobboard/jobboard";
import { jobboard } from "@/constants/2022/title/pagetitle";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={jobboard.ja} />
      <Header isPc={isPc} currentPage={jobboardPagePath} />
      <Box bg="vampireBlack.100" pt={16}>
        <Container maxW="container.xl">
          <Center>
            <Heading className={headlines} as="h2" size="2xl">
              JOBBOARD
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box backgroundColor="vampireBlack.100" p={8} pb={24}>
        <VStack>
          {sponsors.ja.map((s) => (
            <Container maxW="container.xl" key={s.name}>
              <Box pb={8} pl={2}>
                <JobboardCard
                  name={s.name}
                  imgSrc={s.imgSrc}
                  description={s.description}
                  url={s.url}
                  isPc={isPc}
                />
              </Box>
            </Container>
          ))}
        </VStack>
      </Box>
      <Footer />
    </>
  );
}

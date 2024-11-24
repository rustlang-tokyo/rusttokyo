import { Meta } from "@/components/2024/common/meta";
import { Access } from "@/components/2024/top/en/access";
import { Location } from "@/components/2024/top/en/location";
import { Footer } from "@/components/2024/top/footer";
import { Header } from "@/components/2024/top/header";
import { accessPagePath } from "@/constants/2024/header/navigation";
import { access } from "@/constants/2024/title/pagetitle";
import { Box, Center, Container, VStack } from "@chakra-ui/react";
import useMedia from "use-media";

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={access.en} />
      <Header isPc={isPc} currentPage={accessPagePath} />
      <Box bg="vampireBlack.100" py={{ base: 4 }}>
        <Container maxW="container.xl" pb={12}>
          <Center>
            <VStack spacing={12}>
              <Access isPc={isPc} />
              <Location isPc={isPc} />
            </VStack>
          </Center>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

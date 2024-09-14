import { Meta } from "@/components/2023/common/meta";
import { SessionDescription } from "@/components/2023/lineup/session_description";
import { Header } from "@/components/2023/top/en/header";
import { Footer } from "@/components/2023/top/footer";
import { headlines } from "@/constants/2023/css/css";
import { descriptionPagePath } from "@/constants/2023/header/navigation";
import { SelectedSession } from "@/constants/2023/lineup/context";
import { selectedSessions } from "@/constants/2023/lineup/en/session_selections";
import { LineupDatabaseEn } from "@/constants/2023/lineup/session_description";
import { sessionListPageTextsEn } from "@/constants/2023/lineup/text";
import { sessionDescprition } from "@/constants/2023/title/pagetitle";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import useMedia from "use-media";

export const getStaticPaths: GetStaticPaths = async () => {
  const sessions = selectedSessions;
  const paths = sessions
    .filter((s) => s.renderDesc)
    .map((session: SelectedSession) => {
      return {
        params: {
          sessionId: String(session.id),
        },
      };
    });
  // expects [ { params: 1 }, ..., { params: 10 } ]
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.sessionId);
  const session = selectedSessions.find((s) => s.id === id);
  return {
    props: {
      session,
    },
  };
};

export default function index(props: { session: SelectedSession }) {
  const [desc, setDesc] = useState<{
    id: number;
    component: () => JSX.Element;
  }>();
  const isPc = useMedia("(min-width: 520px)");

  useEffect(() => {
    const desc = LineupDatabaseEn.find(
      (lineup) => lineup.id === props.session.id,
    );
    setDesc(desc);
  }, [props.session.id]);

  return (
    <>
      {props.session ? (
        <Meta
          pageTitle={
            sessionDescprition(
              props.session.title,
              props.session.speaker[0].name,
            ).en
          }
        />
      ) : (
        <Meta pageTitle="Page Not Found" />
      )}
      <Header
        isPc={isPc}
        currentPage={descriptionPagePath(Number(props.session.id))}
      />
      <Box bg="vampireBlack.100" pt={16}>
        <Container maxW="container.xl">
          <Center>
            <Heading className={headlines} as="h2" size="2xl">
              LINEUP & SCHEDULE
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 12 }} pb={24}>
        <Container maxW="container.lg">
          <Box>
            {props.session && (
              <SessionDescription
                isPc={isPc}
                session={props.session}
                textSource={sessionListPageTextsEn}
                sessionDescription={desc}
              />
            )}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

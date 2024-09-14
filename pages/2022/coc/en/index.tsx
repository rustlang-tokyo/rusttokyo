import { Meta } from "@/components/2022/common/meta";
import { Footer } from "@/components/2022/top/en/footer";
import { Header } from "@/components/2022/top/en/header";
import { headlines } from "@/constants/2022/css/css";
import { cocPagePath } from "@/constants/2022/header/navigation";
import { codeOfConduct } from "@/constants/2022/title/pagetitle";
import { Box, Center, Container, Heading, Link, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import useMedia from "use-media";

export function Subtitle(props: { text: string }) {
  return (
    <Center>
      <Heading color="white" as="h3" size="md" pt={8} pb={4}>
        {props.text}
      </Heading>
    </Center>
  );
}

export function P(props: { children: ReactElement }) {
  return <Box pb={4}>{props.children}</Box>;
}

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={codeOfConduct.en} />
      <Header isPc={isPc} currentPage={cocPagePath} />
      <Box bg="vampireBlack.100" pt={16}>
        <Container maxW="container.xl">
          <Center>
            <Heading className={headlines} as="h2" size="2xl">
              CODE OF CONDUCT
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box bg="vampireBlack.100">
        <Container maxW="container.md">
          <Subtitle text="Conference Code of Conduct" />
          <Box>
            <Text color="white">
              All attendees, speakers, sponsors and volunteers at our conference
              are required to agree with the following code of conduct.
              Organisers will enforce this code throughout the event. We are
              expecting cooperation from all participants to help ensuring a
              safe environment for everybody.
            </Text>
          </Box>

          <Subtitle text="Need Help?" />
          <Box>
            <Text color="white">
              You have our contact details in the emails we{"'"}ve sent.
            </Text>
            <Text color="white">Mail: rust-tokyo-staff@googlegroups.com</Text>
          </Box>

          <Subtitle text="The Quick Version" />
          <Box>
            <Text color="white">
              Our conference is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices. We do not tolerate harassment of
              conference participants in any form. Sexual language and imagery
              is not appropriate for any conference venue, including talks,
              workshops, parties, Twitter and other online media. Conference
              participants violating these rules may be sanctioned or expelled
              from the conference without a refund at the discretion of the
              conference organisers.
            </Text>
          </Box>

          <Subtitle text="The Less Quick Version" />
          <Box pb={24}>
            <P>
              <Text color="white">
                Harassment includes offensive verbal comments related to gender,
                gender identity and expression, age, sexual orientation,
                disability, physical appearance, body size, race, ethnicity,
                religion, technology choices, sexual images in public spaces,
                deliberate intimidation, stalking, following, harassing
                photography or recording, sustained disruption of talks or other
                events, inappropriate physical contact, and unwelcome sexual
                attention.
              </Text>
            </P>
            <P>
              <Text color="white">
                Participants asked to stop any harassing behavior are expected
                to comply immediately.
              </Text>
            </P>
            <P>
              <Text color="white">
                Sponsors are also subject to the anti-harassment policy. In
                particular, sponsors should not use sexualized images,
                activities, or other material. Booth staff (including
                volunteers) should not use sexualized
                clothing/uniforms/costumes, or otherwise create a sexualized
                environment.
              </Text>
            </P>
            <P>
              <Text color="white">
                If a participant engages in harassing behavior, the conference
                organisers may take any action they deem appropriate, including
                warning the offender or expulsion from the conference with no
                refund.
              </Text>
            </P>
            <P>
              <Text color="white">
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact a member of
                conference staff immediately. Conference staff can be identified
                as they{"'"}ll be wearing branded t-shirts.
              </Text>
            </P>
            <P>
              <Text color="white">
                Conference staff will be happy to help participants contact
                hotel/venue security or local law enforcement, provide escorts,
                or otherwise assist those experiencing harassment to feel safe
                for the duration of the conference. We value your attendance.
              </Text>
            </P>
            <P>
              <Text color="white">
                We expect participants to follow these rules at conference and
                workshop venues and conference-related social events.
              </Text>
            </P>
            <P>
              <Text color="white">
                Original source and credit:{" "}
                <a href="http://2012.jsconf.us/#/about">
                  http://2012.jsconf.us/#/about
                </a>{" "}
                &{" "}
                <a href="https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy">
                  The Ada Initiative
                </a>
              </Text>
            </P>
            <P>
              <Text color="white">
                Please help by translating or improving:{" "}
                <Link href="https://github.com/confcodeofconduct/confcodeofconduct.com">
                  on github.com
                </Link>
              </Text>
            </P>
            <P>
              <Text color="white">
                This work is licensed under a{" "}
                <a href="https://creativecommons.org/licenses/by/3.0/deed.en_US">
                  Creative Commons Attribution 3.0 Unported License
                </a>
              </Text>
            </P>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

import { headlines } from "@/constants/2021/css/css";
import type { SelectedSession } from "@/constants/2021/lineup/context";
import type { SpeakerInfo } from "@/constants/2021/lineup/speaker";
import type { SessionListPageTexts } from "@/constants/2021/lineup/text";
import {
  Badge,
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FaClock, FaGithub, FaTwitter } from "react-icons/fa";
import { TwitterIcon, TwitterShareButton } from "react-share";
import { PresentationMaterials } from "./materials";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
export function SessionDescription(props: {
  isPc: boolean;
  textSource: SessionListPageTexts;
  session: SelectedSession;
  sessionDescription?: { id: number; component: () => JSX.Element };
}) {
  const sessionDescription = props.sessionDescription;

  const speakerColumnSize =
    props.session.speaker.length !== 1 && props.isPc ? 2 : 1;

  const containerPad = props.isPc ? 8 : 6;

  const descFontSize = props.isPc ? "md" : "sm";

  const headlineFontSize = props.isPc ? "lg" : "md";

  return (
    <Box
      borderWidth={1}
      backgroundColor="white"
      rounded="md"
      p={containerPad}
      mb={2}
    >
      <Box pb={8}>
        <Heading size={headlineFontSize}>{props.session.title}</Heading>
        <Wrap pt={2} spacing={props.isPc ? 3 : 1}>
          <WrapItem>
            <HStack>
              <Icon as={FaClock} />
              <Text fontSize="sm">
                {props.session.startFrom} - {props.session.endAt} (JST)
              </Text>
            </HStack>
          </WrapItem>
          <WrapItem>
            <Wrap>
              <WrapItem>
                <Badge variant="solid" colorScheme="purple">
                  {props.textSource.sessionLanguage}:{" "}
                  {props.session.sessionLanguage}
                </Badge>
              </WrapItem>
              <WrapItem>
                {props.session.captionLanguage && (
                  <Badge variant="solid" colorScheme="purple">
                    {props.textSource.captionLanguage}:{" "}
                    {props.session.captionLanguage}
                  </Badge>
                )}
              </WrapItem>
            </Wrap>
          </WrapItem>
        </Wrap>
      </Box>

      <Box pb={8} fontSize={descFontSize}>
        {sessionDescription?.component()}
      </Box>

      <Box pb={8} fontSize={descFontSize}>
        <PresentationMaterials session={props.session} />
      </Box>

      <Box pb={8}>
        <Center>
          <ReactPlayer url={props.session.youtube?.url} />
        </Center>
      </Box>

      <VStack pb={8}>
        <Heading as={"h3"} fontSize="md">
          {props.textSource.snsSharing}
        </Heading>
        {/* translate はよくわからんけど必須フィールドになっている。。。 */}
        <TwitterShareButton
          title={`${props.session.title} by ${props.session.speaker[0].name} | Rust Tokyo 2021`}
          url={`https://rust.tokyo${props.session.pagePath}`}
          translate={undefined}
        >
          {/* path, crossOrigin はよくわからんけど必須フィールドになっている。。。 */}
          <TwitterIcon
            size={32}
            round
            path={undefined}
            crossOrigin={undefined}
          />
        </TwitterShareButton>
      </VStack>

      <Divider />

      <VStack pt={8}>
        <Heading size="md" className={headlines} pb={{ base: 4 }}>
          {props.textSource.speakerProfile}
        </Heading>

        <SimpleGrid columns={speakerColumnSize} spacing={10}>
          {props.session.speaker.map((speaker: SpeakerInfo) => {
            return (
              <Box key={speaker.name} pt={4}>
                <VStack spacing={4}>
                  <VStack spacing={2}>
                    <Image
                      src={speaker.avatarSrc}
                      borderRadius="full"
                      boxSize="160px"
                      alt={speaker.name}
                    />
                    <Text fontSize="lg" fontWeight="500" color="coral.100">
                      {speaker.name}
                    </Text>
                    <Box>
                      <Wrap>
                        <WrapItem>
                          <Link
                            href={`https://twitter.com/${speaker.twitterAccount}`}
                            fontSize="sm"
                            isExternal
                          >
                            <Icon as={FaTwitter} /> {speaker.twitterAccount}
                          </Link>
                        </WrapItem>
                        <WrapItem>
                          {speaker.githubAccount && (
                            <Link
                              href={`https://github.com/${speaker.githubAccount}`}
                              fontSize="sm"
                              isExternal
                            >
                              <Icon as={FaGithub} /> {speaker.githubAccount}
                            </Link>
                          )}
                        </WrapItem>
                      </Wrap>
                    </Box>
                  </VStack>
                  <Center maxW="md" fontSize="sm">
                    {speaker.profile}
                  </Center>
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

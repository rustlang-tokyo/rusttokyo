import type { SelectedSession } from "@/constants/2024/lineup/context";
import type { SpeakerDescription } from "@/constants/2024/lineup/speaker";
import type { SessionListPageTexts } from "@/constants/2024/lineup/text";
import * as track from "@/constants/2024/lineup/track";
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
import { FaClock, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { SiQiita } from "react-icons/si";
import ReactPlayer from "react-player";
import { TwitterShareButton } from "react-share";
import { PresentationMaterials } from "./materials";

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
      borderWidth={track.borderWidth(props.session.track)}
      borderColor={track.borderColor(props.session.track)}
      p={containerPad}
      mb={2}
    >
      <Box pb={8}>
        <Heading size={headlineFontSize}>{props.session.title}</Heading>
        <Wrap pt={2} spacing={props.isPc ? 3 : 1}>
          <WrapItem>
            <HStack color={track.color(props.session.track)}>
              <Icon as={MdPlace} />
              <Text fontSize="sm">
                {props.textSource.track} {props.session.track}
              </Text>
            </HStack>
          </WrapItem>
          <WrapItem>
            <HStack>
              <Icon as={FaClock} color={"white"} />
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

      {props.session.presentationSlide && (
        <Box pb={8} fontSize={descFontSize}>
          <PresentationMaterials session={props.session} />
        </Box>
      )}

      {props.session.youtube && (
        <Box pb={8}>
          <Center>
            <ReactPlayer url={props.session.youtube?.url} controls pip />
          </Center>
        </Box>
      )}

      <VStack pb={8}>
        <Heading as={"h3"} fontSize="md">
          {props.textSource.snsSharing}
        </Heading>
        {/* translate はよくわからんけど必須フィールドになっている。。。 */}
        <TwitterShareButton
          title={`${props.session.title} by ${props.session.speaker.at(0)?.name ?? ""} | Rust Tokyo 2024`}
          url={`https://rust.tokyo${props.session.pagePath}`}
          translate={undefined}
        >
          <FaXTwitter size={32} />
        </TwitterShareButton>
      </VStack>

      <Divider borderColor={"white"} />

      <VStack pt={8}>
        <Heading size="md" pb={{ base: 2 }}>
          {props.textSource.speakerProfile}
        </Heading>

        <SimpleGrid columns={speakerColumnSize} spacing={10}>
          {props.session.speaker.map((speaker: SpeakerDescription) => {
            return (
              <Box key={speaker.name} pt={4}>
                <VStack spacing={4}>
                  <VStack spacing={2}>
                    <Box
                      bgColor="white"
                      boxSize="120px"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Image
                        src={speaker.avatarSrc}
                        objectFit={speaker.objectFit ?? "cover"}
                        width="100%"
                        height="100%"
                        alt={speaker.name}
                      />
                    </Box>
                    <Text fontSize="lg" fontWeight="500">
                      {speaker.kind === "applied"
                        ? speaker.name
                        : `${speaker.name} (${speaker.company})`}
                    </Text>
                    <Box>
                      <Wrap>
                        <WrapItem>
                          {speaker.twitterAccount && (
                            <Link
                              href={`https://twitter.com/${speaker.twitterAccount}`}
                              fontSize="sm"
                              isExternal
                            >
                              <Icon as={FaXTwitter} /> @{speaker.twitterAccount}
                            </Link>
                          )}
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
                        <WrapItem>
                          {speaker.qiitaAccount && (
                            <Link
                              href={`https://qiita.com/${speaker.qiitaAccount}`}
                              fontSize="sm"
                              isExternal
                            >
                              <Icon as={SiQiita} /> @{speaker.qiitaAccount}
                            </Link>
                          )}
                        </WrapItem>
                      </Wrap>
                    </Box>
                  </VStack>
                  <Center maxW="md" fontSize="sm">
                    <Text>{speaker.profile}</Text>
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

import type { SelectedSession } from "@/constants/2022/lineup/context";
import type { SpeakerInfo } from "@/constants/2022/lineup/speaker";
import type { SessionListPageTexts } from "@/constants/2022/lineup/text";
import {
  Avatar,
  Badge,
  Box,
  HStack,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaAngleRight, FaClock } from "react-icons/fa";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { PresentationMaterials } from "./materials";

function SessionCard(props: {
  textSource: SessionListPageTexts;
  session: SelectedSession;
}) {
  return (
    <>
      <Box borderWidth={1} p={8} mb={8}>
        <Box pb={2}>
          <Wrap>
            {props.session.speaker.map((speaker: SpeakerInfo) => (
              <WrapItem key={speaker.name}>
                <HStack>
                  <Avatar
                    name={speaker.name}
                    src={speaker.avatarSrc}
                    size="sm"
                    bg="white"
                  />
                  <Text fontSize="sm">{speaker.name}</Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box pb={4}>
          <Heading size="md">
            {props.session.pagePath ? (
              <Link href={props.session.pagePath}>{props.session.title}</Link>
            ) : (
              <span>{props.session.title}</span>
            )}
          </Heading>
          <HStack pt={2}>
            <Icon as={FaClock} color={"white"} />
            <Text fontSize="sm">
              {props.session.startFrom}-{props.session.endAt} (JST)
            </Text>
          </HStack>
        </Box>

        <Box pb={6}>
          {props.session.elevatorPitch.split("\n").map((s, i) => (
            <Text pb={2} key={`${props.session.title}-${i}`}>
              {s}
            </Text>
          ))}
          <HStack spacing={1}>
            {props.session.pagePath && (
              <>
                <Icon as={FaAngleRight} color={"cottonCandy.100"} />
                <Link href={props.session.pagePath} color={"cottonCandy.100"}>
                  {props.textSource.seeMoreDetail}
                </Link>
              </>
            )}
          </HStack>
        </Box>

        {/* presentation, video links */}
        <PresentationMaterials session={props.session} />

        <Stack direction="row">
          {props.session.sessionLanguage && (
            // TODO(tkat0): color scheme
            <Badge variant="solid" colorScheme="purple">
              <HStack>
                <Icon as={HiOutlinePresentationChartBar} />
                <Text cursor="help">
                  <Tooltip label={props.textSource.sessionLanguage}>
                    {props.session.sessionLanguage}
                  </Tooltip>
                </Text>
              </HStack>
            </Badge>
          )}
          {/* TODO(tkat0): enable this after caption is available */}
          {/* {props.session.captionLanguage && (
            <Badge variant="solid" colorScheme="purple">
              <HStack>
                <Icon as={BiCaptions} />
                <Text cursor="help">
                  <Tooltip label={props.textSource.captionLanguage}>
                    {props.session.captionLanguage}
                  </Tooltip>
                </Text>
              </HStack>
            </Badge>
          )} */}
          <Badge variant="solid" colorScheme="yellow">
            <Text cursor="help">{props.session.sessionType}</Text>
          </Badge>
        </Stack>
      </Box>
    </>
  );
}

export function SessionList(props: {
  textSource: SessionListPageTexts;
  sessions: SelectedSession[];
}) {
  return (
    <>
      {props.sessions
        .sort((a, b) => a.order - b.order)
        .map((session: SelectedSession) => (
          <SessionCard
            key={session.id}
            textSource={props.textSource}
            session={session}
          />
        ))}
    </>
  );
}

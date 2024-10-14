import type { SelectedSession } from "@/constants/2024/lineup/context";
import type { SpeakerInfo } from "@/constants/2024/lineup/speaker";
import type { SessionListPageTexts } from "@/constants/2024/lineup/text";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  GridItem,
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
import { MdPlace } from "react-icons/md";
import { PresentationMaterials } from "./materials";
import styles from "./style.module.css";

function SessionCard(props: {
  textSource: SessionListPageTexts;
  session: SelectedSession;
}) {
  return (
    <GridItem area={props.session.area} borderWidth={1} p={8}>
      <Box pb={2}>
        <Wrap>
          {props.session.speaker.map((speaker: SpeakerInfo) => (
            <WrapItem key={speaker.name}>
              <HStack>
                <Avatar
                  // NOTE: workaround when image aspect ratio is not 1.
                  className={speaker?.padding ? styles.img : undefined}
                  name={speaker.name}
                  src={speaker.avatarSrc}
                  size="sm"
                  bg="white"
                  padding={speaker.padding || 0}
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
        <HStack pt={2}>
          <Icon as={MdPlace} color={"white"} size="md" />
          <Text fontSize="sm">
            {props.textSource.track} {props.session.track}
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
        <Badge variant="solid" colorScheme="green">
          <HStack>
            <Icon as={MdPlace} color={"white"} size="md" />
            <Text cursor="help">
              {props.textSource.track} {props.session.track}
            </Text>
          </HStack>
        </Badge>
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
    </GridItem>
  );
}

export function SessionList(props: {
  isPc: boolean;
  textSource: SessionListPageTexts;
  sessions: SelectedSession[];
}) {
  return props.isPc ? (
    <Grid
      gridTemplateColumns="[A] 1fr [B] 1fr"
      gridTemplateRows="[1] auto [2] auto [3] auto [4] auto [5] auto [6] auto [7] auto [8] auto [9] auto [10] auto"
      gap={8}
    >
      {props.sessions
        .sort((a, b) => a.order - b.order)
        .map((session: SelectedSession) => (
          <SessionCard
            key={session.id}
            textSource={props.textSource}
            session={session}
          />
        ))}
    </Grid>
  ) : (
    <>
      {props.sessions
        .sort((a, b) => a.order - b.order)
        .map((session: SelectedSession) => (
          <Box key={session.id} mb={8}>
            <SessionCard textSource={props.textSource} session={session} />
          </Box>
        ))}
    </>
  );
}

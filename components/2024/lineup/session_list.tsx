import { trackHeadlinesA, trackHeadlinesB } from "@/constants/2024/css/css";
import type { SelectedSession } from "@/constants/2024/lineup/context";
import type { SpeakerInfo } from "@/constants/2024/lineup/speaker";
import type { SessionListPageTexts } from "@/constants/2024/lineup/text";
import * as track from "@/constants/2024/lineup/track";
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
  isPc: boolean;
}) {
  return (
    <GridItem
      area={props.session.area}
      borderWidth={track.borderWidth(props.session.track)}
      borderColor={track.borderColor(props.session.track)}
      p={8}
    >
      <Box pb={2}>
        <Wrap>
          {props.session.speaker.map((speaker: SpeakerInfo) => (
            <WrapItem key={speaker.name}>
              <HStack>
                {speaker.objectFit != null ? (
                  <Avatar
                    // NOTE: workaround when image aspect ratio is not 1.
                    className={speaker?.padding ? styles.img : undefined}
                    size="sm"
                    name={speaker.name}
                    bgImage={speaker.avatarSrc}
                    bgPosition="center"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgColor="white"
                    padding={speaker.padding || 0}
                  />
                ) : (
                  <Avatar
                    // NOTE: workaround when image aspect ratio is not 1.
                    className={speaker?.padding ? styles.img : undefined}
                    name={speaker.name}
                    src={speaker.avatarSrc}
                    size="sm"
                    bg="white"
                    padding={speaker.padding || 0}
                  />
                )}

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

        <Wrap pt={2} spacing={props.isPc ? 3 : 1}>
          {props.session.track && (
            <WrapItem>
              <HStack pt={2} color={track.color(props.session.track)}>
                <Icon as={MdPlace} />
                <Text fontSize="sm">
                  {props.textSource.track} {props.session.track}
                </Text>
              </HStack>
            </WrapItem>
          )}
          <WrapItem>
            <HStack pt={2}>
              <Icon as={FaClock} color={"white"} />
              <Text fontSize="sm">
                {props.session.startFrom}-{props.session.endAt} (JST)
              </Text>
            </HStack>
          </WrapItem>
        </Wrap>
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
      gridTemplateColumns="[A] 1fr [B] 1fr [C]"
      gridTemplateRows="[header] auto [opening] auto [no-1] auto [no-2] auto [no-3] auto [no-4] auto [no-5] auto [no-6] auto [no-7] auto [no-8] auto [no-9] auto [no-10] auto [closing] auto"
      gap={8}
    >
      <GridItem area="header / A">
        <Heading size="md" className={trackHeadlinesA}>
          {props.textSource.track} A
        </Heading>
      </GridItem>
      <GridItem area="header / B">
        <Heading size="md" className={trackHeadlinesB}>
          {props.textSource.track} B
        </Heading>
      </GridItem>
      {props.sessions.map((session: SelectedSession) => (
        <SessionCard
          key={session.id}
          textSource={props.textSource}
          session={session}
          isPc={props.isPc}
        />
      ))}
    </Grid>
  ) : (
    <>
      {props.sessions
        .sort((a, b) => a.order - b.order)
        .map((session: SelectedSession) => (
          <Box key={session.id} mb={8}>
            <SessionCard
              textSource={props.textSource}
              session={session}
              isPc={props.isPc}
            />
          </Box>
        ))}
    </>
  );
}

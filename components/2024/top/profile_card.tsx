import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { FaMastodon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const icon = css`
  display: inline;
`;

export function ProfileCard(props: {
  pc: boolean;
  src: string;
  altText: string;
  name: string;
  twitterUrl?: string;
  twitterId?: string;
  mastodonUrl?: string;
  mastodonId?: string;
}) {
  const headlineFontSize = props.pc ? "xl" : "md";
  const contentFontSize = props.pc ? "md" : "sm";

  return (
    <Box>
      <Image
        src={props.src}
        alt={props.altText}
        boxSize="160px"
        objectFit="contain"
      />
      <Heading fontSize={headlineFontSize} pt="15px">
        {props.name}
      </Heading>
      {props.twitterUrl !== undefined && props.twitterId !== undefined ? (
        <Text fontSize={contentFontSize}>
          <Link href={props.twitterUrl} isExternal>
            <FaXTwitter className={icon} /> {props.twitterId}
          </Link>
        </Text>
      ) : null}
      {props.mastodonUrl !== undefined && props.mastodonId !== undefined ? (
        <Text fontSize={contentFontSize}>
          <Link href={props.mastodonUrl} isExternal>
            <FaMastodon className={icon} /> {props.mastodonId}
          </Link>
        </Text>
      ) : null}
    </Box>
  );
}

import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { FaTwitter } from "react-icons/fa";

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
          <Link href={props.twitterUrl}>
            <FaTwitter className={icon} /> {props.twitterId}
          </Link>
        </Text>
      ) : null}
    </Box>
  );
}

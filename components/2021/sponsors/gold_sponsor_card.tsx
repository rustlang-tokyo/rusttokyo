import { GoldSponsor } from "@/types/2021/types";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useState } from "react";

const imageProps = css`
  width: auto;
  max-height: 110px;
`;

const readMoreButton = css`
  width: 100%;
`;

export function GoldSponsorCard(props: {
  item: GoldSponsor;
  isPc: boolean;
  buttonText: { readFullText: string; readFullCloseText: string };
}) {
  const [readMore, setReadMore] = useState(false);
  const noOfLines = props.isPc ? 4 : 6;
  const whenOmitText = 170;

  return (
    <Box p={8} borderWidth={1} borderRadius={10} backgroundColor={"white"}>
      <Center py={12}>
        <Link href={props.item.url} target="_blank">
          <Image src={props.item.logoImagePath} className={imageProps} />
        </Link>
      </Center>
      <Box pt={8}>
        <Heading as="h4" size="md" pb={2}>
          <Link
            href={props.item.url}
            textDecoration="underline"
            target="_blank"
          >
            {props.item.name}
          </Link>
        </Heading>
        {!readMore && props.item.description.length > whenOmitText ? (
          <Text noOfLines={noOfLines}>{props.item.description}</Text>
        ) : (
          <Text>{props.item.description}</Text>
        )}
        <Center pt={4}>
          {props.item.description.length > whenOmitText ? (
            <Button
              borderColor="gray.100"
              size="sm"
              className={readMoreButton}
              onClick={() => setReadMore(!readMore)}
            >
              {!readMore
                ? props.buttonText.readFullText
                : props.buttonText.readFullCloseText}
            </Button>
          ) : (
            <></>
          )}
        </Center>
      </Box>
    </Box>
  );
}

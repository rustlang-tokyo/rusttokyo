import type { SilverSponsor } from "@/types/2021/types";
import { Box, Center, Image, Link } from "@chakra-ui/react";
import { css } from "@emotion/css";

const imageProps = css`
  width: auto;
  max-height: 90px;
`;

const silverSponsorBox = css`
  height: 100px;
`;

export function SilverSponsorCard(props: {
  item: SilverSponsor;
  isPc: boolean;
}) {
  return (
    <>
      {props.isPc ? (
        <Link
          href={props.item.url}
          p={2}
          borderWidth={1}
          borderRadius={10}
          backgroundColor={"white"}
          target="_blank"
        >
          <Center className={silverSponsorBox}>
            <Image src={props.item.logoImagePath} className={imageProps} />
          </Center>
        </Link>
      ) : (
        // in mobile, href attribute for div tag doesn't work.
        // So set a tag directly to image tag.
        <Box p={2} borderWidth={1} borderRadius={10} backgroundColor={"white"}>
          <Center className={silverSponsorBox}>
            <Link href={props.item.url}>
              <Image src={props.item.logoImagePath} className={imageProps} />
            </Link>
          </Center>
        </Box>
      )}
    </>
  );
}

import type { BronzeSponsor } from "@/types/2022/types";
import { Box } from "@chakra-ui/react";
import { SponsorLogo } from "../common/sponsor_logo";

export function BronzeSponsorCard(props: {
  item: BronzeSponsor;
  isPc: boolean;
}) {
  return (
    <Box>
      <SponsorLogo
        size={"140px"}
        url={props.item.url}
        logoImagePath={props.item.logoImagePath}
        alt={props.item.name}
        padding={0}
      />
    </Box>
  );
}

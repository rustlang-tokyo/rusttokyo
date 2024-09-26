import type { SilverSponsor } from "@/types/2022/types";
import { Box } from "@chakra-ui/react";
import { SponsorLogo } from "../common/sponsor_logo";

export function SilverSponsorCard(props: {
  item: SilverSponsor;
  isPc: boolean;
}) {
  return (
    <Box>
      <SponsorLogo
        size={"200px"}
        url={props.item.url}
        logoImagePath={props.item.logoImagePath}
        alt={props.item.name}
        padding={3}
      />
    </Box>
  );
}

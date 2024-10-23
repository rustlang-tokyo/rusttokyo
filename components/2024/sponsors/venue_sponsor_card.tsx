import type { VenueSponsor } from "@/types/2024/types";
import { Box } from "@chakra-ui/react";
import { SponsorLogo } from "../common/sponsor_logo";

export function VenueSponsorCard(props: {
  item: VenueSponsor;
  isPc: boolean;
}) {
  return (
    <Box>
      <SponsorLogo
        size={"140px"}
        url={props.item.url}
        logoImagePath={props.item.logoImagePath}
        alt={props.item.name}
        padding={2}
      />
    </Box>
  );
}

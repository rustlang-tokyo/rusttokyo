import { EnTopTextList, JaTopTextList } from "@/constants/2022/top/texts";
import { BronzeSponsor, GoldSponsor, SilverSponsor } from "@/types/2022/types";
import { Heading, Wrap } from "@chakra-ui/react";
import { BronzeSponsorCard } from "./bronze_sponsor_card";
import { GoldSponsorCard } from "./gold_sponsor_card";
import { SilverSponsorCard } from "./silver_sponsor_card";

export function SponsorList(props: {
  goldSponsors: GoldSponsor[];
  silverSponsors: SilverSponsor[];
  bronzeSponsors: BronzeSponsor[];
  isPc: boolean;
  textSource: JaTopTextList | EnTopTextList;
}) {
  const sSpacing = props.isPc ? 10 : 5;
  const bSpacing = props.isPc ? 10 : 5;

  return (
    <>
      <Heading as="h3" size="md" mt={0}>
        {props.textSource.goldSponsor}
      </Heading>

      <Wrap spacing={10} justify="center">
        {props.goldSponsors.map((goldSponsor: GoldSponsor) => {
          return (
            <GoldSponsorCard
              key={goldSponsor.name}
              item={goldSponsor}
              isPc={props.isPc}
            />
          );
        })}
      </Wrap>

      <Heading as="h3" size="md" pt={8}>
        {props.textSource.silverSponsor}
      </Heading>

      <Wrap spacing={sSpacing} justify="center">
        {props.silverSponsors.map((silverSponsor: SilverSponsor) => {
          return (
            <SilverSponsorCard
              key={silverSponsor.name}
              item={silverSponsor}
              isPc={props.isPc}
            />
          );
        })}
      </Wrap>

      <Heading as="h3" size="md" pt={8}>
        {props.textSource.bronzeSponsor}
      </Heading>

      <Wrap spacing={bSpacing} justify="center">
        {props.bronzeSponsors.map((bronzeSponsor: BronzeSponsor) => {
          return (
            <BronzeSponsorCard
              key={bronzeSponsor.name}
              item={bronzeSponsor}
              isPc={props.isPc}
            />
          );
        })}
      </Wrap>
    </>
  );
}

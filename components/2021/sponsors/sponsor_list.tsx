import { headlines } from "@/constants/2021/css/css";
import { EnTopTextList, JaTopTextList } from "@/constants/2021/top/texts";
import { GoldSponsor, SilverSponsor } from "@/types/2021/types";
import {
  Button,
  Center,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { utcToZonedTime } from "date-fns-tz";
import { BiLinkExternal } from "react-icons/bi";
import { GoldSponsorCard } from "./gold_sponsor_card";
import { SilverSponsorCard } from "./silver_sponsor_card";

export function SponsorList(props: {
  goldSponsors: GoldSponsor[];
  silverSponsors: SilverSponsor[];
  isPc: boolean;
  textSource: JaTopTextList | EnTopTextList;
}) {
  const gColumnSize = props.isPc ? 2 : 1;
  const sColumnSize = props.isPc ? 4 : 2;
  const sSpacing = props.isPc ? 10 : 5;
  const sponsorApplicationSwitch =
    props.goldSponsors.length === 0 && props.silverSponsors.length === 0;
  const sponsorDisplayable = () => {
    const date = new Date("2021-08-20T14:59:59.999Z");
    const timeZone = "Asia/Tokyo";
    const limit = utcToZonedTime(date, timeZone);
    const now = utcToZonedTime(new Date(), timeZone);

    return now <= limit;
  };

  return (
    <>
      {sponsorApplicationSwitch && (
        <Center>
          {sponsorDisplayable() ? (
            <Button
              bg="purple.100"
              color="white"
              _hover={{ bg: "#43327A" }}
              rightIcon={<BiLinkExternal />}
            >
              <Link href="https://forms.gle/RbQk9c6AZPk2G4Nq9">
                {props.textSource.applySponsor}
              </Link>
            </Button>
          ) : (
            <Text>{props.textSource.finishedSponsorApplicationMessage}</Text>
          )}
        </Center>
      )}
      {!sponsorApplicationSwitch && (
        <>
          <Heading className={headlines} as="h3" size="xl" py={{ base: 4 }}>
            {props.textSource.goldSponsor}
          </Heading>

          <SimpleGrid columns={gColumnSize} spacing={10}>
            {props.goldSponsors.map((goldSponsor: GoldSponsor) => {
              return (
                <GoldSponsorCard
                  key={goldSponsor.name}
                  item={goldSponsor}
                  isPc={props.isPc}
                  buttonText={{
                    readFullText: props.textSource.readFullText,
                    readFullCloseText: props.textSource.readFullTextDisable,
                  }}
                />
              );
            })}
          </SimpleGrid>

          <Heading className={headlines} as="h3" size="xl" py={{ base: 4 }}>
            {props.textSource.silverSponsor}
          </Heading>

          <SimpleGrid columns={sColumnSize} spacing={sSpacing}>
            {props.silverSponsors.map((silverSponsor: SilverSponsor) => {
              return (
                <SilverSponsorCard
                  key={silverSponsor.name}
                  item={silverSponsor}
                  isPc={props.isPc}
                />
              );
            })}
          </SimpleGrid>
        </>
      )}
    </>
  );
}

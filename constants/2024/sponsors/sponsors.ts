import type {
  BronzeSponsor,
  GoldSponsor,
  SilverSponsor,
} from "@/types/2024/types";

export type GoldSponsorList = {
  ja: GoldSponsor[];
  en: GoldSponsor[];
};

export const goldSponsors: GoldSponsorList = {
  ja: [
    {
      id: 0,
      name: "TODO1",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
    {
      id: 1,
      name: "TODO2",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
    {
      id: 2,
      name: "TODO3",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
  ],
  en: [], // Copied from ja later
};

goldSponsors.en = goldSponsors.ja;

export type SilverSponsorList = {
  ja: SilverSponsor[];
  en: SilverSponsor[];
};

export const silverSponsors: SilverSponsorList = {
  ja: [
    {
      name: "TODO4",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
      inverse: true,
    },
    {
      name: "TODO5",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO6",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO7",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
  ],
  en: [], // Copied from ja later
};

silverSponsors.en = silverSponsors.ja;

export type BronzeSponsorList = {
  ja: BronzeSponsor[];
  en: BronzeSponsor[];
};

export const bronzeSponsors: BronzeSponsorList = {
  ja: [
    {
      name: "TODO8",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO9",
      logoImagePath: "/static/2024/staff/a_skua.png",
      url: "https://rust.tokyo/",
    },
  ],
  en: [], // Copied from ja later
};

bronzeSponsors.en = bronzeSponsors.ja;

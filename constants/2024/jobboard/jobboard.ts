import type { JobBoardSponsor } from "@/types/2024/types";

type JobBoardSponsorList = {
  ja: JobBoardSponsor[];
  en: JobBoardSponsor[];
};

export const sponsors: JobBoardSponsorList = {
  ja: [
    {
      name: "TODO1",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO2",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO3",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO4",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
      inverse: true,
    },
    {
      name: "TODO5",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO6",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO7",
      imgSrc: "/static/2024/staff/a_skua.png",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
  ],
  en: [], // Copied from ja later
};

sponsors.en = sponsors.ja;

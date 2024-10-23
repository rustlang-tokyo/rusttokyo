import type { JobBoardSponsor } from "@/types/2024/types";

type JobBoardSponsorList = {
  ja: JobBoardSponsor[];
  en: JobBoardSponsor[];
};

export const sponsors: JobBoardSponsorList = {
  ja: [
    {
      name: "TODO1",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO2",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO3",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO4",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
      inverse: true,
    },
    {
      name: "TODO5",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO6",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
    {
      name: "TODO7",
      imgSrc: "",
      description:
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO\n" +
        "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
      url: "https://rust.tokyo/",
    },
  ],
  en: [], // Copied from ja later
};

sponsors.en = sponsors.ja;

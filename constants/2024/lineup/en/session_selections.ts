import {
  type SelectedSession,
  endingBase,
  openingBase,
  session1Base,
  session2Base,
  session3Base,
  session4Base,
  session5Base,
  session6Base,
  sponsor1Base,
  sponsor2Base,
} from "../context";
import {
  dorayakikun,
  speaker1,
  speaker2,
  speaker3,
  speaker4_en,
  speaker5,
  speaker6,
  sponsor1,
  sponsor2,
} from "../speaker";

export const selectedSessions: SelectedSession[] = [
  {
    area: "no-1 / A",
    title: "TODO1",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker1],
    description: "",
    pagePath: "/2024/lineup/en/1",
    ...session1Base,
  },
  {
    area: "no-1 / B",
    title: "TODO2",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker2],
    description: "",
    pagePath: "/2024/lineup/en/2",
    ...session2Base,
  },
  {
    area: "no-2 / A",
    title: "TODO3",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker3],
    description: "",
    pagePath: "/2024/lineup/en/3",
    ...session3Base,
  },
  {
    area: "no-2 / B",
    title: "TODO4",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker4_en],
    description: "",
    pagePath: "/2024/lineup/en/4",
    ...session4Base,
  },
  {
    area: "no-3 / A",
    title: "TODO5",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker5],
    description: "",
    pagePath: "/2024/lineup/en/5",
    ...session5Base,
  },
  {
    area: "no-3 / B",
    title: "TODO6",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker6],
    description: "",
    pagePath: "/2024/lineup/en/6",
    ...session6Base,
  },
  {
    area: "no-4 / A",
    title: "TODO7",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [sponsor1],
    description: "",
    ...sponsor1Base,
  },
  {
    area: "no-4 / B",
    title: "TODO8",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [sponsor2],
    description: "",
    ...sponsor2Base,
  },
  {
    area: "opening / A / opening / C",
    title: "TODO9",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [dorayakikun],
    description: "",
    ...openingBase,
  },
  {
    area: "closing / A / closing / C",
    title: "TODO10",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [dorayakikun],
    description: "",
    ...endingBase,
  },
];

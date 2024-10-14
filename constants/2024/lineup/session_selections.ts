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
} from "./context";
import {
  dorayakikun,
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
  sponsor1,
  sponsor2,
} from "./speaker";

export const selectedSessions: SelectedSession[] = [
  {
    title: "TODO1",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker1],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    pagePath: "/lineup/1",
    ...session1Base,
  },
  {
    title: "TODO2",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker2],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    pagePath: "/lineup/2",
    ...session2Base,
  },
  {
    title: "TODO3",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker3],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    pagePath: "/lineup/3",
    ...session3Base,
  },
  {
    title: "TODO4",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker4],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    pagePath: "/lineup/4",
    ...session4Base,
  },
  {
    title: "TODO5",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker5],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    pagePath: "/lineup/5",
    ...session5Base,
  },
  {
    title: "TODO6",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [speaker6],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    pagePath: "/lineup/6",
    ...session6Base,
  },
  {
    title: "TODO7",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [sponsor1],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    ...sponsor1Base,
  },
  {
    title: "TODO8",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [sponsor2],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    ...sponsor2Base,
  },
  {
    title: "TODO9",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [dorayakikun],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    ...openingBase,
  },
  {
    title: "TODO10",
    elevatorPitch:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    speaker: [dorayakikun],
    description:
      "TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO",
    ...endingBase,
  },
];

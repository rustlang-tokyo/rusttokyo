import type { SpeakerInfo } from "./speaker";

export type SelectedSession = SelectedSessionBase & {
  title: string;
  elevatorPitch: string;
  speaker: SpeakerInfo[];
  pagePath?: string;
  sessionLanguage: "日本語" | "English";
  captionLanguage?: "日本語" | "English";
};

export type SelectedSessionBase = {
  id: number;
  area: string;
  track?: "A" | "B";
  startFrom: string;
  endAt: string;
  order: number;
  sessionType: "Greeting" | "Long Talk" | "Short Talk" | "Sponsor";
  renderDesc: boolean;
  presentationSlide?: {
    title: string;
    url: string;
  };
};

export const opening: SelectedSessionBase = {
  id: 0,
  area: "opening / A / opening / C",
  startFrom: "11:00",
  endAt: "11:10",
  order: 0,
  sessionType: "Greeting",
  renderDesc: false,
};

export const session1A: SelectedSessionBase = {
  id: 1,
  area: "no-1 / A",
  track: "A",
  startFrom: "11:20",
  endAt: "11:45",
  order: 1,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session1B: SelectedSessionBase = {
  id: 2,
  area: "no-1 / B",
  track: "B",
  startFrom: "11:20",
  endAt: "11:45",
  order: 2,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session2A: SelectedSessionBase = {
  id: 3,
  area: "no-2 / A",
  track: "A",
  startFrom: "11:55",
  endAt: "12:20",
  order: 3,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session2B: SelectedSessionBase = {
  id: 4,
  area: "no-2 / B",
  track: "B",
  startFrom: "11:55",
  endAt: "12:20",
  order: 4,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session3A: SelectedSessionBase = {
  id: 5,
  area: "no-3 / A",
  track: "A",
  startFrom: "12:30",
  endAt: "12:55",
  order: 5,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session3B: SelectedSessionBase = {
  id: 6,
  area: "no-3 / B",
  track: "B",
  startFrom: "12:30",
  endAt: "12:55",
  order: 6,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session4A: SelectedSessionBase = {
  id: 7,
  area: "no-4 / A",
  track: "A",
  startFrom: "13:05",
  endAt: "13:30",
  order: 7,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session4B: SelectedSessionBase = {
  id: 8,
  area: "no-4 / B",
  track: "B",
  startFrom: "13:05",
  endAt: "13:30",
  order: 8,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session5A: SelectedSessionBase = {
  id: 9,
  area: "no-5 / A",
  track: "A",
  startFrom: "13:40",
  endAt: "14:05",
  order: 9,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session5B: SelectedSessionBase = {
  id: 10,
  area: "no-5 / B",
  track: "B",
  startFrom: "13:40",
  endAt: "14:05",
  order: 10,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session6A: SelectedSessionBase = {
  id: 11,
  area: "no-6 / A",
  track: "A",
  startFrom: "14:15",
  endAt: "14:40",
  order: 11,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session6B: SelectedSessionBase = {
  id: 12,
  area: "no-6 / B",
  track: "B",
  startFrom: "14:15",
  endAt: "14:40",
  order: 12,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session7A: SelectedSessionBase = {
  id: 13,
  area: "no-7 / A",
  track: "A",
  startFrom: "14:50",
  endAt: "15:15",
  order: 13,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session7B: SelectedSessionBase = {
  id: 14,
  area: "no-7 / B",
  track: "B",
  startFrom: "14:50",
  endAt: "15:15",
  order: 14,
  sessionType: "Short Talk",
  renderDesc: true,
};

export const session8A: SelectedSessionBase = {
  id: 15,
  area: "no-8 / A",
  track: "A",
  startFrom: "15:25",
  endAt: "15:50",
  order: 15,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session8B: SelectedSessionBase = {
  id: 16,
  area: "no-8 / B",
  track: "B",
  startFrom: "15:25",
  endAt: "15:50",
  order: 16,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session9A: SelectedSessionBase = {
  id: 17,
  area: "no-9 / A",
  track: "A",
  startFrom: "16:00",
  endAt: "16:25",
  order: 17,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session9B: SelectedSessionBase = {
  id: 18,
  area: "no-9 / B",
  track: "B",
  startFrom: "16:00",
  endAt: "16:25",
  order: 18,
  sessionType: "Sponsor",
  renderDesc: true,
};

export const session10A: SelectedSessionBase = {
  id: 19,
  area: "no-10 / A",
  track: "A",
  startFrom: "16:35",
  endAt: "17:30",
  order: 19,
  sessionType: "Long Talk",
  renderDesc: true,
};

export const session10B: SelectedSessionBase = {
  id: 20,
  area: "no-10 / B",
  track: "B",
  startFrom: "16:35",
  endAt: "17:30",
  order: 20,
  sessionType: "Long Talk",
  renderDesc: true,
};

export const closing: SelectedSessionBase = {
  id: 99,
  area: "closing / A / closing / C",
  startFrom: "17:40",
  endAt: "17:50",
  order: 99,
  sessionType: "Greeting",
  renderDesc: false,
};

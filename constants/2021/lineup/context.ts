import type { SpeakerInfo } from "./speaker";

export type SelectedSession = SelectedSessionBase & {
  title: string;
  elevatorPitch: string;
  speaker: SpeakerInfo[];
  description: string;
  pagePath?: string;
};

export type SelectedSessionBase = {
  id: number;
  sessionLanguage?: "日本語" | "English";
  captionLanguage?: "日本語" | "English";
  startFrom: string;
  endAt: string;
  order: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  sessionType: "Greeting" | "Talk" | "Sponsor";
  renderDesc: boolean;
  presentationSlide?: {
    title: string;
    url: string;
  };
  youtube?: {
    url: string;
  };
  youtubeUrl?: string;
};

export const openingBase: SelectedSessionBase = {
  id: 7,
  sessionLanguage: "日本語",
  startFrom: "10:00",
  endAt: "10:15",
  order: 1,
  sessionType: "Greeting",
  renderDesc: false,
};

export const endingBase: SelectedSessionBase = {
  id: 8,
  sessionLanguage: "日本語",
  startFrom: "15:10",
  endAt: "15:25",
  order: 10,
  sessionType: "Greeting",
  renderDesc: false,
};

// How Rust triages regressions and prevents them from reaching to stable
export const session1Base: SelectedSessionBase = {
  id: 1,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "10:15",
  endAt: "10:40",
  order: 2,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title:
      "Rust.Tokyo 2021: How Rust triages regressions and prevents them from reaching to stable",
    url: "https://speakerdeck.com/johntitor/rust-dot-tokyo-2021-how-rust-triages-regressions-and-prevents-them-from-reaching-to-stable",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=ZB2N8J_z2NQ",
  },
};

// One for All Thread Pool - yatp
export const session2Base: SelectedSessionBase = {
  id: 2,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "10:50",
  endAt: "11:15",
  order: 3,
  sessionType: "Talk",

  renderDesc: true,
  presentationSlide: {
    title: "YATP One for all Thread Pool",
    url: "https://docs.google.com/presentation/d/1Ue-DfGPlO1J0S7ewRcR_4277eQwZ872Rccutaz7grFQ/edit",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=fz4yyspBpZU",
  },
};

// Rustでrbenvよりも7秒速いRubyのバージョンマネージャーを作った
export const session3Base: SelectedSessionBase = {
  id: 3,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "11:25",
  endAt: "11:50",
  order: 4,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title:
      "A Ruby version manager written in Rust, which is 7 seconds faster than rbenv",
    url: "https://speakerdeck.com/tako8ki/a-ruby-version-manager-written-in-rust-which-is-7-seconds-faster-than-rbenv",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=4kgxD-z_5D8",
  },
};

// Sh4der Jockey: a tool for realtime visual performances using Rust and OpenGL
export const session4Base: SelectedSessionBase = {
  id: 4,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "14:05",
  endAt: "14:30",
  order: 7,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Sh4der Jockey @ rust.tokyo 2021",
    url: "https://docs.google.com/presentation/d/1-FNuHKNFxNkUpc1USNIna_FfkY5zOF1YKdmfylWjffU/edit",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=gu6Xmin7_BY",
  },
};

// Rustとコンテナランタイム
export const session5Base: SelectedSessionBase = {
  id: 5,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "13:30",
  endAt: "13:55",
  order: 6,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Rust 🤝 Container Runtime @ Rust.Tokyo 2021",
    url: "https://speakerdeck.com/utam0k/rust-container-runtime-at-rust-dot-tokyo-2021",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=nDjMwA0Bsro",
  },
};

// Unsafe in Rust (use case with sysinfo)
export const session6Base: SelectedSessionBase = {
  id: 6,
  sessionLanguage: "English",
  captionLanguage: "日本語",
  startFrom: "14:40",
  endAt: "15:05",
  order: 8,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Unsafe in Rust",
    url: "https://github.com/GuillaumeGomez/conference-talks/tree/master/rust.tokyo-2021-sysinfo",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=k-egjlO_qXg",
  },
};

// sponsor1
export const sponsor1: SelectedSessionBase = {
  id: 9,
  startFrom: "12:30",
  endAt: "12:50",
  order: 4,
  sessionType: "Sponsor",
  renderDesc: false,
  presentationSlide: {
    title: "Node.js in Rust: How to do it and what to expect from it",
    url: "https://speakerdeck.com/jlkiri/node-dot-js-in-rust-how-to-do-it-and-what-to-expect-from-it",
  },
};

// sponsor1
export const sponsor2: SelectedSessionBase = {
  id: 10,
  startFrom: "13:00",
  endAt: "13:20",
  order: 5,
  sessionType: "Sponsor",
  renderDesc: false,
};

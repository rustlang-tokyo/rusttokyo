import { SpeakerInfo } from "./speaker";

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
  startFrom: "13:00",
  endAt: "13:15",
  order: 1,
  sessionType: "Greeting",
  renderDesc: false,
};

export const endingBase: SelectedSessionBase = {
  id: 8,
  sessionLanguage: "日本語",
  startFrom: "18:25",
  endAt: "18:40",
  order: 10,
  sessionType: "Greeting",
  renderDesc: false,
};

// IoTプラットフォーム開発におけるRustの活用
export const session1Base: SelectedSessionBase = {
  id: 1,
  sessionLanguage: "日本語",
  // captionLanguage: "English",
  startFrom: "13:25",
  endAt: "13:50",
  order: 2,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/nP88P5h41_8?si=ENPTbwwwassBCssG",
  },
  youtubeUrl: "https://youtu.be/nP88P5h41_8?si=ENPTbwwwassBCssG",
};

// かにさんタワーバトル
export const session2Base: SelectedSessionBase = {
  id: 2,
  sessionLanguage: "日本語",
  // captionLanguage: "English",
  startFrom: "14:00",
  endAt: "14:25",
  order: 3,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/V0ZLCxC-9GE?si=8RvLVQPWKwh3-vOZ",
  },
  youtubeUrl: "https://youtu.be/V0ZLCxC-9GE?si=8RvLVQPWKwh3-vOZ",
};

// 他言語がメインの場合のRustの活用法 - csbindgenによるC# x Rust FFI実践事例
export const session3Base: SelectedSessionBase = {
  id: 3,
  sessionLanguage: "日本語",
  // captionLanguage: "English",
  startFrom: "14:35",
  endAt: "15:00",
  order: 4,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/WewpLDcBXV0?si=2u97UHavXB7awU9p",
  },
  youtubeUrl: "https://youtu.be/WewpLDcBXV0?si=2u97UHavXB7awU9p",
};

// 並行キャッシュライブラリの開発で得られた知見
export const session4Base: SelectedSessionBase = {
  id: 4,
  sessionLanguage: "日本語",
  // captionLanguage: "English",
  startFrom: "16:40",
  endAt: "17:05",
  order: 7,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/W14V4dnk678?si=6Ead7GF2PB4x1YYE",
  },
  youtubeUrl: "https://youtu.be/W14V4dnk678?si=6Ead7GF2PB4x1YYE",
};

// Rust 業務経験がない開発者で集まって汎ツールを開発した話
export const session5Base: SelectedSessionBase = {
  id: 5,
  sessionLanguage: "日本語",
  startFrom: "17:15",
  endAt: "17:40",
  order: 8,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/Wlyt6bEajoo?si=949j0gJsLPLVI0Vp",
  },
  youtubeUrl: "https://youtu.be/Wlyt6bEajoo?si=949j0gJsLPLVI0Vp",
};

// Ferrocene - Enabling Rust in Critical Environments
// safety, ISO26262, IEC61508
export const session6Base: SelectedSessionBase = {
  id: 6,
  sessionLanguage: "English",
  // captionLanguage: "日本語",
  startFrom: "17:50",
  endAt: "18:15",
  order: 9,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://youtu.be/XrHabBxxb98?si=m7kU3UmelOpdWPMG",
  },
  youtubeUrl: "https://youtu.be/XrHabBxxb98?si=m7kU3UmelOpdWPMG",
};

// sponsor1
//
export const sponsor1Base: SelectedSessionBase = {
  id: 9,
  startFrom: "15:10",
  endAt: "15:35",
  order: 5,
  sessionType: "Sponsor",
  renderDesc: false,
};

// sponsor2
//
export const sponsor2Base: SelectedSessionBase = {
  id: 10,
  startFrom: "15:45",
  endAt: "16:10",
  order: 6,
  sessionType: "Sponsor",
  renderDesc: false,
};

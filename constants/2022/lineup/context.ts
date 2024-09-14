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

// mini_live2d_rsの開発によって得られた経験
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
    title: "My experience with mini_live2d_rs development",
    url: "https://docs.google.com/presentation/d/1W_Ra1QozT8gT2KM70GPLXzb62qKdQ6HJ7Q68ZPemAy4/edit#slide=id.g15aaa4f71cc_1_1",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=rGNHpUpKTSI",
  },
  youtubeUrl: "https://www.youtube.com/watch?v=rGNHpUpKTSI",
};

// Rust で型安全な SPA 開発
export const session2Base: SelectedSessionBase = {
  id: 2,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "10:50",
  endAt: "11:15",
  order: 3,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://www.youtube.com/watch?v=gFBs4RCKtHk",
  },
  youtubeUrl: "https://www.youtube.com/watch?v=gFBs4RCKtHk",
};

// RustのSchema First GraphQLライブラリrusty-gqlを作った話
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
    title: "RustのSchema First GraphQLライブラリrusty-gqlを作った話",
    url: "https://docs.google.com/presentation/d/1ZP2ycqrYe5LTO6dUOQ9D8RV3K2SlcqpXwirJtrBS__c/edit#slide=id.p",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=753zSoEZYEU",
  },
  youtubeUrl: "https://www.youtube.com/watch?v=753zSoEZYEU",
};

// YJIT: Dive into Ruby's JIT compiler written in Rust
export const session4Base: SelectedSessionBase = {
  id: 4,
  sessionLanguage: "English",
  captionLanguage: "日本語",
  startFrom: "13:30",
  endAt: "13:55",
  order: 7,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title:
      "YJIT: Dive into Ruby's JIT compiler written in Rust / Rust.Tokyo 2022",
    url: "https://speakerdeck.com/k0kubun/rust-dot-tokyo-2022",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=zS3gceogbJE",
  },
  youtubeUrl: "https://www.youtube.com/watch?v=zS3gceogbJE",
};

// 実務でのRustとImageMagickによる画像合成サーバーの開発
export const session5Base: SelectedSessionBase = {
  id: 5,
  sessionLanguage: "日本語",
  captionLanguage: "English",
  startFrom: "14:05",
  endAt: "14:30",
  order: 8,
  sessionType: "Talk",
  renderDesc: true,
  youtube: {
    url: "https://www.youtube.com/watch?v=n1sx2Th0_B8",
  },
  youtubeUrl: "https://www.youtube.com/watch?v=n1sx2Th0_B8",
};

// Learning Rust via implementing algorithms
export const session6Base: SelectedSessionBase = {
  id: 6,
  sessionLanguage: "English",
  captionLanguage: "日本語",
  startFrom: "14:40",
  endAt: "15:05",
  order: 9,
  sessionType: "Talk",
  renderDesc: true,
  presentationSlide: {
    title: "Learning Rust via implementing algorithms",
    url: "https://drive.google.com/file/d/1eL-ia913Yqz7yEAcQSl6iOsMHYBeqwg9/view",
  },
  youtube: {
    url: "https://www.youtube.com/watch?v=kB6XYPFYtak",
  },
  youtubeUrl: "https://www.youtube.com/watch?v=kB6XYPFYtak",
};

// sponsor1
// フェアリーデバイセズがRustを採用して3年が過ぎました
export const sponsor1Base: SelectedSessionBase = {
  id: 9,
  startFrom: "12:30",
  endAt: "12:50",
  order: 5,
  sessionType: "Sponsor",
  renderDesc: false,
};

// sponsor2
// ゆめみ
export const sponsor2Base: SelectedSessionBase = {
  id: 10,
  startFrom: "13:00",
  endAt: "13:20",
  order: 6,
  sessionType: "Sponsor",
  renderDesc: false,
};

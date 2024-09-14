export type SpeakerInfo = {
  name: string;
  profile: string;
  twitterAccount?: string;
  githubAccount?: string;
  avatarSrc: string;
};

const avatarBaseSrc = "/static/2022/speakers/";

export const speaker1: SpeakerInfo = {
  name: "ahogappa",
  profile: "",
  twitterAccount: "@ahogapParty",
  avatarSrc: `${avatarBaseSrc}s_1.jpg`,
};

export const speaker2: SpeakerInfo = {
  name: "名和雅実",
  profile: "Fairy Devices Inc., Product Development Team, Engineer",
  avatarSrc: `${avatarBaseSrc}s_2.jpg`,
};

export const speaker3: SpeakerInfo = {
  name: "Tak Iwamoto",
  profile:
    "ソフトウェアエンジニアとして働いています。 RustのGraphQL処理系などOSSライブラリを作っています。",
  twitterAccount: "@tak_rockbook",
  avatarSrc: `${avatarBaseSrc}s_3.jpg`,
};

export const speaker4: SpeakerInfo = {
  name: "Takashi Kokubun",
  profile: "Staff Developer at Shopify in the YJIT team.",
  twitterAccount: "@k0kubun",
  avatarSrc: `${avatarBaseSrc}s_4.jpg`,
};

export const speaker5: SpeakerInfo = {
  name: "Takayuki Nakata",
  profile:
    "Web application engineer at GMO Pepabo. A member of Clippy team of Rust.",
  twitterAccount: "@giraffate",
  avatarSrc: `${avatarBaseSrc}s_5.jpg`,
};

export const speaker6: SpeakerInfo = {
  name: "Vitaly Bragilevsky",
  profile:
    "I’m a developer advocate at JetBrains. I taught programming languages at universities for more than 20 years. I am the author of ‘Haskell in Depth’, published by Manning Publications in 2021, but I work with many other programming languages besides Haskell as well.",
  twitterAccount: "@VBragilevsky",
  avatarSrc: `${avatarBaseSrc}s_6.jpg`,
};

export const sponsor1: SpeakerInfo = {
  name: "吉川 哲史",
  profile: "",
  avatarSrc: `${avatarBaseSrc}sponsor_1.jpg`,
};

export const sponsor2: SpeakerInfo = {
  name: "スミス 祐一郎ルーク",
  profile: "",
  avatarSrc: `${avatarBaseSrc}sponsor_2.jpg`,
};

const organiserAvatarBase = "/static/2022/organizers/";

// Rust.Tokyo team
export const dorayakikun: SpeakerInfo = {
  name: "Tomohide Takao",
  profile: "",
  twitterAccount: "@dorayakikun",
  avatarSrc: `${organiserAvatarBase}dorayakikun.png`,
};

export type SpeakerInfo = {
  name: string;
  profile: string;
  twitterAccount?: string;
  githubAccount?: string;
  avatarSrc: string;
  // padding for avatar icon.
  padding?: number;
};

const organiserAvatarBase = "/static/2023/organizers/";

// Rust.Tokyo team
export const dorayakikun: SpeakerInfo = {
  name: "Tomohide Takao",
  profile: "",
  twitterAccount: "@dorayakikun",
  avatarSrc: `${organiserAvatarBase}dorayakikun.png`,
};

const avatarBaseSrc = "/static/2023/speakers/";

export const speaker1: SpeakerInfo = {
  name: "Takumi Shimada",
  profile:
    "Rustを用いた組込みシステムのプログラミング開発に惹かれ、Twitterやブログで情報発信を行う。インプレスR＆Dで「Rustで始める自作組込みOS入門」を出版。 現在は株式会社IdeinでIoTプラットフォームの開発を行っている。",
  twitterAccount: "@garasubo",
  avatarSrc: `${avatarBaseSrc}s_1.jpg`,
};

export const speaker2: SpeakerInfo = {
  name: "Yuta Ide",
  profile:
    "日本経済新聞社のWebエンジニアとして、日経電子版の基盤改善をしています。最近はオブザーバビリティの改善に関心があります。",
  twitterAccount: "@sadnessOjisan",
  avatarSrc: `${avatarBaseSrc}s_2.jpg`,
};

export const speaker3: SpeakerInfo = {
  name: "Yoshifumi Kawai",
  profile:
    "C#愛好家。サーバーとクライアントを共にC#で実装するフレームワークの開発とアーキテクチャを推進している。長年のC#愛好家が高じてCygamesと共にC#専門の開発会社「Cysharp」を設立。OSS開発にも関心が深く、GitHub上に50以上の公開、そのうち複数のライブラリが世界的にも強く支持され、多数のゲームタイトルに採用されている。C#の手の届かない範囲をうまく補完するための言語としてRustに注目中。2011年よりMicrosoft MVP for Developer Technologies(C#)。CEDEC AWARDS 2022 エンジニアリング部門優秀賞。「.NETのクラスライブラリ設計 改訂新版」監訳。",
  twitterAccount: "@neuecc",
  avatarSrc: `${avatarBaseSrc}s_3.jpg`,
};

export const speaker4: SpeakerInfo = {
  name: "Tatsuya Kawano",
  profile:
    "Rustをこよなく愛するフリーランスのソフトウェアエンジニア。フェアリーデバイセズ株式会社にてRustを使ったWebサービスの開発に携わっています。共著に『実践Rust入門』（技術評論社、2019年出版）",
  twitterAccount: "@tatsuya6502",
  avatarSrc: `${avatarBaseSrc}s_4.jpg`,
};

export const speaker5: SpeakerInfo = {
  name: "kajiwara",
  profile: "Chatwork 株式会社所属の開発者です。",
  avatarSrc: `${avatarBaseSrc}s_5.jpg`,
};

export const speaker6: SpeakerInfo = {
  name: "Florian Gilcher",
  profile: `Florian Gilcher is one of the co-founders and management directors of Ferrous Systems. Previously, he was part of the Rust project, as part of the community and core team, and a co-organiser of the Rust Berlin Meetup and the RustFest conference.

His current driving motiviation is bringing Rust to the industry, currently to the industries of highest assurances, for example automotive and aerospace. For that, he’s currently leading the Ferrocene project - the qualification of the Rust project to highest assurances.
`,
  twitterAccount: "@argorak",
  avatarSrc: `${avatarBaseSrc}s_6.jpg`,
};

export const speaker4_en: SpeakerInfo = {
  name: "Tatsuya Kawano",
  profile:
    'A freelance software engineer who loves Rust. Building Rust-based web services at Fairy Devices, Inc. Co-author of a Japanese book "A Practical Introduction to Rust". (gihyo.jp, published in 2019)',
  twitterAccount: "@tatsuya6502",
  avatarSrc: `${avatarBaseSrc}s_4.jpg`,
};

export const sponsor1: SpeakerInfo = {
  name: "吉中 泰輝、山下 徹",
  profile: "",
  avatarSrc: `${avatarBaseSrc}sponsor_1.png`,
};

export const sponsor2: SpeakerInfo = {
  name: "青柳康平",
  profile: "",
  avatarSrc: `${avatarBaseSrc}sponsor_2.jpg`,
  padding: 1,
};

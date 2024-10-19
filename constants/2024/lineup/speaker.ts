export type SpeakerInfo = {
  name: string;
  profile: string;
  twitterAccount?: string;
  githubAccount?: string;
  qiitaAccount?: string;
  avatarSrc: string;
  // padding for avatar icon.
  padding?: number;
};

const organiserAvatarBase = "/static/2024/organizers/";

// Rust.Tokyo team
export const dorayakikun: SpeakerInfo = {
  name: "Tomohide Takao",
  profile: "",
  twitterAccount: "dorayakikun",
  avatarSrc: `${organiserAvatarBase}dorayakikun.png`,
};

const avatarBaseSrc = "/static/2024/speakers/";

export const 名和雅実: SpeakerInfo = {
  name: "名和雅実",
  profile: "Fairy Devices Inc., Product Development Department, Engineer",
  avatarSrc: `${avatarBaseSrc}masami_nawa.png`,
};

export const 名和雅実_en = 名和雅実;

export const ynqa_en: SpeakerInfo = {
  name: "ynqa",
  profile: "A software engineer who tinkers with Kubernetes manifestsÏ",
  twitterAccount: "_ynqa",
  githubAccount: "ynqa",
  avatarSrc: `${avatarBaseSrc}ynqa.png`,
};

export const ynqa = ynqa_en;

export const tomoikey: SpeakerInfo = {
  name: "tomoikey",
  profile: `新卒2年目のWEBエンジニアです。
本業では Go や Rust を書いていて、副業では Scala を書いています。`,
  githubAccount: "tomoikey",
  qiitaAccount: "tomoikey",
  twitterAccount: "scarustacean",
  avatarSrc: `${avatarBaseSrc}tomoikey.jpeg`,
};

export const tomoikey_en: SpeakerInfo = {
  name: "tomoikey",
  profile:
    "I’m a second-year web engineer. I write Go and Rust in my main job, and Scala in my side job.",
  githubAccount: "tomoikey",
  qiitaAccount: "tomoikey",
  twitterAccount: "scarustacean",
  avatarSrc: `${avatarBaseSrc}tomoikey.jpeg`,
};

export const yuki_uchida: SpeakerInfo = {
  name: "yuki-uchida",
  profile:
    "NTTコミュニケーションズ株式会社 SkyWay推進室所属のWebRTC Researcher。WebRTCプラットフォームの新機能を開発するためのR&Dに携わっている",
  twitterAccount: "yuki_wtz",
  avatarSrc: `${avatarBaseSrc}yuki-uchida.png`,
};

export const yuki_uchida_en = yuki_uchida;

export const Motoyuki_Kimura: SpeakerInfo = {
  name: "Motoyuki Kimura",
  profile:
    "Rust Software Engineer, interested in performance, observability, etc. One of the maintainers of the tokio-rs ecosystem.",
  twitterAccount: "mox692",
  avatarSrc: `${avatarBaseSrc}mox692.jpeg`,
};

export const Motoyuki_Kimura_en = Motoyuki_Kimura;

export const ahogappa: SpeakerInfo = {
  name: "ahogappa",
  profile: `STORES でwebエンジニアをしています。
Rubyで書けるゲームエンジンやワンバイナリツールを作ったりしてます。`,
  githubAccount: "ahogappa0613",
  avatarSrc: `${avatarBaseSrc}ahogappa.PNG`,
};

export const ahogappa_en: SpeakerInfo = {
  name: "ahogappa",
  profile: `I am a web application developer at STORES, Inc.
As a hobby, I develop game engines and tools to pack ruby in one binary.`,
  githubAccount: "ahogappa0613",
  avatarSrc: `${avatarBaseSrc}ahogappa.PNG`,
};

export const keno: SpeakerInfo = {
  name: "keno (Ken Okada) ",
  profile:
    "keno, a small sawagani/Loves math, coffee, Emacs, Lisp, Rust, software talk",
  twitterAccount: "keno_ss",
  avatarSrc: `${avatarBaseSrc}kenoss.png`,
};

export const keno_en = keno;

export const Satoshi_Yoshikawa: SpeakerInfo = {
  name: "Satoshi Yoshikawa",
  profile: `Fairy Devices株式会社のプロダクト開発部部長兼ソフトウェア開発者。
「実践Rustプログラミング入門」（秀和システム、共著）、「RustによるWebアプリケーション開発 設計からリリース・運用まで」（講談社サイエンティフィック、共著）を執筆。`,
  githubAccount: "emergent",
  twitterAccount: "emergent",
  avatarSrc: `${avatarBaseSrc}Satoshi_Yoshikawa.jpeg`,
};

export const Satoshi_Yoshikawa_en = Satoshi_Yoshikawa;

export const David_Lu_en: SpeakerInfo = {
  name: "David Lu",
  profile:
    "David Lu is an undergraduate student from the University of British Columbia, currently working at NTT Software Innovation Center as a Research Intern exploring optimal methods of utilizing the NVIDIA Bluefield series Data Processing Unit/SmartNIC. His general research interests are in distributed computing, operating systems and programming languages.",
  avatarSrc: `${avatarBaseSrc}david_lu.jpg`,
};

export const David_Lu = David_Lu_en;

export const Shriram_Balaji_en: SpeakerInfo = {
  name: "Shriram Balaji",
  profile:
    "Senior Software Engineer at Microsoft tinkering with systems languages, databases and things on the web",
  twitterAccount: "shrirambalaji",
  avatarSrc: `${avatarBaseSrc}Shriram_Balaji.jpg`,
};

export const Shriram_Balaji = Shriram_Balaji_en;

export const Satoru_Nishio: SpeakerInfo = {
  name: "Satoru Nishio",
  profile: `"2児の父をしながら株式会社MIERUNEでGISとWeb開発を行う、Engineering Managerです！
以下のような事柄に興味があります！
Python / Rust / GIS / 点群 / 3D Tiles / AWS / WebGL / PLATEAU ADVOCATE / Cesium Certified Developer"`,
  twitterAccount: "nokonoko_1203",
  avatarSrc: `${avatarBaseSrc}satoru_nishio.JPG`,
};

export const Satoru_Nishio_en = Satoru_Nishio;

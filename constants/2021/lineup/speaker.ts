export type SpeakerInfo = {
  name: string;
  profile: string;
  twitterAccount?: string;
  githubAccount?: string;
  avatarSrc: string;
};

const avatarBaseSrc = "/static/2021/speakers/";

export const YukiOkushi: SpeakerInfo = {
  name: "Yuki Okushi",
  profile:
    "Yuki Okushi is a FLOSS nerd, they’re contributing to Rust since 2019 and working on it as a (lead) member of some teams/WGs. Also, they’re contributing to many Rust community crates like Actix and Diesel.",
  twitterAccount: "@fr4ternite",
  githubAccount: "JohnTitor",
  avatarSrc: `${avatarBaseSrc}s_1.jpeg`,
};

export const TongMu: SpeakerInfo = {
  name: "Tong Mu",
  profile:
    "I’m Tong Mu and am working in the distributed transaction team in TiDB. My research interest is the transaction’s isolation theory, submission protocol, and concurrency. We face many kinds of stability issues in the database system’s development and the unified thread pool is one that can increase the stability of the system. I’m expecting to share the works with you.",
  twitterAccount: "@you06v",
  avatarSrc: `${avatarBaseSrc}s_2.jpg`,
};

export const TakayukiMaedaJa: SpeakerInfo = {
  name: "Takayuki Maeda",
  profile:
    "Rustで書かれたRubyのバージョン管理ツールであるfrumとawesome-alternatives-in-rustというawesomeリストを管理しており、神戸大学で土木工学を専攻しています。最近は、RustでTUIのSQLクライアントを作っています。 ",
  twitterAccount: "@TaKOBKi",
  githubAccount: "TaKO8Ki",
  avatarSrc: `${avatarBaseSrc}s_3.png`,
};

export const TakayukiMaedaEn: SpeakerInfo = {
  name: "Takayuki Maeda",
  profile:
    "I am a maintainer of frum, a Ruby version manager written in Rust, and awesome-alternatives-in-rust, and I'm majoring in Civil Engineering at Kobe University. I've been building a TUI SQL client with Rust lately. ",
  twitterAccount: "@TaKOBKi",
  githubAccount: "TaKO8Ki",
  avatarSrc: `${avatarBaseSrc}s_3.png`,
};

export const utam0kJa: SpeakerInfo = {
  name: "うたもく",
  profile:
    "Rustで書かれたコンテナランタイムのyoukiの開発者でcontainersのメンバーです。普段は日本のウェブ企業で働いています。",
  twitterAccount: "@utam0k",
  githubAccount: "utam0k",
  avatarSrc: `${avatarBaseSrc}s_5.png`,
};

export const utam0kEn: SpeakerInfo = {
  name: "utam0k",
  profile:
    "Developer of youki, a container runtime written in Rust, and member of containers. I usually work for a web company in Japan.",
  twitterAccount: "@utam0k",
  githubAccount: "utam0k",
  avatarSrc: `${avatarBaseSrc}s_5.png`,
};

export const sp4ghetJa: SpeakerInfo = {
  name: "すぱげっと",
  profile:
    "イギリスの学部で理論物理専攻3年生 Rustはチュートリアルをやった程度でしたが最近はほぼ毎日書いています。",
  twitterAccount: "@sp4ghet",
  githubAccount: "sp4ghet",
  avatarSrc: `${avatarBaseSrc}s_4.png`,
};

export const sp4ghetEn: SpeakerInfo = {
  name: "sp4ghet",
  profile:
    "Year 3 BSc. Theoretical Physics at UCL. Prior to developing this tool, I’ve only done tutorials for rust but now I write rust almost every day.",
  twitterAccount: "@sp4ghet",
  githubAccount: "sp4ghet",
  avatarSrc: `${avatarBaseSrc}s_4.png`,
};

export const GuillaumeGomez: SpeakerInfo = {
  name: "Guillaume Gomez",
  profile:
    "Rust language reviewer and contributor, rustdoc team leader, “low-level” adventurer, trying to extract all information from the system before it all breaks down.",
  twitterAccount: "@imperioworld_",
  githubAccount: "GuillaumeGomez",
  avatarSrc: `${avatarBaseSrc}s_6.jpg`,
};

export const kirill: SpeakerInfo = {
  name: "Kirill Vasiltcov",
  profile: "",
  twitterAccount: "",
  githubAccount: "",
  avatarSrc: `${avatarBaseSrc}s_7.jpeg`,
};

export const wish: SpeakerInfo = {
  name: "Wish",
  profile: "",
  twitterAccount: "",
  githubAccount: "",
  avatarSrc: `${avatarBaseSrc}s_8.png`,
};

const organiserAvatarBase = "/static/2021/organizers/";

// Rust.Tokyo team
export const dorayakikun: SpeakerInfo = {
  name: "Tomohide Takao",
  profile: "",
  twitterAccount: "@dorayakikun",
  avatarSrc: `${organiserAvatarBase}dorayakikun.png`,
};

export const helloyuki: SpeakerInfo = {
  name: "Yuki",
  profile:
    'Rust aficionado, creative director & designer of Rust.Tokyo, a fan of "low-level programming" and arts.',
  twitterAccount: "@helloyuki_",
  avatarSrc: `${organiserAvatarBase}yuki.png`,
};

export const chikoski: SpeakerInfo = {
  name: "chikoski",
  profile: "",
  twitterAccount: "@chikoski",
  avatarSrc: `${organiserAvatarBase}chikoski.jpeg`,
};

export const tkato: SpeakerInfo = {
  name: "Tomohiro Kato",
  profile: "",
  twitterAccount: "@_tkato_",
  avatarSrc: `${organiserAvatarBase}tkato.jpeg`,
};

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
  profile: "A software engineer who tinkers with Kubernetes manifests",
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

export const Haruki_Shimada: SpeakerInfo = {
  name: "Haruki Shimada",
  profile:
    "スタートアップでエンジニアをしています。PaidyでRustを使ったクレジットカードの開発もしていました。",
  githubAccount: "peaske7",
  twitterAccount: "HarukiJay",
  avatarSrc: `${avatarBaseSrc}peaske7.webp`,
};

export const Haruki_Shimada_en: SpeakerInfo = {
  name: "peaske7",
  profile:
    "Software engineer at a startup. I worked on credit card backends with Rust at Paidy.",
  githubAccount: "peaske7",
  twitterAccount: "HarukiJay",
  avatarSrc: `${avatarBaseSrc}peaske7.webp`,
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
    "David Lu is an undergraduate student from the University of British Columbia. His general research interests are in distributed computing, operating systems and programming languages.",
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

export const Shiseki_Reo = {
  name: "紫関 麗王",
  profile: "GMOペパボ セキュリティ対策室, SECCON CTF Administrator",
  twitterAccount: "n01e0",
  avatarSrc: `${avatarBaseSrc}shiseki_reo.jpg`,
} satisfies SpeakerInfo;

export const Shiseki_Reo_en = {
  ...Shiseki_Reo,
  name: "Shiseki Reo",
} satisfies SpeakerInfo;

export const Aoyagi_Kohei = {
  name: "青柳 康平",
  profile:
    "東京電機大学大学院数学専攻修了。フューチャーアーキテクトでコンサルタントを経てR&Dに所属、魔法のｉらんど CTO、フューチャースコープCTOを歴任後、ユニークビジョンの創業に参加し取締役CTOに就任。最新技術を用いてパフォーマンスを追求し、柔軟で拡張性の高い仕組みをつくる。特にDB設計に注目し、将来のデータ量を想定し最適なテーブル設計を行っている。",
  twitterAccount: "aoyagikouhei",
  avatarSrc: `${avatarBaseSrc}aoyagi_kohei.png`,
} satisfies SpeakerInfo;

export const Aoyagi_Kohei_en = Aoyagi_Kohei;

export const FairyDevices = {
  name: "Fairy Devices株式会社",
  profile: `自社開発の首掛け型ウェアラブルデバイスTHINKLETと音声AIプラットフォームmimiによって、現場
DXサービスを提供しています。私たちはデバイスと音声処理技術をもとに、インターネットに存在
しない情報をデータ化し、機械知能が理解可能にすること、その結果として人類のあらゆる知識を叡
智として流通可能にすることを目指しています。`,
  avatarSrc: `${avatarBaseSrc}fairy_devices.png`,
} satisfies SpeakerInfo;

export const FairyDevices_en = FairyDevices;

export const Sergi_Granell = {
  name: "Sergi Granell",
  profile: `低レベルプログラミングとハードウェア設計に情熱を持つエンジニアです。14歳の時にPSP向けにLua言語でアプリをプログラミングし独学で技術を磨きました。その後、CやMIPS
ASMを学び、テクノロジー、科学、宇宙探査に強い興味を持つようになりました。UPC
BarcelonaTechで情報工学の修士号を取得し、九州大学での論文では、FPGAでのHalideの実行を加速するための技術を研究しました。Esperanto
TechnologiesでRISC-Vコア向けのファームウェア開発に携わり、現在はアークエッジ・スペースで小型衛星のファームウェアやSDRの開発を行っています。趣味でゲーム機のプログラミングやリバースエンジニアリングにも取り組んでおり、オープンソースプロジェクトへの貢献を楽しんでいます。`,
  twitterAccount: "xerpi",
  githubAccount: "xerpi",
  avatarSrc: `${avatarBaseSrc}sergi_granell.jpg`,
} satisfies SpeakerInfo;

export const Sergi_Granell_en = {
  ...Sergi_Granell,
  profile: `I am an engineer passionate about low-level programming and hardware
design. I started programming at the age of 14 by creating
applications in Lua for the PSP, teaching myself various technologies
along the way. I later learned C and MIPS ASM, developing a strong
interest in technology, science, and space exploration. I earned my
master's degree in Computer Engineering from UPC BarcelonaTech,
focusing on accelerating Halide execution on FPGAs for my thesis at
Kyushu University. I worked on firmware development for RISC-V cores
at Esperanto Technologies and am currently developing firmware and SDR
for small satellites at ArkEdge Space. In my spare time, I enjoy
programming and reverse engineering game consoles and contributing to
open-source projects.`,
} satisfies SpeakerInfo;

export const Kohei_Yamamoto = {
  name: "山本 浩平",
  profile: `株式会社一休に所属するソフトウェアエンジニア。
2023年からRustなどを用いた一休.comレストランの開発に携わる。そのほか、技術広報として開発者ブログの運用やイベント実務などもおこなう。`,
  twitterAccount: "kymmt90",
  githubAccount: "kymmt90",
  avatarSrc: `${avatarBaseSrc}kohei_yamamoto.jpg`,
} satisfies SpeakerInfo;

export const Kohei_Yamamoto_en = {
  ...Kohei_Yamamoto,
  name: "Kōhei Yamamoto",
} satisfies SpeakerInfo;

export const Takuya_Moriyama = {
  name: "Takuya Moriyama",
  profile:
    "去年から、素材の会社でソフトウェアエンジニア職を始めて、その時に初めてRust を仕事で触りました。その前はデータサイエンス職などをしておりました。",
  avatarSrc: `${avatarBaseSrc}takuya_moriyama.jpg`,
} satisfies SpeakerInfo;

export const Takura_Moriyama_en = Takuya_Moriyama;

export const Yuta_Hinokuma = {
  name: "日熊 悠太",
  profile: `学生時代よりプログラミングコンテスト等で複数回上位入賞獲得し、2014年にAIベンチャーに参画。 深層学習を活用した画像解析の研究開発や新サービスの開発を経験後、創業メンバーとしてKICONIA WORKSに参画。
主に受託開発での研究開発を行なっており、得意分野は画像処理(パターン認識系)を用いたアプリケーション、数理最適化を用いたアプリケーション開発。`,
  avatarSrc: `${avatarBaseSrc}yuta_hinokuma.jpg`,
} satisfies SpeakerInfo;

export const Yuta_Hinokuma_en = {
  ...Yuta_Hinokuma,
  name: "YUTA HINOKUMA",
} satisfies SpeakerInfo;

export const Vitaly_Bragilevsky = {
  name: "Vitaly Bragilevsky",
  profile: "Rust/RustRover デベロッパーアドボケイト",
  avatarSrc: `${avatarBaseSrc}vitaly_bragilevsky.png`,
} satisfies SpeakerInfo;

export const Vitaly_Bragilevsky_en = Vitaly_Bragilevsky;

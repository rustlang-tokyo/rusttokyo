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
  sponsor1,
  sponsor2,
} from "./context";
import {
  GuillaumeGomez,
  TakayukiMaedaJa,
  TongMu,
  YukiOkushi,
  dorayakikun,
  kirill,
  sp4ghetJa,
  utam0kJa,
  wish,
} from "./speaker";

export const selectedSessions: SelectedSession[] = [
  {
    title:
      "How Rust triages regressions and prevents them from reaching to stable",
    elevatorPitch:
      "This talk describes how Rust contributors triage regressions and prevent them from reaching Stable Rust. Rust’s release cycle is relatively fast, but how do they prevent regressions? This talk helps you to understand what and how they’ve been working.",
    speaker: [YukiOkushi],
    description: "",
    pagePath: "/2021/lineup/1",
    ...session1Base,
  },
  {
    title: "One for All Thread Pool - yatp",
    elevatorPitch:
      "The database is an application with both IO-intensive and CPU-intensive tasks. This talk will explain how TiKV, a distributed transactional KV database built with Rust, applied yatp, the unified thread pool, which replaces multiple thread pools to optimize the scheduling of the database system.",
    speaker: [TongMu],
    description: "",
    pagePath: "/2021/lineup/2",
    ...session2Base,
  },
  {
    title: "Rustでrbenvよりも7秒速いRubyのバージョンマネージャーを作った",
    elevatorPitch:
      "Rubyでは、プロジェクト毎のバージョン管理が重要ですが、最も使われているであろうRubyバージョンマネージャーrbenvでRubyをインストールすると2分から3分程かかってしまいます。少しでもRubyのインストールを速くし、バージョン管理をシンプルにするためにPure RustでfrumというRubyバージョンマネージャーを作りました。このセッションではfrumを実装した際に得た知見について話します。",
    speaker: [TakayukiMaedaJa],
    description: "",
    pagePath: "/2021/lineup/3",
    ...session3Base,
  },
  {
    title:
      "Sh4der Jockey: a tool for realtime visual performances using Rust and OpenGL",
    elevatorPitch:
      "We present Sh4der Jockey, a tool for realtime visual performances. The tool is used to run multiple shaders in a pipeline to create demoscene-like effects. We present the motivations for building this tool, as well as some of the technical challenges faced as we developed Sh4der Jockey.",
    speaker: [sp4ghetJa],
    description: "",
    pagePath: "/2021/lineup/4",
    ...session4Base,
  },
  {
    title: "Rustとコンテナランタイム",
    elevatorPitch:
      "本発表ではコンテナランタイムでのRustを活用する可能性についての説明します。私が中心となっている開発しているRustのコンテナランタイムのyoukiの経験を踏まえることでより具体的な説明を行います。これらの経験から私はRustはもっとこの分野に貢献するべき言語だと感じました。この発表で知見を共有することで多くのRustaceanにこの分野に関心を持ってもらえることを期待しています。また、発表の最初でコンテナランタイムの技術のcgroupなどについてもyoukiの実際のRustのコードを交えながら簡単に説明します。コンテナを触れたことがあれば、ある程度話が理解できることを目指します。",
    speaker: [utam0kJa],
    description: "",
    pagePath: "/2021/lineup/5",
    ...session5Base,
  },
  {
    title: "Unsafe in Rust (use case with sysinfo)",
    elevatorPitch:
      "This talk will explain how to use unsafe in Rust, the traps to avoid and provide some tips to make it better. It’ll use the sysinfo crate as example. The goal of the sysinfo crate is to allow users to get system information. The important point being to have one API for all different systems.",
    speaker: [GuillaumeGomez],
    description: "",
    pagePath: "/2021/lineup/6",
    ...session6Base,
  },
  {
    title: "オープニングセッション",
    elevatorPitch: "Rust.Tokyo チームよりご挨拶申し上げます。",
    speaker: [dorayakikun],
    description: "",
    ...openingBase,
  },
  {
    title:
      "Node.js in Rust: How to do it and what to expect from it: 株式会社ゆめみ",
    elevatorPitch:
      "本発表では、RustプロジェクトにNode.jsランタイムを組み込むことが可能だということを示し、そのメリットを説明します。\n" +
      "Node.jsを組み込む段取りを見ていきます。Node.jsの公式C++組み込みAPIを紹介し、C++非対応に関わらずRustのFFIで何ができるかを説明します。この発表の内容の大部分が、Node.js互換可能なプロジェクト用のRustで作られたパッケージマネジャー「Orogene」を開発するときに実験的にNode.jsを組み込んだ結果です。",
    speaker: [kirill],
    description: "",
    ...sponsor1,
  },
  {
    title: "Production-ready Rust in PingCAP: PingCAP株式会社",
    elevatorPitch:
      "In PingCAP, we built TiKV, a distributed KV database in Rust, which is used in production by thousands of clients around the world. This talk will show you how we did it via two parts:\n" +
      "(1) the ecosystem we built for Rust, e.g. libraries and teaching courses.\n" +
      "(2) experience and lessons we learnt when using Rust in such mission critical scenarios: performance, stability, troubleshooting and so on.",
    speaker: [wish],
    description: "",
    ...sponsor2,
  },
  {
    title: "クロージングセッション",
    elevatorPitch: "次回またお会いしましょう！",
    speaker: [dorayakikun],
    description: "",
    ...endingBase,
  },
];

import {
  type SelectedSession,
  closing,
  opening,
  session1A,
  session1B,
  session2A,
  session2B,
  session3A,
  session3B,
  session4A,
  session4B,
  session5A,
  session5B,
  session6A,
  session6B,
  session7A,
  session7B,
  session8A,
  session8B,
  session9A,
  session9B,
  session10A,
  session10B,
} from "../context";
import {
  Aoyagi_Kohei_en,
  David_Lu_en,
  FairyDevices_en,
  Haruki_Shimada_en,
  Kohei_Yamamoto_en,
  Motoyuki_Kimura_en,
  Satoru_Nishio_en,
  Satoshi_Yoshikawa_en,
  Sergi_Granell_en,
  Shiseki_Reo_en,
  Shriram_Balaji_en,
  Takura_Moriyama_en,
  Vitaly_Bragilevsky_en,
  Yuta_Hinokuma_en,
  ahogappa_en,
  dorayakikun,
  keno_en,
  tomoikey_en,
  ynqa_en,
  yuki_uchida_en,
  名和雅実_en,
} from "../speaker";

export const selectedSessions: SelectedSession[] = [
  {
    title: "Opening",
    sessionLanguage: "日本語",
    elevatorPitch: "Welcome from the Rust.Tokyo team!",
    speaker: [dorayakikun],
    ...opening,
  },
  {
    title: "大規模プロダクトのための Cargo Workspace ベストプラクティス",
    sessionLanguage: "日本語",
    elevatorPitch: `In large-scale product development in Rust, using modules to separate functionality makes it difficult to manage the responsibilities of each component. Cargo Workspace allows to manage multiple crates in a single place, making it easier to separate responsibility. 

Especially when developing a backend product, each component responsibility may want to use different dependencies. Using Cargo Workspace to separate the crates also separates the Cargo.toml, making it easier to manage dependencies. However, separating the crates will give you something to think.

I would like to share best practices based on my experience of 3 years of continuous backend development of our own products.`,
    speaker: [名和雅実_en],
    pagePath: `/lineup/en/${session1A.id}`,
    ...session1A,
  },
  {
    title: "TUI applications in Rust",
    sessionLanguage: "日本語",
    elevatorPitch: `I released a TUI application called "jnv" in Rust.
It allows you to interactively execute jq filters on JSON input directly in the terminal.

Based on this experience, I will explain the process of creating and releasing a TUI application in Rust. 

Specifically, I will cover an introduction to TUI libraries in Rust, the implementations of jnv, and how to use cargo-dist for distribution.
This content will also be interesting for people who want to learn more about the technical stuffs of Rust.`,
    speaker: [ynqa_en],
    pagePath: `/lineup/en/${session1B.id}`,
    ...session1B,
  },
  {
    title:
      "Tackling Rust and OSS as a Second-Year Dev!! Turns Out, There’s Nothing to Fear!",
    sessionLanguage: "日本語",
    elevatorPitch:
      "In this session, I will support Rust programmers who haven’t taken the first step toward contributing to OSS, by sharing my personal experiences as a new graduate engineer. I will specifically introduce the joys and challenges I encountered through OSS contributions, as well as key features of Rust, helping participants overcome their fears and take on the challenge. Additionally, through the introduction of my own OSS project, refined_type, I will share methods for improving runtime safety and efficient validation using types, aiming to broaden the scope of Rust usage.",
    speaker: [tomoikey_en],
    pagePath: `/lineup/en/${session2A.id}`,
    ...session2A,
  },
  {
    title:
      "Rustでマルチスレッドプログラミング！ リアルタイム通信ではどのようにスレッドを立てるのか",
    sessionLanguage: "日本語",
    elevatorPitch: `ビデオ会議や映像配信などにおいては、メディアを高速・並列に捌くというのが非常に重要です。映像は秒間1Mbytes以上、音声は数百kbytesになることもあるため、それらのメディアを捌くサーバーには非常に大きな負荷が掛かります。

ここで、重要となるのがマルチスレッドプログラミングです。スレッドを使いこなすことで、パフォーマンスを向上させることが可能です。

SkyWayは、WebRTCの次の技術としてMedia Over Quic Transportに注目しており、moq-wasmというOSS公開しています。このOSSでの実装を参照しながら、どのようにマルチスレッドにしていくかを学びましょう。`,
    speaker: [yuki_uchida_en],
    pagePath: `/lineup/en/${session2B.id}`,
    ...session2B,
  },
  {
    title: "An implementation using proc_macro designed not to rust.",
    sessionLanguage: "日本語",
    elevatorPitch:
      "Introduction to the method of generating implementations that rely on external APIs using proc_macro and its associated risks.",
    speaker: [Shiseki_Reo_en],
    pagePath: `/lineup/en/${session3A.id}`,
    ...session3A,
  },
  {
    title: "Rust と歩んだ 7 年間：プロダクションコードのための実践的テスト",
    sessionLanguage: "日本語",
    elevatorPitch: `ユニークビジョンは、SNS アカウント管理、CRM、SNS キャンペーンなどを通じて、企業と生活者のつながりを提供する SNS マーケティングツール「Beluga シリーズ」を開発・提供している会社です。
このセッションでは、

「仕様変更のたびにテストが壊れる」「外部APIの単体テストが書けない」「テストデータの作成・メンテナンスが煩雑」

など、開発現場でよく直面するテストにまつわる課題に対して、実務でRustを7年使ってきた経験から得られた実践的な解決策をご紹介します。`,
    speaker: [Aoyagi_Kohei_en],
    pagePath: `/lineup/en/${session3B.id}`,
    ...session3B,
  },
  {
    title: "Fairy DevicesがRustを採用して5年が経ちました",
    sessionLanguage: "日本語",
    elevatorPitch:
      "2022年からRust.Tokyoをスポンサーし続けて3回目になりました。2022年時点ではRust採用の動機と3年間の歩みについてお話しましたが、そこからさらに2年間、引き続きRustは開発チームにおいて多く利用しています。この2年間において、実施した新しい取り組みやそこで見えてきた課題や得られた知見についてお話したいと思います。",
    speaker: [FairyDevices_en],
    pagePath: `/lineup/en/${session4A.id}`,
    ...session4A,
  },
  {
    title: "Learning Rust by Implementing a VDES Turbo Encoder/Decoder",
    sessionLanguage: "English",
    elevatorPitch: `This presentation shares my experience learning Rust from
scratch while implementing a turbo encoder/decoder for the VHF Data
Exchange System (VDES). I will discuss how utilizing the Rust
ecosystem enabled efficient development.`,
    speaker: [Sergi_Granell_en],
    pagePath: `/lineup/en/${session4B.id}`,
    ...session4B,
  },
  {
    title: "Instrumenting Async Runtime",
    sessionLanguage: "日本語",
    elevatorPitch: `In this session, I'm going to talk about the async runtime tracing tool I've been working on.

While tools like the tracing crate and tokio-console have been around for a while as monitoring tools for async Rust, they are primarily focused on observing user code and sometimes it may be insufficient for identifying issues within the internals of the async runtime. 

To address this, I’m developing a tracing tool that visualizes the internal behavior of the Tokio runtime.

In this session, I will discuss the existing tools, along with the technical details of runtime tracing tool I'm developing.`,
    speaker: [Motoyuki_Kimura_en],
    pagePath: `/lineup/en/${session5A.id}`,
    ...session5A,
  },
  {
    title: "Rustを使ったRubyライブラリの開発",
    sessionLanguage: "日本語",
    elevatorPitch: `この発表では、RustでRubyのライブラリ(Gem)を作った話をします。 近年既存のC/C++プログラムをRustに書き換えたものにしていく動きが活発になっており、Rustで動くコードが増えてきています。

一方Rubyは基本的にCで記述されたプログラミング言語ですが、JITコンパイラであるYJITはRustで実装され、GemもRustを使って作成することが容易になっています。

実際に私が開発したGemを例にRustを使って開発したことについて発表します。`,
    speaker: [ahogappa_en],
    pagePath: `/lineup/en/${session5B.id}`,
    ...session5B,
  },
  {
    title: "Multithreaded testing: the good, the bad, and the ugly",
    sessionLanguage: "日本語",
    elevatorPitch:
      "By running integration tests using multiple threads, we can significantly reduce test execution time. In this talk, I will share the different methods and pitfalls learned from transitioning our integration tests from single to multithreaded execution.",
    speaker: [Haruki_Shimada_en],
    pagePath: `/lineup/en/${session6A.id}`,
    ...session6A,
  },
  {
    title: "Let's build your own Wayland compositor with smithay",
    sessionLanguage: "日本語",
    elevatorPitch:
      "In this talk, we'll explore how to build an Wayland compositor in Rust, which is a core component of Linux GUI environment. Roughly speaking, Wayland compositor is responsible for window arrangement and display, keyboards and mice management, etc. In other OS, this stack is under control of the OS and tightly coupled to it, but one can choose what you like and replace the default with it in Linux. Moreover, one can build their own Wayland compositor. Rust has cargo, smithay, winit and enables one to start writing such an important stack easily. Let's build your own Wayland compositor!",
    speaker: [keno_en],
    pagePath: `/lineup/en/${session6B.id}`,
    ...session6B,
  },
  {
    title: "ONNX推論ランタイムクレートの比較と実装奮闘記",
    sessionLanguage: "日本語",
    elevatorPitch:
      "機械学習の普及に伴いONNXという機械学習モデルを表現するオープンなフォーマットが登場しました。ONNXはTensorFlowやPyTorchなどのフレームワークで学習されたモデルから変換することもでき、多くのモデルがONNXで公開されています。ONNXの実行環境も、onnxruntime（C++）が公式実装として存在するものの、他にもRustで書かれたOSSの推論ランタイムやONNX対応機械学習フレームワークがいくつか存在します。自身の取り組みの中でこれらを調査・比較した経緯とその結果、実装面で奮闘したことなどをお話します。",
    speaker: [Satoshi_Yoshikawa_en],
    pagePath: `/lineup/en/${session7A.id}`,
    ...session7A,
  },
  {
    title: "Overcoming Callback Hell When Integrating C into Rust",
    sessionLanguage: "English",
    elevatorPitch:
      "An often overlooked challenge with FFIs found with C-style APIs are callbacks, which hide control flow and often discard type safety. We’ll share our experience creating a safe, runtime-agnostic wrapper for NVIDIA DOCA, which decouples program logic from callbacks while exposing a convenient API.",
    speaker: [David_Lu_en],
    pagePath: `/lineup/en/${session7B.id}`,
    ...session7B,
  },
  {
    title: "総会員数1,500万人のレストランWeb予約サービスにおけるRustの活用",
    sessionLanguage: "日本語",
    elevatorPitch: `株式会社一休ではレストランのWeb予約ができるサービス「一休.comレストラン」を運営しています。

この一休.comレストランでは、バックエンドシステムのRustへの移行が進んでいます。移行にあたっては、Rustの表現力の高い型システムの活用や高速／省リソースなバックエンドの運用を狙っています。また、今後長きに渡ってサービスを支えるバックエンドシステムとすべく、アーキテクチャや個別のモジュールの設計において技術的な考慮もいくつかおこなっています。

このセッションでは、このような一休.comレストランにおけるRust移行の実際や工夫などについて紹介します。`,
    speaker: [Kohei_Yamamoto_en],
    pagePath: `/lineup/en/${session8A.id}`,
    ...session8A,
  },
  {
    title:
      "Rustを使った社内用Webアプリの開発・運用を持続させるために、素材メーカーが学んだこと",
    sessionLanguage: "日本語",
    elevatorPitch:
      "素材メーカーのソフトウェア内製開発部隊が、開発言語にRust 採用した後の２年間で、持続的な開発・運用のために行った、開発/運用体験向上のための試行錯誤や、過去（と今）の苦労談、学びなどを紹介します。",
    speaker: [Takura_Moriyama_en],
    pagePath: `/lineup/en/${session8B.id}`,
    ...session8B,
  },
  {
    title: "動画像処理アプリをRust化してiPhoneSE上で240fpsで動かす",
    sessionLanguage: "日本語",
    elevatorPitch: `実際に存在した「Pythonで研究開発された、動画像処理アプリケーション」をiPhone上で240fpsで動作させるという案件に対して
・どのような理由でRustを採用したのか？
・どのように高速化を進めているのか？
という観点をを通じて、画像処理 + iPhoneアプリにおけるRustの活用事例を共有します。`,
    speaker: [Yuta_Hinokuma_en],
    pagePath: `/lineup/en/${session9A.id}`,
    ...session9A,
  },
  {
    title: "Rust 開発を支えるツール – RustRover で日々の作業を効率化",
    sessionLanguage: "English",
    elevatorPitch:
      "ソフトウェア開発者は、コードに向き合うだけでなく、さまざまなタスクをこなすことが求められます。調査によると、開発者の業務時間の半分ほどがコーディングに費やされると言われており、コード作業を全方位でサポートするツールが不可欠です。このセッションでは、Rust 開発者向けの万能ツール「RustRover」にスポットを当て、コードベースの探索、新しいコードの記述、デバッグ、依存関係の管理など、日々の開発業務にどのように役立つかを紹介します。",
    speaker: [Vitaly_Bragilevsky_en],
    pagePath: `/lineup/en/${session9B.id}`,
    ...session9B,
  },
  {
    title:
      "Rust Unlinked - a Journey Through `rustc`, Linkers, Symbols, and Static Libraries",
    sessionLanguage: "English",
    elevatorPitch:
      "Have you ever been curious about how the compiler, linker, and OS work to run your Rust programs? In this talk, Shriram will share his learnings on rustc, what goes inside a linker, what’s in the object files, what’s LTO, why rust prefers static linking, and are there ways to do dynamic linking?",
    speaker: [Shriram_Balaji_en],
    pagePath: `/lineup/en/${session10A.id}`,
    ...session10A,
  },
  {
    title:
      "日本全国・都市3D化プロジェクト「PLATEAU」とデータ変換OSS「PLATEAU GIS Converter」の公開",
    sessionLanguage: "日本語",
    elevatorPitch:
      "国土交通省主導の「PLATEAU」は日本全国、全ての都市を3Dデータ化する大規模プロジェクトです。このビッグデータを様々なデータ形式に高速変換するため、Rustで開発した「PLATEAU GIS Converter」をOSSとして公開しました。国家プロジェクトでありながらOSSとして公開することで、データの利活用促進と技術の透明性を確保しています。本トークではプロジェクトの概要や、Rustの高性能性と安全性が大規模な地理空間データ処理にいかに適しているかを検証したその過程などを紹介します。",
    speaker: [Satoru_Nishio_en],
    pagePath: `/lineup/en/${session10B.id}`,
    ...session10B,
  },
  {
    title: "Closing",
    sessionLanguage: "日本語",
    elevatorPitch: "See you next year!",
    speaker: [dorayakikun],
    ...closing,
  },
];

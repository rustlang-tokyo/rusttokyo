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
  David_Lu_en,
  Haruki_Shimada_en,
  Motoyuki_Kimura_en,
  Satoru_Nishio_en,
  Satoshi_Yoshikawa_en,
  Shriram_Balaji_en,
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
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
    ...session3A,
  },
  {
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
    ...session3B,
  },
  {
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
    ...session4A,
  },
  {
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
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
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
    ...session8A,
  },
  {
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
    ...session8B,
  },
  {
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
    ...session9A,
  },
  {
    title: "COMING SOON",
    sessionLanguage: "日本語",
    elevatorPitch: "",
    speaker: [],
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

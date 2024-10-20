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
} from "./context";
import {
  David_Lu,
  Haruki_Shimada,
  Motoyuki_Kimura,
  Satoru_Nishio,
  Satoshi_Yoshikawa,
  Shriram_Balaji,
  ahogappa,
  dorayakikun,
  keno,
  tomoikey,
  ynqa,
  yuki_uchida,
  名和雅実,
} from "./speaker";

export const selectedSessions: SelectedSession[] = [
  {
    title: "オープニング",
    sessionLanguage: "日本語",
    elevatorPitch: "Rust.Tokyo チームよりご挨拶申し上げます。",
    speaker: [dorayakikun],
    ...opening,
  },
  {
    title: "大規模プロダクトのための Cargo Workspace ベストプラクティス",
    sessionLanguage: "日本語",
    elevatorPitch: `Rust での大規模なプロダクト開発において、モジュールを使って機能を分けると各コンポーネントの責務を管理しづらくなっていきます。Cargo の Workspace 機能を使うと複数クレートを一箇所で管理でき、責務を分けやすくなります。

特にバックエンドを開発していると、コンポーネントの責務ごとに依存したいクレートが異なる場合があります。Cargo Workspace を使ってクレートを分けると Cargo.toml も分かれるので依存関係の管理がしやすくなります。しかし、クレートを分けると別に考えることが出てきます。

自社プロダクトのバックエンド開発を 3 年ほど継続した経験に基づくベストプラクティスを共有できればと思います。`,
    speaker: [名和雅実],
    pagePath: `/lineup/${session1A.id}`,
    ...session1A,
  },
  {
    title: "Rust で TUI アプリケーションを作った話",
    sessionLanguage: "日本語",
    elevatorPitch: `jnv という TUI アプリケーションを Rust で作成し、公開しました。
ターミナル上で入力された JSON に対してインタラクティブに jq フィルタを実行できます。

この経験をもとに Rust で TUI アプリケーションを作成し、リリースするまでのプロセスを解説します。
具体的には Rust の TUI ライブラリの紹介、jnv の開発について、および cargo-dist を利用した配布方法について取り扱います。
技術的な知見を深めたい方々にも、楽しんでいただける内容となっています。`,
    speaker: [ynqa],
    pagePath: `/lineup/${session1B.id}`,
    ...session1B,
  },
  {
    title: "新卒2年目が挑んだ!! RustとOSS、実は怖くない話",
    sessionLanguage: "日本語",
    elevatorPitch:
      "このセッションでは、OSS貢献の第一歩を踏み出せないRustプログラマに向けて、新卒エンジニアの私が実体験をもとにその一歩を支援します。 OSS貢献を通じて得た喜びや課題、Rustの特徴を具体的に紹介し、参加者が恐怖心を克服し挑戦できるようサポートします。 また、自作OSS refined_type の紹介を通じて、型を活用した実行時安全性の向上と効率的なバリデーション処理の方法も共有し、Rustの活用の幅を広げる内容にしています。",
    speaker: [tomoikey],
    pagePath: `/lineup/${session2A.id}`,
    ...session2A,
  },
  {
    title:
      "Rustでマルチスレッドプログラミング！ リアルタイム通信ではどのようにスレッドを立てるのか",
    sessionLanguage: "日本語",
    elevatorPitch: `ビデオ会議や映像配信などにおいては、メディアを高速・並列に捌くというのが非常に重要です。映像は秒間1Mbytes以上、音声は数百kbytesになることもあるため、それらのメディアを捌くサーバーには非常に大きな負荷が掛かります。

ここで、重要となるのがマルチスレッドプログラミングです。スレッドを使いこなすことで、パフォーマンスを向上させることが可能です。

SkyWayは、WebRTCの次の技術としてMedia Over Quic Transportに注目しており、moq-wasmというOSS公開しています。このOSSでの実装を参照しながら、どのようにマルチスレッドにしていくかを学びましょう。`,
    speaker: [yuki_uchida],
    pagePath: `/lineup/${session2B.id}`,
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
    elevatorPitch: `このセッションでは、私が取り組んでいるTokioアプリ向けのruntime tracingツールを紹介します。

Async Rustのモニタリングツールとして、tracing crateやtokio-consoleが登場しましたが、これらはユーザーコードの観測に特化しており、Tokio runtime内部にまで踏み込んだ問題特定には不十分な場合があります。そこで、Tokioランタイムの内部挙動を可視化するtracingツールを開発しています。

本セッションでは、既存ツールの紹介と課題を述べ、runtime tracingの技術的内容と今後の展望を共有します。`,
    speaker: [Motoyuki_Kimura],
    pagePath: `/lineup/${session5A.id}`,
    ...session5A,
  },
  {
    title: "Rustを使ったRubyライブラリの開発",
    sessionLanguage: "日本語",
    elevatorPitch: `この発表では、RustでRubyのライブラリ(Gem)を作った話をします。 近年既存のC/C++プログラムをRustに書き換えたものにしていく動きが活発になっており、Rustで動くコードが増えてきています。

一方Rubyは基本的にCで記述されたプログラミング言語ですが、JITコンパイラであるYJITはRustで実装され、GemもRustを使って作成することが容易になっています。

実際に私が開発したGemを例にRustを使って開発したことについて発表します。`,
    speaker: [ahogappa],
    pagePath: `/lineup/${session5B.id}`,
    ...session5B,
  },
  {
    title: "カードバックエンドの結合テストを並列処理に移行した話",
    sessionLanguage: "日本語",
    elevatorPitch: `結合テストをマルチスレッドで実行することで、テスト時間を大幅に削減できます。
テスト実行を並列処理に移行する際の方法や気をつけるべき点などを、実際のカードシステムのバックエンドで移行したときの学びをもとに紹介します。`,
    speaker: [Haruki_Shimada],
    pagePath: `/lineup/${session6A.id}`,
    ...session6A,
  },
  {
    title: "smithay で作って動かす Wayland compositor",
    sessionLanguage: "日本語",
    elevatorPitch:
      "本発表では Linux の GUI の中核に位置する Wayland compositor を Rust で作ることについてお話します. Wayland compositor は大まかに言えばウインドウの配置や表示, キーボードやマウスの管理などを担うソフトウェアです. 多くの他の OS ではこれらは OS の管理下であり弄ることはできませんが, Linux では自作して自分の好みの挙動にすることができます. そんな大事なスタックですが Rust には `cargo`, `smithay`, `winit` がありこれらのおかげで簡単に始められます. 自作, しよう!!",
    speaker: [keno],
    pagePath: `/lineup/${session6B.id}`,
    ...session6B,
  },
  {
    title: "ONNX推論ランタイムクレートの比較と実装奮闘記",
    sessionLanguage: "日本語",
    elevatorPitch:
      "機械学習の普及に伴いONNXという機械学習モデルを表現するオープンなフォーマットが登場しました。ONNXはTensorFlowやPyTorchなどのフレームワークで学習されたモデルから変換することもでき、多くのモデルがONNXで公開されています。ONNXの実行環境も、onnxruntime（C++）が公式実装として存在するものの、他にもRustで書かれたOSSの推論ランタイムやONNX対応機械学習フレームワークがいくつか存在します。自身の取り組みの中でこれらを調査・比較した経緯とその結果、実装面で奮闘したことなどをお話します。",
    speaker: [Satoshi_Yoshikawa],
    pagePath: `/lineup/${session7A.id}`,
    ...session7A,
  },
  {
    title: "Overcoming Callback Hell When Integrating C into Rust",
    sessionLanguage: "English",
    elevatorPitch:
      "An often overlooked challenge with FFIs found with C-style APIs are callbacks, which hide control flow and often discard type safety. We’ll share our experience creating a safe, runtime-agnostic wrapper for NVIDIA DOCA, which decouples program logic from callbacks while exposing a convenient API.",
    speaker: [David_Lu],
    pagePath: `/lineup/${session7B.id}`,
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
    speaker: [Shriram_Balaji],
    pagePath: `/lineup/${session10A.id}`,
    ...session10A,
  },
  {
    title:
      "日本全国・都市3D化プロジェクト「PLATEAU」とデータ変換OSS「PLATEAU GIS Converter」の公開",
    sessionLanguage: "日本語",
    elevatorPitch:
      "国土交通省主導の「PLATEAU」は日本全国、全ての都市を3Dデータ化する大規模プロジェクトです。このビッグデータを様々なデータ形式に高速変換するため、Rustで開発した「PLATEAU GIS Converter」をOSSとして公開しました。国家プロジェクトでありながらOSSとして公開することで、データの利活用促進と技術の透明性を確保しています。本トークではプロジェクトの概要や、Rustの高性能性と安全性が大規模な地理空間データ処理にいかに適しているかを検証したその過程などを紹介します。",
    speaker: [Satoru_Nishio],
    pagePath: `/lineup/${session10B.id}`,
    ...session10B,
  },
  {
    title: "クロージング",
    sessionLanguage: "日本語",
    elevatorPitch: "次回またお会いしましょう！",
    speaker: [dorayakikun],
    ...closing,
  },
];

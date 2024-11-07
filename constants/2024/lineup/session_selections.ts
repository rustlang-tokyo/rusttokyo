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
  Aoyagi_Kohei,
  David_Lu,
  FairyDevices,
  Haruki_Shimada,
  Kohei_Yamamoto,
  Motoyuki_Kimura,
  Satoru_Nishio,
  Satoshi_Yoshikawa,
  Sergi_Granell,
  Shiseki_Reo,
  Shriram_Balaji,
  Takuya_Moriyama,
  Vitaly_Bragilevsky,
  Yuta_Hinokuma,
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
    title: "proc_macroによる錆びつかない実装",
    sessionLanguage: "日本語",
    elevatorPitch: `昨年、私はRustでOpenAI APIを使用してLLMを使用するCLIアプリケーション(FerriteChatter)を作成しました。
外部APIのクライアントとして動作するアプリケーションの作成時、レスポンスをもとに挙動や実装が変化する事があります。
今回の発表ではOpenAI APIを例に、ビルド時にAPIを叩き、そのレスポンスをもとにEnumと実装をproc_macroで生成した事例を紹介します。
また、そういった実装を行った際に発生するGitHub Actionsの使用上のリスクについても取り上げます。`,
    speaker: [Shiseki_Reo],
    pagePath: `/lineup/${session3A.id}`,
    ...session3A,
  },
  {
    title: "Rust と歩んだ 7 年間：プロダクションコードのための実践的テスト",
    sessionLanguage: "日本語",
    elevatorPitch: `ユニークビジョンは、SNS アカウント管理、CRM、SNS キャンペーンなどを通じて、企業と生活者のつながりを提供する SNS マーケティングツール「Beluga シリーズ」を開発・提供している会社です。
このセッションでは、

「仕様変更のたびにテストが壊れる」「外部APIの単体テストが書けない」「テストデータの作成・メンテナンスが煩雑」

など、開発現場でよく直面するテストにまつわる課題に対して、実務でRustを7年使ってきた経験から得られた実践的な解決策をご紹介します。`,
    speaker: [Aoyagi_Kohei],
    pagePath: `/lineup/${session3B.id}`,
    ...session3B,
  },
  {
    title: "Fairy DevicesがRustを採用して5年が経ちました",
    sessionLanguage: "日本語",
    elevatorPitch:
      "2022年からRust.Tokyoをスポンサーし続けて3回目になりました。2022年時点ではRust採用の動機と3年間の歩みについてお話しましたが、そこからさらに2年間、引き続きRustは開発チームにおいて多く利用しています。この2年間において、実施した新しい取り組みやそこで見えてきた課題や得られた知見についてお話したいと思います。",
    speaker: [FairyDevices],
    pagePath: `/lineup/${session4A.id}`,
    ...session4A,
  },
  {
    title: "VDESターボエンコーダ/デコーダの実装を通じてRustを学ぶ",
    sessionLanguage: "English",
    elevatorPitch:
      "発表では、VDESの技術的背景とITU-R M.2092-1の要件について説明します。その後、ターボ符号化と復号化の実装プロセスを紹介し、Rustの特徴がどのように開発をサポートしたかを具体例を交えてお話しします。最後に、Rustを学ぶ過程で直面した課題や困難についても触れます。",
    speaker: [Sergi_Granell],
    pagePath: `/lineup/${session4B.id}`,
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
      "本発表では Linux の GUI の中核に位置する Wayland compositor を Rust で作ることについてお話します. Wayland compositor は大まかに言えばウインドウの配置や表示, キーボードやマウスの管理などを担うソフトウェアです. 多くの他の OS ではこれらは OS の管理下であり弄ることはできませんが, Linux では自作して自分の好みの挙動にすることができます. そんな大事なスタックですが Rust には cargo, smithay, winit がありこれらのおかげで簡単に始められます. 自作, しよう!!",
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
    title: "総会員数1,500万人のレストランWeb予約サービスにおけるRustの活用",
    sessionLanguage: "日本語",
    elevatorPitch: `株式会社一休ではレストランのWeb予約ができるサービス「一休.comレストラン」を運営しています。

この一休.comレストランでは、バックエンドシステムのRustへの移行が進んでいます。移行にあたっては、Rustの表現力の高い型システムの活用や高速／省リソースなバックエンドの運用を狙っています。また、今後長きに渡ってサービスを支えるバックエンドシステムとすべく、アーキテクチャや個別のモジュールの設計において技術的な考慮もいくつかおこなっています。

このセッションでは、このような一休.comレストランにおけるRust移行の実際や工夫などについて紹介します。`,
    speaker: [Kohei_Yamamoto],
    pagePath: `/lineup/${session8A.id}`,
    ...session8A,
  },
  {
    title:
      "Rustを使った社内用Webアプリの開発・運用を持続させるために、素材メーカーが学んだこと",
    sessionLanguage: "日本語",
    elevatorPitch:
      "素材メーカーのソフトウェア内製開発部隊が、開発言語にRust 採用した後の２年間で、持続的な開発・運用のために行った、開発/運用体験向上のための試行錯誤や、過去（と今）の苦労談、学びなどを紹介します。",
    speaker: [Takuya_Moriyama],
    pagePath: `/lineup/${session8B.id}`,
    ...session8B,
  },
  {
    title: "動画像処理アプリをRust化してiPhoneSE上で240fpsで動かす",
    sessionLanguage: "日本語",
    elevatorPitch: `実際に存在した「Pythonで研究開発された、動画像処理アプリケーション」をiPhone上で240fpsで動作させるという案件に対して
・どのような理由でRustを採用したのか？
・どのように高速化を進めているのか？
という観点をを通じて、画像処理 + iPhoneアプリにおけるRustの活用事例を共有します。`,
    speaker: [Yuta_Hinokuma],
    pagePath: `/lineup/${session9A.id}`,
    ...session9A,
  },
  {
    title: "Rust 開発を支えるツール – RustRover で日々の作業を効率化",
    sessionLanguage: "English",
    elevatorPitch:
      "ソフトウェア開発者は、コードに向き合うだけでなく、さまざまなタスクをこなすことが求められます。調査によると、開発者の業務時間の半分ほどがコーディングに費やされると言われており、コード作業を全方位でサポートするツールが不可欠です。このセッションでは、Rust 開発者向けの万能ツール「RustRover」にスポットを当て、コードベースの探索、新しいコードの記述、デバッグ、依存関係の管理など、日々の開発業務にどのように役立つかを紹介します。",
    speaker: [Vitaly_Bragilevsky],
    pagePath: `/lineup/${session9B.id}`,
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

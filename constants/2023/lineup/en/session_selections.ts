import {
  SelectedSession,
  endingBase,
  openingBase,
  session1Base,
  session2Base,
  session3Base,
  session4Base,
  session5Base,
  session6Base,
  sponsor1Base,
  sponsor2Base,
} from "../context";
import {
  dorayakikun,
  speaker1,
  speaker2,
  speaker3,
  speaker4_en,
  speaker5,
  speaker6,
  sponsor1,
  sponsor2,
} from "../speaker";

export const selectedSessions: SelectedSession[] = [
  {
    title: "Utilizing Rust in IoT Platform Development",
    elevatorPitch: `In this presentation, I will share Idein's unique experiences from our early adoption of Rust in 2017.

Specifically,  we will present how we introduced Rust, our code changes with the evolution of Rust and its ecosystem, such as the introduction of async/await, and the challenges faced when using Rust in real-world product development, including insights on optimizations in our CI pipeline and troubleshooting experiences.

While more and more companies are introducing Rust into their environments, we will talk the history of Rust's evolution and its impact as one of the few early adopters.`,
    speaker: [speaker1],
    description: "",
    pagePath: "/2023/lineup/en/1",
    ...session1Base,
  },
  {
    title: "かにさんタワーバトル",
    elevatorPitch:
      "Rust はサーバー開発においても堅牢さと生産性を提供してくれる素晴らしい言語です。しかし言語自体は HTTP サーバーの機能を提供していないため、Rust で HTTP サーバーを作るためには何かしらのフレームワークを選定しなければいけません。筆者は現在、社内の古い世代のシステムを、メンテナブルで長生きするシステムに置き換える仕事をしており、その際にRustとaxumを導入しました。ただその際にライブラリやエコシステムに振り回されないような技術選定を考えて欲しいというオーダーがあり、axumを導入するかは最後までとても悩みました。結果的に選択しましたが、それはtowerによって別FWに乗り換えられることに気づいたからです。このトークでは、HTTPサーバーそのものの復習、サーバーの開発にRustが適している理由、axumの嬉しさ、towerによる相互乗り換えの方法について話します。",
    speaker: [speaker2],
    description: "",
    pagePath: "/2023/lineup/en/2",
    ...session2Base,
  },
  {
    title:
      "他言語がメインの場合のRustの活用法 - csbindgenによるC# x Rust FFI実践事例",
    elevatorPitch:
      "csbindgenというRust <-> C#のFFIを自動化するライブラリを開発し、OSSとして今年の3月に公開しました。このライブラリを元にして、C#（他言語）を中心にしたアプリケーションの中でのRustの使い所、Rust実装上でのFFIのテクニック、そしてcsbindgenの実際の利用例を紹介します。",
    speaker: [speaker3],
    description: "",
    pagePath: "/2023/lineup/en/3",
    ...session3Base,
  },
  {
    title:
      "Insights gained from the development of a concurrent cache library.",
    elevatorPitch: `In this session, I will share my experiences and challenges gained through the development of a library called Moka. It is a concurrent cache library that I have been developing since 2021. Moka is used in the backend services at crates.io and sentry.io, for example, to support their high traffic web services.

I will start with cache specific topics. And then I will present some knowledges that can be applied to general concurrent programming, such as how to choose a right data structure that will not spoil concurrency in asynchronous runtime. I will also share the challenges I encountered during the development.`,
    speaker: [speaker4_en],
    description: "",
    pagePath: "/2023/lineup/en/4",
    ...session4Base,
  },
  {
    title: "Rust 業務経験がない開発者で集まって汎用ツールを開発した話",
    elevatorPitch: `Chatwork 株式会社では Roggol という汎用ツールを開発しています。これは CQRS における Read Model の更新を行うコンポーネントを汎用的に実装したものです。 しかし、このアプリケーションの実装を開始した当時、社内には、プライベートで Rust を触っている人はいましたが、Rust の業務経験がない開発者しかいませんでした。

このセッションでは、そのような状況下で一般的に学習コストが高いと言われている Rust で汎用的なアプリケーションを開発する上で、開発前後で想定通り/想定外だったことや、 どのような点に苦労したか、どのような点で報われたかなどを共有します。`,
    speaker: [speaker5],
    description: "",
    pagePath: "/2023/lineup/en/5",
    ...session5Base,
  },
  {
    title: "Ferrocene - Enabling Rust in Critical Environments",
    elevatorPitch: `How do we bring Rust regulated industries, particularly safety-critical? Cars? Industrial machinery? Maybe planes?

This talk gives an overview what it means to “qualify” the Rust compiler for safety and which approaches Ferrous Systems took to address those needs in Ferrocene.`,
    speaker: [speaker6],
    description: "",
    pagePath: "/2023/lineup/en/6",
    ...session6Base,
  },
  {
    title: "素材メーカーが内製開発でRustを使っている話",
    elevatorPitch:
      "AGCは素材メーカーでありながらソフトウェアの内製開発に力を入れており、2021年頃からRustを採用しています。2023年にはソフトウェア開発の専門組織を立ち上げ、Rustの利用先は社内向けWebアプリや最適化アルゴリズムの実装など多岐に渡ります。素材メーカーにおける内製開発の実情も交えつつ、具体的なプロダクトを例にRustの採用に至った経緯、採用して良かった点・苦労した（している）点、Rustを普及するために取り組んでいることなどを紹介します。",
    speaker: [sponsor1],
    description: "",
    ...sponsor1Base,
  },
  {
    title: "Rustがユニークビジョンにもたらした恩恵と苦労　～そしてお返しへ～",
    elevatorPitch:
      "ユニークビジョンがRustを採用して6年間の取り組みをお話します。良い点や悩ましい点から、その試行錯誤の内幕や、自社で開発したちょっと便利なcrateも紹介します。",
    speaker: [sponsor2],
    description: "",
    ...sponsor2Base,
  },
  {
    title: "Opening Session",
    elevatorPitch: "Welcome from the Rust.Tokyo team!",
    speaker: [dorayakikun],
    description: "",
    ...openingBase,
  },
  {
    title: "Closing Session",
    elevatorPitch: "See you next year!",
    speaker: [dorayakikun],
    description: "",
    ...endingBase,
  },
];

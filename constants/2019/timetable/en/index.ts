import type { Props as SessionProps } from "@/components/2019/sessions/session";

type timetableRow = {
  startTime: string;
  roomA: SessionProps;
  roomB: SessionProps;
};

export const timetable: timetableRow[] = [
  {
    startTime: "10:00 - 10:30",
    roomA: {
      speakers: [{ image: "", name: "" }],
      title: "Opening & Key Note",
      abstract: "",
      language: "",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "",
      abstract: "",
      language: "",
    },
  },
  {
    startTime: "10:30 - 11:00",
    roomA: {
      speakers: [{ image: "", name: "" }],
      title: "Break",
      abstract: "",
      language: "",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "Break",
      abstract: "",
      language: "",
    },
  },
  {
    startTime: "11:00 - 11:30",
    roomA: {
      speakers: [
        { image: "/static/2019/speakers/TaigaMerlin.jpg", name: "Aki" },
      ],
      title:
        "Visualization of mechanical CAD drawings using WebAssembly and WebGL",
      abstract: `Computer aided design (CAD) models used in manufacturing represent designs as a topological model composed of geometric primitives. Developing online visualization tools has traditionally required a backend service responsible for parsing CAD files, and providing a frontend-friendly representation of the geometrical data. However with WebAssembly, we can now utilize CAD libraries, originally intended for native applications, inside the browser with minimal dependence on server-side services.

In this talk we will illustrate the use of WebAssembly and WebGL to create platform agnostic visualization applications for mechanical CAD drawings.`,
      language: "EN",
      slide:
        "https://speakerdeck.com/caddi_eng/visualization-of-mechanical-cad-drawings-using-webassembly-and-webgl",
    },
    roomB: {
      speakers: [
        { image: "/static/2019/speakers/zoom_zoomzo.jpg", name: "Osuke Sudo" },
      ],
      title: "Rustで安全に実装するための心得",
      abstract: `私は普段、業務でRustを用いて暗号やブロックチェーンのプロトコル実装、サーバーサイド実装、OSSとしてプライバシーを考慮したブロックチェーンであるZerochain(https://github.com/LayerXcom/zero-chain)などの開発を行っています。
Rustはメモリ安全性などの観点からC/C++と比較して”安全”なプログラミング言語であると表現されますが、実際には開発者が気をつけて実装しなければならない点はまだ多くあります。
今回の講演ではZerochainの開発を通して得た実践的かつ汎用的に応用できる実装セキュリティのノウハウやRust開発者が安全性面で気をつけなければならないことをお伝えできればと考えております。

具体的な内容としては、メモリリーク、安全な乱数生成、pub キーワードによる外部参照の危険性、unsafeキーワードの利用、テスト手法、安全性向上のためのツール紹介などの予定です。`,
      language: "JA",
    },
  },
  {
    startTime: "11:40 - 12:10",
    roomA: {
      speakers: [{ image: "/static/2019/speakers/tkato.jpg", name: "tkato" }],
      title: "エッジMLシステムをC/C++からRustへ移行した事例",
      abstract: `我々は、ドライブレコーダーに組み込んで運用しているML(Machine Learning: 機械学習)システムの実装言語をC/C++からRustに移行しました。

Rustへの移行目的は、品質と生産性の向上です。デバイスへデプロイするシステム は簡単に変更できないため高い品質が求められます。また最新のアルゴリズムを短 期間で実装・テスト・デプロイするためには言語やその周辺ツールの生産性の高さ が求められました。もちろんリソースの少ないデバイスを対象としたため、C/C++同等やそれ以上の性能も必要でした。

本発表では、同様にC/C++からRustへの移行を検討している方や、MLシステムを構 築している方の参考になるように、Rustをプロダクト開発で使うために解決した以 下のようなトピックについて説明します。

- C/C++で開発する上での課題とRustで解決されたことはなにか
- C/C++から移行する上での技術的な課題や学習コストをどう乗り越えたか
- テストやドキュメント、デプロイの自動化などをどうするか
- ディープラーニングや画像処理、それらの性能計測をRustでどう実装するか`,
      language: "JA",
      slide:
        "https://docs.google.com/presentation/d/1HOL9jheJnKkh2q7w3hU_px-je1qL7lxrSXV-0P1hces/edit#slide=id.p1",
    },
    roomB: {
      speakers: [
        { image: "/static/2019/speakers/eric.jpg", name: "Eric Findlay" },
      ],
      title: "Lifetimes: A Survival Guide",
      abstract: `The first section discusses some ways of viewing Rust's borrow system. We'll
first present Rust's borrow system as a compromise between encapsulation and
efficiency. We'll take a close look at memory and the significance of the
stack, and then look at how Rust's borrow system handles problems with reading, writing and indeterminism. On this foundation we introduce lifetimes. We then look at two techniques that reduce the number and intractability of borrow check errors. The first technique is to consciously separate out data and
pointers in data-structures, with a goal of doing little as possible with the
data and as much as possible with references. This serves the dual role of
reducing re-allocation and making lifetimes easier to understand and handle.
The second technique presented is to make a conscious choice between the use of references and the use of indices and to understand the payoffs between these two approaches. Hopefully, being aware of these techniques will make it easier to take a more structured approach to handling lifetimes earlier in the design process and to avoid ad-hoc lifetime handling.

`,
      language: "EN",
      slide: "https://github.com/ericfindlay/lifetimes_presentation",
    },
  },
  {
    startTime: "12:10 - 13:30",
    roomA: {
      speakers: [{ image: "", name: "" }],
      title: "Lunch",
      abstract: "",
      language: "",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "Lunch",
      abstract: "",
      language: "",
    },
  },
  {
    startTime: "13:30 - 14:00",
    roomA: {
      speakers: [
        { image: "/static/2019/speakers/termoshtt.png", name: "termoshtt" },
      ],
      title: "Rustによる数値計算の現状と課題",
      abstract:
        "多くの数値計算ライブラリはFortranやC++で書かれており、これらの代替としてRustが注目されており、いくつかのコアとなるライブラリの開発も進んでいます。この講演ではRustのゼロコスト抽象化を数値計算ライブラリの設計にどうやって応用していくかについて議論し、その有用性と今のRust数値計算エコシステムに足りていない事についてまとめる事で、より多くの数値計算エンジニアにRustを広める事を目指します。",
      language: "JA",
      slide:
        "https://docs.google.com/presentation/d/1iujcfg2y3CMMgEO8BvX2__w_dbl4zQWQrK3ULaStD4E/edit?usp=sharing",
    },
    roomB: {
      speakers: [
        {
          image: "/static/2019/speakers/aimee.JPG",
          name: "Aimee",
        },
        {
          image: "/static/2019/speakers/brson.png",
          name: "Brian Anderson",
        },
      ],
      title: "Build a VM in Rust",
      abstract: `Our team built CKB VM on top of RISC-V -- an open-source instruction set architecture -- and created a powerful blockchain VM that unlocks new potential in the blockchain space.

In this talk, I'll share how the team built a flexible and performant VM with Rust, and how the CKB VM enables new possibilities in programming blockchains.`,
      language: "EN",
      slide: "https://rust-in-blockchain.github.io/rust-vm/",
    },
  },
  {
    startTime: "14:10 - 14:40",
    roomA: {
      speakers: [
        { image: "/static/2019/speakers/onoue.jpg", name: "Yosuke Onoue" },
      ],
      title: "Web-based Data Visualization with Rust and WebAssembly",
      abstract:
        "Webベースのデータビジュアライゼーションの需要は高まっていますが、大量のデータをWebブラウザ上で処理するためにはパフォーマンス上の課題が発生します。そのようなWebでのパフォーマンス上の課題を解決するために、WebAssemblyと呼ばれるWebブラウザ上で実行可能なバイナリフォーマット言語が新たに整備されてきました。WebAssemblyはRustによって公式にサポートされているため、Rustの表現力とパフォーマンスの恩恵を受けながらWebAssemblyを用いた開発を行うことができます。本セッションでは、WebAssemblyの概要やRustによるWebAssembly開発の方法、RustとWebAssemblyの今後の展望をネットワークビジュアライゼーションでの事例を混じえてご紹介します。",
      language: "JA",
      slide:
        "https://speakerdeck.com/likr/web-based-data-visualization-with-rust-and-webassembly",
    },
    roomB: {
      speakers: [
        { image: "/static/2019/speakers/cybai.jpg", name: "Cheng-You Bai" },
      ],
      title: "The Hitchhiker’s Guide to Servo Contributor",
      abstract: `I will share my experience about contributing to Servo.

Also, I will share some my thoughts about
- what Servo project is
- how to contribute to Servo
- how to find tasks to do
- how to test what you implemented
`,
      language: "EN",
      slide:
        "https://speakerdeck.com/cybai/the-hitchhikers-guide-to-servo-contributor",
    },
  },
  {
    startTime: "14:50 - 15:20",
    roomA: {
      speakers: [{ image: "/static/2019/speakers/saito.png", name: "斎藤" }],
      title: "いつの間にか社の中核製品にRustが使われていた件について",
      abstract: `オプティムでは第4次産業革命を担う企業として「世界一、AIを実用化する企業になる」というスローガンのもと様々なサービスを開発しています。そんなオプティムの中核製品であるAI Cameraは高速な画像解析を低コストで導入するサービスです。このAI Cameraのコア部分にはRustを採用しており、その高速性・安定性を支えています。
 
今回の講演では、齋藤が勝手に使っていたRustがいつの間にか中核製品に使われるようになるまでの経緯として、各プロジェクトをRustの特徴とともに紹介します。
`,
      language: "JA",
    },
    roomB: {
      speakers: [
        { image: "/static/2019/speakers/sugino.jpg", name: "Yoshinori Sugino" },
      ],
      title: "NuttX/Cortex-M4FへのRust libstdの移植と簡易Webサーバーの試作",
      abstract: `RTOSであるNuttX向けにRust libstdを移植し、それを使用した簡易WebサーバーをCortex-M4F搭載ボード上で動作させ、移植に取り組む中で多くの問題に直面し解決してきた。本発表では、libstdの移植を行う際の知見を共有する。
組み込み向けでのRustの利用は、no_std環境で多く行われている。しかし、libstdを用いないno_std環境での開発は制限が多い。そこで、様々な製品に採用実績のあるRTOSであるNuttX上でlibstdを動作させることを考えた。libstdが動作すれば、様々なRustアプリケーションがマイコンボード上で動作可能となる。
NuttXはPOSIX-likeなインターフェースを持つため、Linuxのコンフィグをベースに移植を行った。std::vec, std::thread, std::net, std::fs などのモジュールをNuttX上で動作させるために、libstdとNuttXの両方に変更や追加実装を行った。それらのモジュールを利用する簡易Webサーバーを実装し、PCのWebブラウザを使ってNuttX上のファイルにアクセスできることを確認した。`,
      language: "JA",
      slide:
        "https://speakerdeck.com/sgy/cortex-m4f-and-prototyping-a-simple-web-server",
    },
  },
  {
    startTime: "15:20 - 16:00",
    roomA: {
      speakers: [{ image: "", name: "" }],
      title: "Break",
      abstract: "",
      language: "",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "Break",
      abstract: "",
      language: "",
    },
  },
  {
    startTime: "16:00 - 16:30",
    roomA: {
      speakers: [
        {
          image: "/static/2019/speakers/norisuke.png",
          name: "高藤 謙佑 (Norisuke Takafuji)",
        },
      ],
      title: "Rustを採用したサービス開発事例について",
      abstract: `CADDiでは主な開発言語としてRustを採用しています。
ドメイン駆動設計と呼ばれる設計手法を利用し複雑な要件を持つサービスの開発をRustで行っている事例についてご紹介できればと思います。`,
      language: "JA",
      slide: "https://speakerdeck.com/caddi_eng/rust-tokyo-session",
    },
    roomB: {
      speakers: [
        { image: "/static/2019/speakers/qnighy.jpg", name: "Masaki Hara" },
      ],
      title: "Making an opinionated Web framework",
      abstract: `Some Web frameworks such as Ruby on Rails intentionally force a specific software architecture and, as a result, called opinionated frameworks. Opinionated frameworks have several advantages: a standardized directory layout helps newbies to understand the codebase. They are also designed to guide programmers to adapt the program to the corresponding software architecture. So the codebase will be more tolerant of rapid growth. I think that such an opinionated Web framework written in Rust would accelerate Rust adoption in the Web programming area. I'm attempting to make it by myself, using existing Web frameworks as a reference. In this talk, I'd like to describe how I thought and learned during design and implementation.`,
      language: "JA",
    },
  },
  {
    startTime: "16:40 - 17:10",
    roomA: {
      speakers: [
        {
          image: "/static/2019/speakers/tatsuya_sato.jpg",
          name: "Tatsuya Sato",
        },
      ],
      title: "Holochain ～真の分散型P2PアプリをRustで作ろう！～",
      abstract:
        "欧米にてポストBlockchainと称されるHolochainのアーキテクチャを紹介し、Rustプログラミングとの親和性についてもお話しできればと思います。また簡単なHolochainアプリをRustで作る方法も説明しようと思います。",
      language: "JA",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "Lightning talks",
      abstract: "",
      language: "",
    },
  },
  {
    startTime: "17:20 - 17:50",
    roomA: {
      speakers: [
        { image: "/static/2019/speakers/argorak.png", name: "Florian Gilcher" },
      ],
      title: "Contributing to Rust",
      abstract: `With around 70 teams, 200 members and 5000 contributors, Rust is a large project. It also wants to be a welcoming and international one! So where to go when you want to among them?

This session will give you a practical guidance to start contributing to the Rust project, either the compiler or other parts of it. This can range from technical changes to documentation or translation. You will learn:

    * Find out what you want to contribute
    * How the project works in general
    * How to find your way around the project
    * How to find your peers to work on your contribution
    * How to communicate over timezones and language barriers

Rust will be changing, so the session will also equip you with the skills to follow these changes.`,
      language: "EN",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "",
      abstract: "",
      language: "",
    },
  },
  {
    startTime: "18:00 - 20:00",
    roomA: {
      speakers: [{ image: "", name: "" }],
      title: "Networking Time",
      abstract: "",
      language: "",
    },
    roomB: {
      speakers: [{ image: "", name: "" }],
      title: "Networking Time",
      abstract: "",
      language: "",
    },
  },
];

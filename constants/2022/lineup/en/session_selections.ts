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
  speaker4,
  speaker5,
  speaker6,
  sponsor1,
  sponsor2,
} from "../speaker";

export const selectedSessions: SelectedSession[] = [
  // TODO
  {
    title: "mini_live2d_rsの開発によって得られた経験",
    elevatorPitch:
      "私が開発しているmini_live2d_rsで得られた経験や知見を紹介したいと思います。 mini_live2d_rsはLive2DのCore SDKをRustで操作するライブラリであり、Live2Dは一枚のイラストから2Dアニメーションを作ることができるライブラリで主にゲームやVTuberの立ち絵などで使われています。 Rustを採用した結果、高速な動作やメモリ操作に関するバグが混入しにくいことやrustcが優秀なことから開発体験の良さなどがメリットが享受できました。一方で初学者にとって所有権などの概念を習得する難しさがありました。これらについて紹介していきたいと思います。",
    speaker: [speaker1],
    description: "",
    pagePath: "/2022/lineup/en/1",
    ...session1Base,
  },
  // TODO
  {
    title: "Rust で型安全な SPA 開発",
    elevatorPitch:
      "本発表では、フロントエンド開発において Rust を採用して SPA を作成した際の利点やその課題について紹介します。\n" +
      "プロダクト開発に Rust を採用するプロジェクトは増えてきていますが、その多くはバックエンドが中心です。Rust はその信頼性や生産性の高さが魅力的で、その魅力をフロントエンド開発にも活かしたいと考え、いくつか GUI を持つ運用ツールを実装しました。\n" +
      "seed- rs と iced での事例から、使ってよかった点と苦労した点を紹介し、今後のフロントエンド開発への Rust 適用の展望について語ります。",
    speaker: [speaker2],
    description: "",
    pagePath: "/2022/lineup/en/2",
    ...session2Base,
  },
  // TODO
  {
    title: "RustのSchema First GraphQLライブラリrusty-gqlを作った話",
    elevatorPitch:
      "本発表では私が開発したRustのSchema First GraphQLライブラリであるrusty-gqlの紹介やその実装詳細について説明します。\n" +
      "GraphQL処理系の実装方法、rusty-gqlを開発する中で得た知見、RustでGraphQLサーバーを実装することの意義について発表します。",
    speaker: [speaker3],
    description: "",
    pagePath: "/2022/lineup/en/3",
    ...session3Base,
  },
  {
    title: "YJIT: Dive into Ruby's JIT compiler written in Rust",
    elevatorPitch:
      "Have you ever written a compiler in Rust? You wanna try writing one someday? It’s so much fun! In this talk, you’ll explore the overview of a JIT compiler we’re developing, learn how Rust plays a role in implementing optimizations, and see the challenges we’re facing in interpolating it in Ruby.",
    speaker: [speaker4],
    description: "",
    pagePath: "/2022/lineup/en/4",
    ...session4Base,
  },
  // TODO
  {
    title: "実務でのRustとImageMagickによる画像合成サーバーの開発",
    elevatorPitch:
      "この発表ではRustとImageMagickでどのように画像合成サーバーを開発しているかについて話します。SUZURIというサービスでTシャツといったアイテムにユーザーがアップロードした画像をプリントしたかのように見せるプレビュー画像をつくっています。その画像合成サーバーに新しくRustを採用し、既存の画像合成サーバーからの移行を進めています。RustとImageMagickによる画像処理、またRustのWebアプリケーションを本番で運用するために工夫していることについて話し、まだまだ多くないであろう国内における実務でのRust採用の後押しに貢献できればと考えています。",
    speaker: [speaker5],
    description: "",
    pagePath: "/2022/lineup/en/5",
    ...session5Base,
  },
  {
    title: "Learning Rust via implementing algorithms",
    elevatorPitch:
      "One way to get into Rust is via implementing algorithms. Although it’s okay to use some online services, I’d suggest setting things up locally. To make the learning process smoother, one needs quick ideas on how to start: a project structure, libraries, tests, profiling, etc. I can address all that.",
    speaker: [speaker6],
    description: "",
    pagePath: "/2022/lineup/en/6",
    ...session6Base,
  },
  // TODO
  {
    title: "フェアリーデバイセズがRustを採用して3年が過ぎました",
    elevatorPitch:
      "2019年にプロダクト採用を決め、Rustコミュニティにもお世話になりながら3年間走ってきました。小規模なHTTPサーバーからはじめ、音声認識のAPIサーバー、SaaSプロダクトおよび周辺のツールなど、当社のプロダクト開発の足跡を辿りながら、「Rustを使ってよかった点／苦労した点」を紹介します。当初1人からRustプロダクトを作り始めて複数名で開発できる状況になるまでの過程も含め、Rustを使って開発したいエンジニアおよびこれからの採用を考えている会社の皆様に有意義なお話ができればと思います。",
    speaker: [sponsor1],
    description: "",
    ...sponsor1Base,
  },
  // TODO
  {
    title: "GraphQL-gRPCなBFFをRustで作って案件で使ってみた@ゆめみ",
    elevatorPitch:
      "Web開発界隈で、やれ非同期だ、Node.jsだ、Goだと叫ばれるようになって早数年、API開発のあり方は急速に発展しました。弊社ではもう一つの選択肢としてRustに重点的に投資していく方針が決定し、技術調査が盛んに行われています。今回実際のWeb開発案件に導入する運びになりましたので、どういう選定が行われたのか、どういう壁があったのか、レポートの形で赤裸々に語らせていただきたいと思います。RustでWeb開発、いけるぞ！",
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

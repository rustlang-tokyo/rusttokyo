import { Heading, Text } from "@chakra-ui/layout";
import { Code, Link, ListItem, UnorderedList } from "@chakra-ui/react";

const Lineup1 = () => {
  return (
    <>
      <Text pb={4}>
        私がRustを使った開発で経験したことをmini_live2d_rsと共に紹介していきます。
        mini_live2d_rsはLive2DのCore SDKを操作できるライブラリです。
        Live2Dは一枚のイラストから2Dアニメーションを作ることができるライブラリで主にゲームやVTuberの立ち絵などで使われています。mini_live2d_rsはまだ開発途中ですが、簡単なアニメーションを再生することができます。
        私がRustを選択した理由として、高速に動作することとメモリ操作のバグを混入しにくいことが挙げられます。特にC言語にあまり馴染みがない私にとって、メモリ操作のバグが混入しにくいのは実行時に原因不明のエラーが少ないという安心感を持って開発できる利点が大きいです。このようなRustを選択する理由について紹介したいと思います。
        またRustは一般的に学習難易度が高いと言われており、私にとっても習得は難しいものでした。特に所有権の概念を正しく理解しなければコンパイルすらできません。ですが、学習が進むとrustcの優秀さや記法の自由度から逆に開発体験が良くなっていきました。このようなRustを選択したことによって得られた開発体験についても紹介したいと思います。
        最後にmini_live2d_rsとRustを使った開発について今後の展望を紹介できたらと思います。
      </Text>
    </>
  );
};

const Lineup2 = () => {
  return (
    <>
      <Heading as="h3" size="md">
        背景
      </Heading>
      <Text pb={4}>
        Rust が好き
        で、自社ではサービスのバックエンドに採用して実運用しています。
      </Text>
      <Text pb={4}>
        Rust
        はエコシステムが充実しており、信頼性や速度も高性能であるため、そこに非常に助けられています。環境構築が容易であること、強力な型システムや
        borrow checker による信頼性、C 言語並の速度が魅力だと感じています。
      </Text>
      <Heading as="h3" size="md">
        目的
      </Heading>
      <Text pb={4}>フロントエンド開発でも Rust の恩恵を受けたい！</Text>
      <Text pb={4}>
        今の顧客向けフロントエンドでは TypeScript
        を使っていて、開発は早いが悩みもあります。(any
        で型安全性が下がったり、環境構築が大変だったりなど)
      </Text>
      <Text pb={4}>
        Rust のフロントエンド (GUI) crate も色々出てきてるし試してみたい！
      </Text>
      <Heading as="h3" size="md">
        やったこと
      </Heading>
      <Text pb={4}>
        運用ツールに取り入れて使ってみました。バックオフィス向け GUI
        アプリです。 Web 向けフロントエンドである seed-rs
        を使ったアプリと、デスクトップ GUI crate の iced を使ったアプリの 2
        つを作りました。 運用パラメータを変更するためのツールや、テストでの API
        呼び出しや設定変更で社内で活用しています。
      </Text>
      <Heading as="h3" size="md">
        作ってみてどうだったか
      </Heading>
      <Text pb={4}>
        双方とも The Elm Architecture ベースで、自身は Elm と Rust
        経験者なのでとっつきやすさはありました。一般的な SPA
        として使っています。
      </Text>
      <UnorderedList pb={4}>
        <ListItem>seed-rs (+ actix-web)</ListItem>
        <UnorderedList>
          <ListItem>
            モチベーション: DB にて直接 SQL クエリーを直接実行するのをやめて
            HTTP でやりたい。
          </ListItem>
          <ListItem>メリット</ListItem>
          <UnorderedList>
            <ListItem>
              バックエンドも一緒に作ったので、HTTP でやり取りする JSON
              の構造体定義を共有できてうれしかった。
            </ListItem>
            <ListItem>
              DOM ツリーを構築するので、スタイルを CSS
              フレームワークに任せられる。
            </ListItem>
          </UnorderedList>
          <ListItem>デメリット</ListItem>
          <UnorderedList>
            <ListItem>
              独自コンポーネントを作成するには型パラメーターの理解など難しい要素がある。
            </ListItem>
          </UnorderedList>
        </UnorderedList>
        <ListItem>iced</ListItem>
        <UnorderedList>
          <ListItem>
            モチベーション: QA
            チームなど非エンジニアでも扱える運用ツールを作りたい。
          </ListItem>
          <ListItem>メリット</ListItem>
          <UnorderedList>
            <ListItem>
              ボタンなど UI 要素が抽象化されていて実装しやすい。
            </ListItem>
            <ListItem>
              (Rust の規模の大きい crate はだいたいそうですが、)
              サンプルがたくさんあるので参考にしながら実装できる。
            </ListItem>
          </UnorderedList>
          <ListItem>デメリット</ListItem>
          <UnorderedList>
            <ListItem>レイアウトをきれいに調整するのに手がかかる。</ListItem>
            <ListItem>独自コンポーネントを作るのはかなり大変。</ListItem>
          </UnorderedList>
        </UnorderedList>
      </UnorderedList>
      <Heading as="h3" size="md">
        今後の展望・課題
      </Heading>
      <Text pb={4}>
        今回の発表は作ったものの紹介ですが、Rust のフロントエンドというと egui
        や dioxus など様々な crate があります。 まだ使用していない GUI crate
        について、いくつか紹介・比較してみたいと思います。 (e.g. egui, Dioxus,
        Tauri, Bevy)
      </Text>
      <Text pb={4}>
        今回 Rust で GUI
        を作成して、やはりデータ型定義まわりがやりやすかったのが印象的でした。(serde
        を使えるのが良い。) また、enum と match
        でコンポーネントを振り分けたりなど Rust 特有の良さもあると感じました。
        しかし、総じて crate で独自コンポーネントの作成が難しく、主にスタイル
        (UI の見た目) の調整が大変でした。 キレイでスタイルの調整がやりやすい
        crate が現れれば、あるいは iced
        向けのコンポーネントセットなどが現れれば、業務で Rust GUI
        を作るのもやりやすくなっていくと思われます。
      </Text>
    </>
  );
};

const Lineup3 = () => {
  return (
    <>
      <Text pb={4}>
        本発表では私が作成したRustのGraphQLライブラリ
        <Link href="https://github.com/Tak-Iwamoto/rusty-gql" isExternal>
          rusty-gql
        </Link>
        について発表します。
      </Text>
      <Text pb={4}>
        これまでRustのGraphQLライブラリは
        <Link href="https://github.com/graphql-rust/juniper" isExternal>
          juniper
        </Link>
        と
        <Link href="https://github.com/async-graphql/async-graphql" isExternal>
          async-graphql
        </Link>
      </Text>
      <Text pb={4}>
        これら2つはCode
        Firstで設計されており、GraphQLのスキーマ定義をRustのマクロを使用して定義します。
      </Text>
      <Text pb={4}>
        一方、私自身GraphQLのサーバー実装はSchema
        Firstの方が適していると考えています。
      </Text>
      <Text pb={4}>
        GraphQLはUIに応じたtree構造でデータを返却できることが特徴です。つまり、クライアントサイドエンジニアのためのものなので、フロントエンドやモバイルエンジニアの方もスキーマ設計に参加することが重要です。
      </Text>
      <Text pb={4}>
        現状クライアントサイドのエンジニアにとってRustはあまり馴染みのある言語ではないケースが多いため、
        <Code>.graphql</Code>ファイルで設計が開始できるSchema
        Firstのアプローチが適していると考えます。
      </Text>
      <Text pb={4}>具体的には以下の項目についてお話しします。</Text>
      <UnorderedList pb={4}>
        <ListItem>rusty-gqlの機能紹介とその設計</ListItem>
        <ListItem>開発する中で得た知見</ListItem>
        <ListItem>
          RustでどのようにGraphQL処理系を実装するのか実際のコードを交えて紹介
        </ListItem>
      </UnorderedList>
      <Text pb={4}>
        このセッションがGraphQLに馴染みのないRustaceanやRustに興味があるWebアプリケーション開発者にとって意義のある発表となることを目指します。
      </Text>
    </>
  );
};

const Lineup4 = () => {
  return (
    <>
      <Text pb={4}>
        This talk will go over the architecture overview of a JIT compiler
        written in Rust by Shopify, YJIT. While the optimization target is Ruby,
        I&apos;ll show only easy code that could be understood even if you
        haven&apos;t used Ruby. Also, I will not require any compiler-related
        knowledge to understand the talk so that anybody could enjoy this talk.
      </Text>
      <UnorderedList pb={4}>
        <ListItem>How a JIT compiler works</ListItem>
        <UnorderedList>
          <ListItem>What is bytecode?</ListItem>
          <ListItem>
            Intermediate representation: We started using Rust to implement this
            easily.
          </ListItem>
          <ListItem>Codegen backend: x86_64, arm64</ListItem>
        </UnorderedList>
        <ListItem>Optimizations</ListItem>
        <UnorderedList>
          <ListItem>
            An overview of Basic Block Versioning: a JIT compiler design used by
            YJIT
          </ListItem>
          <ListItem>
            How Rust structs are used for optimizing Ruby&apos;s bytecode
          </ListItem>
        </UnorderedList>
        <ListItem>Challenges</ListItem>
        <UnorderedList>
          <ListItem>
            {"C <-> Rust interop: bindgen and lots of unsafe :)"}
          </ListItem>
        </UnorderedList>
      </UnorderedList>
    </>
  );
};

const Lineup5 = () => {
  return (
    <>
      <Text pb={4}>
        この発表ではRustとImageMagickでどのように画像合成サーバーを開発しているかについて話し知見を共有します。
        SUZURIというサービスでTシャツといったアイテムにユーザーがアップロードした画像をプリントしたかのように見せるプレビュー画像をつくっています。
        その画像合成サーバーに新しくRustを採用し既存の画像合成サーバーからの移行を進めています。画像処理する際にRustからFFIでMagickWandというImageMagickが提供しているCのAPIを呼び出しています。
        そして画像のリサイズや合成といったものから、合成した画像が自然に見えるようにしわのように見える歪みを与えるなどの処理を行っています。
        また、RustでWebアプリケーションを実装する上でまだまだエコシステムにほしい機能がないといったときがあります。
        本発表ではこのようなときに工夫している点について知見を共有します。この発表によって多くないであろう国内における実務でのRust
        採用の後押しに貢献できればと考えています。
      </Text>
    </>
  );
};

const Lineup6 = () => {
  return (
    <>
      <Text pb={4}>
        Implementing algorithms is a common way to get into a programming
        language. Although it&apos;s okay to use some online services to do
        that, I believe that setting things up locally is much more beneficial
        as we get into a language and a professional development environment. In
        this talk, I&apos;ll give many suggestions and demonstrate how to
        organize such an environment with learning algorithms in mind: a project
        structure, the required parts of Rust standard library and useful
        external dependencies, approaches to testing, ways to measure time and
        do benchmarking, controlling memory usage, etc.
      </Text>
    </>
  );
};

const Lineup7 = () => {
  return (
    <>
      <Text pb={4}>
        オープニング・セッションでは、Rust.Tokyo
        チームより開催のご挨拶を行います。
      </Text>
    </>
  );
};

export const LineupDatabaseJa = [
  {
    id: 1,
    component: Lineup1,
  },
  {
    id: 2,
    component: Lineup2,
  },
  {
    id: 3,
    component: Lineup3,
  },
  {
    id: 4,
    component: Lineup4,
  },
  {
    id: 5,
    component: Lineup5,
  },
  {
    id: 6,
    component: Lineup6,
  },
  {
    id: 7,
    component: Lineup7,
  },
];

export const LineupDatabaseEn = [
  {
    id: 1,
    component: Lineup1,
  },
  {
    id: 2,
    component: Lineup2,
  },
  {
    id: 3,
    component: Lineup3,
  },
  {
    id: 4,
    component: Lineup4,
  },
  {
    id: 5,
    component: Lineup5,
  },
  {
    id: 6,
    component: Lineup6,
  },
  {
    id: 7,
    component: Lineup7,
  },
];

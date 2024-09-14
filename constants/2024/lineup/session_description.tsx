import { Text } from "@chakra-ui/layout";
import { Code, Link, ListItem, UnorderedList } from "@chakra-ui/react";

const Lineup1 = () => {
  return (
    <>
      <Text pb={4}>
        弊社Ideinでは2017年からRustを積極的に開発に用いて、ActcastというIoTプラットフォームを運用を行っています。現在では１万台を超えるデバイスを管理し、その要となるアプリケーションはRustを用いて実装されています。
      </Text>
      <Text pb={4}>
        信頼性・パフォーマンスが極めて重要なIoTプラットフォーム開発において、Rustの安全性と高いパフォーマンスは私たちの開発を支えてきました。
      </Text>
      <Text pb={4}>
        一方で、早期からRustを使っていたからこそ発生した苦悩もあります。Rustの進化によりコードの書き方が大きく変わったこともあります。
      </Text>
      <Text pb={4}>
        本発表では、Rustを用いた開発についての私たちの具体的な経験と学び、そしてそれらがどのように私たちの開発プロセスに影響を与えたかについて、皆様と共有したいと思います。私たちの経験が、Rustを実際の製品開発に活用しようと考えている皆様の一助となれば幸いです。
      </Text>
    </>
  );
};

const Lineup2 = () => {
  return (
    <>
      <Text pb={4}>
        RustのWebフレームワークにおいて、後発であるaxumの人気が上がり続けています。axum
        はtokio-rs チームによりメンテナンスされており、tokioがベースとなっている
        Webフレームワークです。
      </Text>
      <Text pb={4}>
        axum は後発のフレームワークなこともあり、actix-web
        のようにハンドラーがResultや文字列を返すだけでちょうどいい感じのHTTPステータスをセットして返せたり、レスポンスをカスタマイズするためにはそれらに
        trait を実装するだけで実現できます。またhyper
        のように共通処理をサービスとして定義してレイヤーを重ねることで、トレーシングのような横断的な機能を追加する仕組みもあります。
      </Text>
      <Text pb={4}>
        axum ではこれらの機能の裏側には tower
        というライブラリが使われています。tower は{" "}
        <Code>{"async fn(Request) -> Result<Response, Error>"}</Code>{" "}
        と説明されており、そのような抽象化レイヤーを提供してくれます。そのため
        axum に向けて作った tower のミドルウェアは tower
        に依存する別のフレームワークでも利用しやすく、towerのサービス概念は汎用的なパターンにもなっており、towerを使わないフレームワークにも移植しやすいです。このように
        tower は Rust の
        Webフレームワークにおいてちょうどいい抽象化層を提供してくれます。
      </Text>
      <Text pb={4}>
        筆者はサーバーサイド開発の技術選定を行う際に、メンテナビリティを重視するようにオーダーを受け、Rustとaxumを導入しました。しかし選定最中はエコシステムが安定しているかという点を気にしており、採用は少し後ろ向きに考えていました。しかしaxum
        を選定すれば tower
        のような抽象化層のおかげでFWが乗り換え可能であることに気づいたことが後押しとなって選定しました。
      </Text>
      <Text pb={4}>
        このトークでは axum や tower の実装を読み解きながら Rust での HTTP
        サーバーの構築の方法を解説します。また、Rustでサーバーを書き始めた初学者にとってはただ文字列やResultを返すだけでレスポンスがHTTPのフォーマットに従うことも不思議に感じると思うので、その仕組みを読み解きながらその裏にもtowerがいることに触れて、towerについて解説します。
      </Text>
    </>
  );
};

const Lineup3 = () => {
  return (
    <>
      <Text pb={4}>
        普段の開発は別の言語、私の場合はC#ですが、幾つかの理由でネイティブコードを書かなければならないシチュエーションがあります。例えば
      </Text>
      <UnorderedList>
        <ListItem>
          Android NDK や Unity Native Plugin Interface
          など、ネイティブAPIしか提供されていないものを使いたい場合
        </ListItem>
        <ListItem>
          CやC++, Rust で作られているネイティブライブラリを利用したい場合
        </ListItem>
      </UnorderedList>
      <Text pb={4}>
        {
          "こうしたFFIにおいて、従来はC++の出番でしたが、複雑さとクロスプラットフォームビルド周りに多くの困難を抱えていました。これらはRustの優れたエコシステムとビルド環境により劇的に改善することができます。 Rustの力を確信した今、RustとC#の活用を加速させるためにcsbindgenというRust <-> C#のFFIを自動化するライブラリを開発し、OSSとして今年の3月に公開しました。"
        }
      </Text>
      <Text pb={4}>
        このセッションでは、FFIにおけるRustの使い所や実装上のテクニックや、cc,
        cmake, bindgenの活用法を、 実際に
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/Cysharp/csbindgen"
        >
          csbindgen
        </Link>
        を使ってC#用のOSSとして公開しているライブラリ郡
      </Text>
      <UnorderedList>
        <ListItem>
          PhysX物理エンジン(
          <Link
            color="lightCobaltBlue.100"
            href="https://github.com/Cysharp/MagicPhysX/"
          >
            Cysharp/MagicPhysX
          </Link>
          )
        </ListItem>
        <ListItem>圧縮ライブラリ</ListItem>
        <ListItem>UnityのためのgRPCクライアント</ListItem>
      </UnorderedList>
      <Text pb={4}>の事例を元にして説明します。</Text>
    </>
  );
};

const Lineup4 = () => {
  return (
    <>
      <Text pb={4}>
        Mokaは私が2021年から継続的に開発している並行キャッシュライブラリです。
        <Link color="lightCobaltBlue.100" href="https://crates.io/">
          crates.io
        </Link>
        や
        <Link color="lightCobaltBlue.100" href="https://sentry.io/welcome/">
          sentry.io
        </Link>
        のバックエンドに採用され、高負荷なサービスを支えています。
      </Text>

      <Text pb={4}>
        本セッションではMokaの開発を通して得られた経験や課題を共有します。ヒット率の向上のようなキャッシュ固有の話題に触れた後、非同期ランタイムの並行性を損なわないデータ構造の選択方法など、一般的な並行プログラミングに応用できる知識を紹介します。
      </Text>

      <UnorderedList>
        <ListItem>キャッシュに求められる要件と実現方法 </ListItem>
        <UnorderedList>
          <ListItem>ヒット率を高めるアルゴリズム</ListItem>
          <ListItem>
            <Code>Arc&lt;RwLock&lt;_&gt;&gt;</Code>
            は不要。並行プログラミングでもシンプルに使えるAPI
          </ListItem>
        </UnorderedList>
        <ListItem>並行性を高める手法 </ListItem>
        <UnorderedList>
          <ListItem>
            <Code>Atomic*</Code>型、ロック競合の軽減、ロックフリーデータ構造など
          </ListItem>
        </UnorderedList>
        <ListItem>課題と展望</ListItem>
        <UnorderedList>
          <ListItem>unsafe Rustにまつわるバグの予防とデバッグなど</ListItem>
        </UnorderedList>
      </UnorderedList>
    </>
  );
};

const Lineup5 = () => {
  return (
    <>
      <Text pb={4}>具体的には以下のような項目について紹介予定です。</Text>
      <UnorderedList>
        <ListItem>開発背景の共有 - Roggol とは</ListItem>
        <ListItem>Rust での開発前後で想定通り/想定外だったこと</ListItem>
        <ListItem>コンパイルはそんなに遅くない</ListItem>
        <ListItem>
          学習コストはそんなに高くない（むしろ学習速度は高い）
        </ListItem>
        <ListItem>Rust での開発で苦労したこと</ListItem>
        <ListItem>
          汎用アプリケーション実装 x Rust は動的な対応が難しい
        </ListItem>
        <ListItem>unwrap はやっぱり良くない</ListItem>
        <ListItem>Rust での開発で報われたこと</ListItem>
        <ListItem>実行速度が高い！</ListItem>
        <ListItem>イメージサイズが小さい！ </ListItem>
      </UnorderedList>
    </>
  );
};

const Lineup6 = () => {
  return (
    <>
      <Text pb={4}>
        I am the project management lead of the Ferrocene project @ Ferrous
        Systems.
      </Text>

      <Text pb={4}>
        The Ferrocene project plans to release the whole codebase discussed here
        (including documentation material, etc.) as open source by October 4th,
        before the conference. This is not reflected in the public pieces
        because of this proposal yet, to not put undue pressure and questions on
        the technical team.
      </Text>
    </>
  );
};

const Lineup1_en = () => {
  return (
    <>
      <Text pb={4}>
        {
          "At Idein, we have actively utilized Rust in our development since 2017, operating IoT platform called Actcast. Currently, Actcast can manage over 10,000 devices, and the core applications are implemented using Rust."
        }
      </Text>
      <Text pb={4}>
        {
          "Rust's safety and high performance have supported our development in our development of IoT platform, where reliability and performance are highly important."
        }
        {
          "However, there have been challenges because we introduced Rust from early on. The evolution of Rust has also brought significant changes to our code."
        }
      </Text>
      <Text pb={4}>
        {
          "In this presentation, I would like to share our specific experience and learning in our development using Rust, and how they have affected our development process. We hope that our experience will be a valuable resource for you considering introducing Rust in your product development."
        }
      </Text>
    </>
  );
};

const Lineup4_en = () => {
  return (
    <>
      <Text pb={4}>
        Moka is a concurrent cache library that I have been developing since
        2021. It is used in the backend services of{" "}
        <Link color="lightCobaltBlue.100" href="https://crates.io/">
          crates.io
        </Link>{" "}
        and{" "}
        <Link color="lightCobaltBlue.100" href="https://sentry.io/welcome/">
          sentry.io
        </Link>
        , for example, to support their high traffic web services.
      </Text>

      <Text pb={4}>
        In this session, I will share my experiences and challenges gained
        through the development of Moka. I will start with cache specific topics
        such as improving hit rates. And then I will present some knowledge that
        can be applied to general concurrent programming, such as how to choose
        a right data structure that will not spoil concurrency in asynchronous
        runtimes.
      </Text>

      <UnorderedList>
        <ListItem>
          Requirements of a cache library and how to achieve them.{" "}
        </ListItem>
        <UnorderedList>
          <ListItem>Algorithms to increase the hit rate.</ListItem>
          <ListItem>
            <Code>Arc&lt;RwLock&lt;_&gt;&gt;</Code>. Simple API for concurrent
            programming.
          </ListItem>
        </UnorderedList>
        <ListItem>Common technics to increase concurrency. </ListItem>
        <UnorderedList>
          <ListItem>
            <Code>Atomic*</Code> types, reducing lock contentions, lock-free
            data structures, etc.
          </ListItem>
        </UnorderedList>
        <ListItem>Challenges and next steps.</ListItem>
        <UnorderedList>
          <ListItem>
            Avoiding bugs related to unsafe Rust and how to debug them, etc.
          </ListItem>
        </UnorderedList>
      </UnorderedList>
    </>
  );
};

const Lineup7 = () => {
  return (
    <>
      <Text pb={4} />
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
    component: Lineup1_en,
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
    component: Lineup4_en,
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

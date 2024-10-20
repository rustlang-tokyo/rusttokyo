import { Heading, Link, Text } from "@chakra-ui/layout";
import { Code, ListItem, UnorderedList } from "@chakra-ui/react";
import {
  session1A,
  session1B,
  session2A,
  session2B,
  session5A,
  session5B,
  session6A,
  session6B,
  session7A,
  session7B,
  session10A,
  session10B,
} from "./context";

const Session1A = () => {
  return (
    <>
      <Text pb={4}>
        Rust での大規模なプロダクト開発において、モジュール (<Code>mod</Code>)
        を使って機能を分けると各コンポーネントの責務を管理しづらくなっていきます。Cargo
        の Workspace
        機能を使うと複数クレートを一箇所で管理でき、責務を分けやすくなります。
      </Text>

      <Text pb={4}>
        特にバックエンドを開発していると、コンポーネントの責務ごとに依存したいクレートが異なる場合があります。Cargo
        Workspace を使ってクレートを分けると Cargo.toml
        も分かれるので依存関係の管理がしやすくなります。
      </Text>

      <Text pb={4}>
        自社プロダクトのバックエンド開発を 3
        年ほど継続した経験に基づくベストプラクティスを共有できればと思います。具体的には、以下に困ったり嬉しかったりしました。
      </Text>

      <UnorderedList>
        <ListItem>
          共通で依存したいクレートのバージョンを統一するにはどうすると良いか
          (1.64.0 で workspace.dependencies 機能が追加されて解決した)
        </ListItem>
        <ListItem>共通で利用したい型をどのように扱うと良いか</ListItem>
        <ListItem>外部サービスの API をモック化しやすくなった</ListItem>
        <ListItem>
          Procedural macro
          を使う場合、そもそもクレートを分ける必要がありますが、同じワークスペースの中で扱うことができます
        </ListItem>
        <ListItem>
          各クレートの name のプレフィックス or サフィックスを合わせると良い
        </ListItem>
        <ListItem>
          (自社プロダクトとは関連してないですが、) crates.io に publish するには
          cargo-release が便利
        </ListItem>
        <ListItem>etc……</ListItem>
      </UnorderedList>
    </>
  );
};

const Session1A_en = () => {
  return (
    <>
      <Text pb={4}>
        In large-scale product development in Rust, using modules (
        <Code>mod</Code>) to separate functionality makes it difficult to manage
        the responsibilities of each component. Cargo Workspace allows to manage
        multiple crates in a single place, making it easier to separate
        responsibility.
      </Text>

      <Text pb={4}>
        Especially when developing a backend product, each component
        responsibility may want to use different dependencies. Using Cargo
        Workspace to separate the crates also separates the Cargo.toml, making
        it easier to manage dependencies.
      </Text>

      <Text pb={4}>
        I would like to share best practices based on my experience of 3 years
        of continuous backend development of our own products. Examples of good
        and bad points are as follows.
      </Text>

      <UnorderedList>
        <ListItem>
          How to consist versions of dependencies in own crates (solved in{" "}
          <Code>workspace.dependencies</Code> in 1.64.0)
        </ListItem>
        <ListItem>How to handle common types</ListItem>
        <ListItem>It is easier to mock APIs of external services</ListItem>
        <ListItem>
          When using Procedural macro, it is necessary to separate the crates,
          but the crates can be in the same workspace
        </ListItem>
        <ListItem>
          It is good to match the prefix or suffix of each crate's name
        </ListItem>
        <ListItem>To publish to crates.io, cargo-release is useful.</ListItem>
        <ListItem>etc.</ListItem>
      </UnorderedList>
    </>
  );
};

const Session1B = () => {
  return (
    <>
      <Text pb={4}>
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/jnv">
          jnv
        </Link>
        という TUI アプリケーションを Rust で作成し、公開しました。
        ターミナル上で入力された JSON に対してインタラクティブに jq
        フィルタを実行できます。
      </Text>

      <Text pb={4}>以下のテーマを中心にお話しします。</Text>

      <Heading size="md">Rust における TUI ライブラリの紹介</Heading>

      <Text pb={4}>
        まず
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/ratatui/ratatui"
        >
          ratatui
        </Link>
        など Rust で利用できる TUI ライブラリについて網羅的に解説します。
      </Text>

      <Text pb={4}>
        最終的に
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/ynqa/promkit"
        >
          promkit
        </Link>
        というライブラリを作成したのでその紹介をします。
      </Text>

      <Heading size="md">jnv について</Heading>

      <Text pb={4}>
        promkit を利用した TUI アプリケーションとして
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/jnv">
          jnv
        </Link>
        ,{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/sig">
          sig
        </Link>
        ,{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/logu">
          logu
        </Link>
        を開発してきました。
      </Text>

      <Text pb={4}>
        その中でも jnv
        について、以下の技術的なポイントに焦点を当てて説明します。
      </Text>

      <UnorderedList>
        <ListItem>
          Rust での libjq への FFI バインディングを実現した
          <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/j9">
            j9
          </Link>
          の開発
        </ListItem>
        <ListItem>(部分的な) jq フィルタの自動補完機能の実装</ListItem>
      </UnorderedList>

      <Heading size="md">cargo-dist を使って homebrew で公開する</Heading>

      <Text pb={4}>
        最後に、作成した TUI アプリケーションを
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/axodotdev/cargo-dist"
        >
          cargo-dist
        </Link>
        を使って Homebrew (tap) に公開するためのノウハウを共有します。
      </Text>
    </>
  );
};

const Session1B_en = () => {
  return (
    <>
      <Text pb={4}>
        I released a TUI application called{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/jnv">
          jnv
        </Link>{" "}
        in Rust. It allows you to interactively execute jq filters on JSON input
        directly in the terminal.
      </Text>

      <Text pb={4}>In this talk, I will focus on the following themes:</Text>

      <Heading size="md">Introduction to TUI Libraries in Rust</Heading>

      <Text pb={4}>
        First, I will provide a comprehensive explanation of TUI libraries
        available in Rust, such as{" "}
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/ratatui/ratatui"
        >
          ratatui
        </Link>
        .
      </Text>

      <Text pb={4}>
        I will introduce{" "}
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/ynqa/promkit"
        >
          promkit
        </Link>{" "}
        also, I created finally.
      </Text>

      <Heading size="md">About jnv</Heading>

      <Text pb={4}>
        Using promkit, I have developed TUI applications such as{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/jnv">
          jnv
        </Link>
        ,{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/sig">
          sig
        </Link>
        , and{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/logu">
          logu
        </Link>
        .
      </Text>

      <Text pb={4}>
        Among these, I will focus on the technically significant aspects of jnv
      </Text>

      <UnorderedList>
        <ListItem>
          The development of{" "}
          <Link color="lightCobaltBlue.100" href="https://github.com/ynqa/j9">
            j9
          </Link>
          , which achieved FFI bindings to libjq in Rust
        </ListItem>
        <ListItem>
          The implementation of (partial) auto-completion for jq filters
        </ListItem>
      </UnorderedList>

      <Heading size="md">Publishing with cargo-dist via Homebrew</Heading>

      <Text pb={4}>
        Finally, I will share the knowledge for publishing the TUI applications
        using{" "}
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/axodotdev/cargo-dist"
        >
          cargo-dist
        </Link>{" "}
        and making them available on Homebrew (tap).
      </Text>
    </>
  );
};

const Session2A = () => {
  return (
    <>
      <Text pb={4}>
        このセッションは、「OSSというものは完璧な状態であり、自分のような駆け出しプログラマが気軽につけ入る隙なんてないではないか」とOSSに対して不安感を抱いている方を対象としています。新卒2年目のRustプログラマが、OSS活動への不安を乗り越え挑戦した経験を通じて、Rustの機能に支えられたポイントや躓きやすい点、OSS活動を始めたことで感じた困難と喜びをお伝えします。
      </Text>

      <Text pb={4}>
        まず、過去の自分がOSS活動のどんなポイントに恐怖を感じていたのか、そしてOSS活動を経験してみて実際はどうだったのかを共有し、OSS活動への敷居を下げることを目指します。
        次にRustの特徴として、ResultやOptionなどの豊かな型表現、データの不変性・可変性が型で明示されることなどを説明します。これにより初めてOSS活動に挑戦するRust初学者や、まだRustを触ったことがない方が、Rustに興味を持つきっかけを提供します。
      </Text>

      <Text pb={4}>
        その後、初心者が躓きやすいポイントについても紹介します。例えば、Rustの参照には不変（共有）参照&Tと可変（排他）参照&mut
        Tがありますが、内部可変性を持つデータ構造の場合、&Tでもデータが不変ではないことがあります。また、Mutexをif
        letにそのまま渡すとデッドロックのリスクがあるといった、初心者が遭遇しがちな問題点を共有し、障害を減らすことを目指します。
      </Text>

      <Text pb={4}>
        最後に自作のクレートを紹介します。このクレートはRustでの実行時安全性の向上や効率的なバリデーション処理を目的としており、初めての自作OSSということで紹介したいと考えています。
      </Text>
    </>
  );
};

const Session2A_en = () => {
  return (
    <>
      <Text pb={4}>
        This session is aimed at those who feel anxious about open source
        software (OSS), thinking, “Isn’t OSS something perfect, leaving no room
        for a novice programmer like me to contribute easily?” As a second-year
        Rust programmer, I will share my experiences of overcoming these fears
        and taking on the challenge of contributing to OSS. I will discuss the
        aspects of Rust that supported me, the points where I stumbled, and the
        difficulties and joys I encountered after starting my OSS activities.
      </Text>

      <Text pb={4}>
        First, I will share what aspects of OSS used to scare me in the past and
        how the reality turned out after gaining some experience, with the goal
        of lowering the barriers to participating in OSS. Next, I will explain
        some features of Rust, such as its rich type system with Result and
        Option, and how immutability and mutability are explicitly defined by
        types. This will hopefully spark interest in Rust among those who are
        either trying OSS for the first time or have yet to work with Rust.
      </Text>

      <Text pb={4}>
        Then, I will introduce common stumbling blocks for beginners. For
        example, Rust’s references include immutable (shared) references &T and
        mutable (exclusive) references &mut T, but in the case of data
        structures with internal mutability, even &T may not guarantee
        immutability. Additionally, I’ll share problems beginners might
        encounter, like the risk of deadlock when passing a Mutex directly to an
        if let. By sharing these issues, I aim to help reduce potential
        obstacles.
      </Text>

      <Text pb={4}>
        Finally, I will introduce my own crate. This crate is designed to
        improve runtime safety and provide efficient validation in Rust, and as
        my first self-made OSS project, I am excited to showcase it.
      </Text>
    </>
  );
};

const Session2B = () => {
  return (
    <>
      <Text pb={4}>
        メディアのリアルタイム通信プロトコルは、WebRTCやMedia Over Quic
        Transportを含め、Rustで実装されるケースが増えています。
        これは、リアルタイム通信プロトコルの実装では映像や音声などの大きなサイズのデータを大量に・並列に処理するためで、Rustの高いパフォーマンスやマルチスレッドプログラミングを行った際のメモリ安全性が選定理由になります。
        私が筆者であるmoq-wasmも、Rustで実装したものです。
      </Text>

      <Text pb={4}>
        メディアのリアルタイム通信というユースケースを元にRustのマルチスレッドプログラミングを紹介することで、普段Rustに触れていない人・スレッドについて意識していない人でも、Rustとマルチスレッドプログラミングについて深く理解することができるでしょう。
      </Text>

      <Text pb={4}>セッションでは、以下の内容について話す予定です。</Text>

      <UnorderedList>
        <ListItem>Media Over Quic Transportについて</ListItem>
        <ListItem>何故Rustを採用したのか</ListItem>
        <ListItem>
          OSSの実装を参照しながら、どのようなスレッドをたて、どのような役割を持たせているのか
        </ListItem>
        <ListItem>
          スレッドセーフな実装をするために、どのような機能・ライブラリなどを用いているのか
        </ListItem>
      </UnorderedList>
    </>
  );
};

const Session2B_en = Session2B;

const Session5A = () => {
  return (
    <>
      <Text pb={4}>
        普段何気なく使っているasync
        runtimeの背後では、ユーザーが提供したFutureを効率的に実行するために様々なことが起こっています。しばしばこのようなruntimeレベルのイベントを見ることによって、プログラムに対してより深い洞察を得ることができ、トラブルシューティング等に役立ちます。
      </Text>

      <Text pb={4}>
        残念ながら、現在のところそのようなasync
        runtimeで発生しているイベントを可視化するようなモニタリングツールはありません。
      </Text>

      <Text pb={4}>
        そこで現在、Tokio-rs自体にtraceを入れてruntimeのイベントを可視化するような仕組みを作れないか検討しています。本セッションではその中で得られた知見を共有できればと思います。
      </Text>

      <Text pb={4}>具体的には、下記内容をカバーする予定です。</Text>

      <UnorderedList>
        <ListItem>
          async applicationにおけるモニタリングのための既存技術,
          またそれらでカバーすることが難しいシナリオ
        </ListItem>
        <ListItem>runtime tracingのモチベーション</ListItem>
        <ListItem>類似の既存技術について (Go trace, JFRなど)</ListItem>
        <ListItem>どのようなruntimeの情報をtraceに含められるか？</ListItem>
        <ListItem>async taskのstack traceをどのように取得するか？</ListItem>
        <ListItem>traceのvisualize方法</ListItem>
      </UnorderedList>
    </>
  );
};

const Session5A_en = () => {
  return (
    <>
      <Text pb={4}>
        Behind the scenes of the async runtime, various things are taking place
        to efficiently execute the Futures provided by the user. By observing
        such runtime-level events, you can often gain deeper insights into your
        program, which can be helpful for troubleshooting and more.
      </Text>

      <Text pb={4}>
        Unfortunately, as of now, there are no monitoring tools available that
        can visualize the events occurring within such an async runtime.
      </Text>

      <Text pb={4}>
        Therefore, I'm currently exploring whether we can integrate tracing into
        Tokio itself to visualize runtime events.
      </Text>

      <Text pb={4}>
        In this session, I'd like to share the insights I've gained through this
        attempt. Specifically, I plan to cover the following topics:
      </Text>

      <UnorderedList>
        <ListItem>
          Existing tools for monitoring async applications and scenarios that
          are difficult to cover with them
        </ListItem>
        <ListItem>Motivation for runtime tracing</ListItem>
        <ListItem>Similar existing technologies (e.g., Go trace, JFR)</ListItem>
        <ListItem>
          What kind of runtime information can be included in tracing?
        </ListItem>
        <ListItem>How can we capture stack traces of async tasks?</ListItem>
        <ListItem>Methods for visualizing the trace</ListItem>
      </UnorderedList>
    </>
  );
};

const Session5B = () => {
  return (
    <>
      <Text pb={4}>
        この発表では、Rustを使ってRubyのライブラリを作った話をします。
        Rubyのエコシステムにも近年Rustを使ったコードが入るようになりました。例えばJITコンパイラのYJITは当初Cで記述されていましたが、その後Rustに書き換えられています。また、これまでのRubyの拡張ライブラリ(Gem)はCで記述するのが普通でしたが、テンプレートにRustを選択できるようになり、Rustで記述されたGemを気軽に作れるようになっています。
      </Text>

      <Text pb={4}>
        今回私が開発したkompoというGemを紹介します。これはRubyスクリプトとRubyをワンバイナリにするGemです。この実装のうちRubyを拡張する部分や、CLIをRustを使って実装しています。このGemでワンバイナリにしたプログラムを動かすには、ファイルパスからファイルの中身を読み出す簡易的なファイルシステムと、ワンバイナリに含めたいファイルを収集し、メタデータなどを集めたオブジェクトファイルを吐き出す機能が必要です。
      </Text>

      <Text pb={4}>
        これらの実装をRustを使ったことによるメリットや、実装の設計を実際のコードと共に紹介したいと思います。
      </Text>
    </>
  );
};

const Session5B_en = Session5B;

const Session6A = () => {
  return (
    <>
      <Text pb={4}>
        PaidyというAmazonやAppleなどで使われている後払いサービスで、Rustを使ったカード決済システムの開発に携わっていました。
      </Text>

      <Text pb={4}>
        絶対落ちてはならないサービスだからこそ、多くの結合テストが書かれてきましたが、いよいよローカルでの実行時間が長くなり、開発体験が悪くなっていました。
      </Text>

      <Text pb={4}>
        そこで、これまでシングルスレッドで実行していたテストを並行処理に対応させることで、テスト自体に手を加えなくても実行時間を大きく短縮できるのではと考えました。
      </Text>

      <Text pb={4}>
        Rustならではの落とし穴や工夫などを紹介する、実用的な内容となっております。
        具体的に、Wiremockなどのライブラリの実装やDropを使ったリソースの後処理、Tokioで共通のランタイムを使った方法を比較していきます。
      </Text>
    </>
  );
};

const Session6A_en = () => {
  return (
    <>
      <Text pb={4}>
        I worked on critical path backend services that processed credit card
        transactions at Paidy, a BNPL service used by companies like Apple and
        Amazon.
      </Text>

      <Text pb={4}>
        Due to the importance of reliability of the service, downtime wasn’t an
        option. As such, we wrote a large number of integration tests. However,
        as the test suite grew, running them locally took increasingly longer,
        which began to hurt the developer experience.
      </Text>

      <Text pb={4}>
        To solve this problem, I looked into migrating out tests to run on
        multiple threads, since they had been running single-threaded. By
        enabling parallel execution without modifying the tests themselves, we
        were able to significantly reduce the runtime, resulting in a much
        faster testing process.
      </Text>

      <Text pb={4}>
        In this talk, I’ll share the practical insights, and pitfalls of
        multithreaded testing in Rust. I’ll be covering how libraries like
        Wiremock are implemented, managing resource cleanup with Drop, and other
        methods using code examples.
      </Text>
    </>
  );
};

const Session6B = () => {
  return (
    <>
      <Text pb={4}>
        本発表では Linux の GUI の中核に位置する Wayland compositor を Rust
        で作ることについてお話します.
      </Text>

      <Text pb={4}>
        Unix での GUI は1980年代に X Window System
        が登場してからそれをベースとして発展してきました. Linux では近年, それを
        Wayland で置き換える取り組みが増えてきています. 例えば Ubuntu 22.04 LTS
        では Wayland がデフォルトになりました.
      </Text>

      <Text pb={4}>
        Wayland は GUI のためのプロトコルです. HTTP などと同じく,
        それを喋るサーバーとクライアントがいます. Wayland
        クライアントはウインドウを表示してほしいアプリケーションです. (E.g.
        ブラウザ, テキストエディタ, ターミナル) Wayland サーバー (compositor)
        はこれらのウインドウを適切な位置, 順序でディスプレイに描画したり,
        キーボードやマウスをアプリケーションに繋げるものです. GNOME (
        <Link
          color="lightCobaltBlue.100"
          href="https://gitlab.gnome.org/GNOME/mutter"
        >
          Mutter
        </Link>
        ), KDE (
        <Link color="lightCobaltBlue.100" href="https://github.com/KDE/kwin">
          KWin
        </Link>
        ),{" "}
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/hyprwm/Hyprland"
        >
          Hyprland
        </Link>
        ,{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/YaLTeR/niri">
          niri
        </Link>
        など色々な Wayland compositor の実装があります.
      </Text>

      <Text pb={4}>
        都度都度 HTTP を直に処理することが少ないように, Wayland
        も扱いを容易にするためのライブラリ/フレームワークを通じて扱うのが一般的です.
        <Code>smithay</Code> crate は下層のハンドリング,
        登録されたウインドウ情報の保持,
        イベントループの駆動などをサポートしてくれるライブラリです.
        かなり便利なのですがあまり情報がないため少しとっつきづらい面もあります.
        本発表では smithay を用いてシンプルなタイル型 Wayland compositor
        を作成し, 面白さを伝えたいと思います.
      </Text>

      <Text pb={4}>皆さんも Wayland compositor 自作しましょう!!</Text>

      <Text pb={4}>
        (Rust 以外の事前知識は仮定しません. 非 Linux
        ユーザーでも楽しんで聞けるようにしようと思っています.
        但し自分で動かしてみたい場合は Linux を触ってみてください.)
      </Text>
    </>
  );
};

const Session6B_en = () => {
  return (
    <>
      <Text pb={4}>
        In this talk, we'll explore how to build an Wayland compositor in Rust,
        which is a core component of Linux GUI environment.
      </Text>

      <Text pb={4}>
        (PC) GUI environment in UNIX started with X Window System in the 1980s
        and developped over years. In recent years, Linux ecosystem is trying to
        replace it with Wayland. For example, Ubuntu 22.04 LTS adopted Wayland
        as a default GUI protocol.
      </Text>

      <Text pb={4}>
        Wayland is a protocol for GUI. Like HTTP, there are concepts of servers
        and clients. An Wayland client is an application that wants to display
        an window. (E.g. web browsers, text editors, terminals.) An Wayland
        server (compositor) draws these windows on a display in the appropriate
        position and order, and feeds keyboard and mouse events to the
        applications. There are lots of implementations, e.g. Gnome (
        <Link
          color="lightCobaltBlue.100"
          href="https://gitlab.gnome.org/GNOME/mutter"
        >
          Mutter
        </Link>
        ), KDE (
        <Link color="lightCobaltBlue.100" href="https://github.com/KDE/kwin">
          KWin
        </Link>
        ),{" "}
        <Link
          color="lightCobaltBlue.100"
          href="https://github.com/hyprwm/Hyprland"
        >
          Hyprland
        </Link>
        ,{" "}
        <Link color="lightCobaltBlue.100" href="https://github.com/YaLTeR/niri">
          niri
        </Link>
        , etc.
      </Text>

      <Text pb={4}>
        Like ones rarely handle raw HTTP protocol by their own, it's common to
        use libraries/frameworks to handle Wayland protocol.{" "}
        <Code>smithay</Code> crate provides features for it, e.g. low layer
        protocol handling, storing window information, driving event loop, etc.
        It's very convenient but requires some prerequisits to start to use.
        This talk will provide them through building a very small, simple,
        tiling Wayland compositor.
      </Text>

      <Text pb={4}>Let's build your own Wayland compositor! It's a fun!</Text>
    </>
  );
};

const Session7A = () => {
  return (
    <>
      <Text pb={4}>
        業務でONNXモデルを扱う機会があり最初はありものの実装そのまま使っていたのですが、パフォーマンス面で改善したい点が出てきたため内部実装も含めて調査することにしました。自社開発デバイス上などいろいろな環境で動かしたいモチベーションもあり、公式ONNX
        Runtimeおよびその他のOSSの推論ランタイムを含めて調べました。
      </Text>

      <Text pb={4}>
        公式ONNX
        RuntimeのRustバインディングのクレートや、Rustだけで実装されているものがあります。ONNXフォーマット自体はオープンであるものの、推論処理の仕方やサポートしている機能はエンジン／フレームワークによって差があります。以下の軸で比較したものを紹介します。
      </Text>

      <UnorderedList>
        <ListItem>開発状況／リリース頻度など</ListItem>
        <ListItem>推論専用／学習機能もある</ListItem>
        <ListItem>Pure Rustか、ラッパーかどうか</ListItem>
        <ListItem>CPUマルチスレッド対応／GPU対応の有無</ListItem>
        <ListItem>ONNXの対応バージョン／オペレーター網羅性</ListItem>
      </UnorderedList>

      <Text pb={4}>
        また、これらを踏まえ、自身の実装課題に取り組んだことについてもお話します。
      </Text>
    </>
  );
};

const Session7A_en = Session7A;

const Session7B = () => {
  return (
    <>
      <Text pb={4}>The Problem</Text>

      <Text pb={4}>
        There are many challenges when dealing with a C FFI in Rust, including
        lifetimes, ownership, error handling and non-synchronous code. A less
        discussed but prominent issue with DOCA is callback hell. C interfaces
        are often designed to be used with user callbacks, which often obscure
        program flow and type safety. DOCA is one such library, centered around
        a task based event system that uses callbacks. At first glance, there is
        no easy way to handle program logic except within these callbacks. This
        means submitting tasks for callbacks within callbacks, and so on and so
        forth, making it challenging to find an opening for Rust to integrate,
        as well as allow for arbitrary user logic in between. Our Solution
      </Text>

      <Text pb={4}>
        Following the wisdom of message passing, our design was able to
        completely decouple callbacks from regular program logic using messages
        and static dispatch (with generics). Essentially, the callbacks
        themselves only need to construct a message. Then, the message can be
        delivered to a wrapper structure for each of the various DOCA libraries.
        As a result, virtually all remaining logic can be written in safe Rust.
        This allows the wrapper library to be easily used with both synchronous
        and asynchronous Rust. During the talk, we’ll answer further questions
        about the design, including how to reason about lifetimes for task
        submission into the DOCA black box, how should the user interface with
        the wrapper structures, and how should errors be propagated to the user.
      </Text>
    </>
  );
};

const Session7B_en = Session7B;

const Session10A = () => {
  return (
    <>
      <Text pb={4}>
        Understanding Linking is crucial because large Rust projects can spend
        roughly 50% of build time in linking. If you have ever wondered how the
        rust compiler, linker, loader, and operating system work together to run
        your Rust program - this talk might spark your interest. In this talk,
        Shriram will share a high level overview of the rust compilation
        pipeline, how the compiler is changing to become demand driven, how
        rustc uses LLVM, what goes inside a linker, what’s inside the object
        files, what do the link-time optimization flags mean, why rust prefers
        static linking, and are there ways to do dynamic linking.
      </Text>

      <Text pb={4}>
        By the end of the talk, you should have a better understanding of how
        Rust programs are linked, and how the linker magically makes everything
        fit together like pieces of a puzzle.
      </Text>

      <Text pb={4}>Here’s what we’ll cover:</Text>

      <UnorderedList>
        <ListItem>Why understanding linking is important?</ListItem>
        <ListItem>
          Rust Compilation: A High-Level Overview
          <UnorderedList>
            <ListItem>
              What is Demand Driven Compilation a.k.a Query Based Compilation?
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Object Files: What’s inside them? (ELF Format)</ListItem>
        <ListItem>
          Symbol Resolution: How the linker matches variable and function names
          to their memory addresses.
        </ListItem>
        <ListItem>
          A simple program to check if we can invoke the linker directly on
          object files instead of using cargo
        </ListItem>
        <ListItem>
          Link Time Optimization: How the linker can optimize your code at link
          time.
        </ListItem>
        <ListItem>
          Why Rust Prefers Static Linking?
          <UnorderedList>
            <ListItem>Understanding ABI</ListItem>
            <ListItem>Taking a “Stabby” - a Stable ABI for Rust?</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Experiments with Dynamic Linking</ListItem>
      </UnorderedList>
    </>
  );
};

const Session10A_en = Session10A;

const Session10B = () => {
  return (
    <>
      <Text pb={4}>
        PLATEAU GIS
        Converterは、国土交通省主導の日本全国3D都市モデル化プロジェクト「PLATEAU」のデータを様々なデータ形式に変換するオープンソースソフトウェアです。本トークでは、以下の点について詳しく解説します。
      </Text>

      <UnorderedList>
        <ListItem>
          プロジェクトの背景と目的
          <UnorderedList>
            <ListItem>
              PLATEAUプロジェクトの概要
              <UnorderedList>
                <ListItem>
                  日本の3D都市データの作成とそのユースケースの実装を行うプロジェクト
                </ListItem>
                <ListItem>
                  ただの3Dデータではなく、現実世界の情報を反映させた「地理空間情報」
                  <UnorderedList>
                    <ListItem>建築年度・高度・土地利用分類など</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  防災シミュレーションから、AR・VRや映像、ゲームなどのエンタメ分野まで幅広く活用される
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>
              データ変換ツールの必要性
              <UnorderedList>
                <ListItem>
                  「都市機能を記述する」という目的から、仕様書は膨大になり、かつファイルサイズも巨大なものになる
                </ListItem>
                <ListItem>
                  複雑な仕様を持つXML形式のため、一般ユーザーはそのままの利用が難しい
                </ListItem>
                <ListItem>
                  変換には高価な有償ツールを利用する必要があった
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Rustを選択した理由
          <UnorderedList>
            <ListItem>大規模データ処理におけるパフォーマンスの重要性</ListItem>
            <ListItem>メモリ安全性とスレッド安全性の利点</ListItem>
            <ListItem>
              「クロスプラットフォーム」アプリケーションを容易に作成でき、TypeScriptでUIを構築できる「Tauri」の存在
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          課題と解決策
          <UnorderedList>
            <ListItem>
              Rustに精通するメンバーはいなかったため、短期でのキャッチアップが必要
            </ListItem>
            <ListItem>
              大部分のアルゴリズムをフルスクラッチで開発する必要がある
              <UnorderedList>
                <ListItem>
                  GIS（地理空間情報）を取り扱うためのクレートは存在するが、3次元の情報も合わせて取り扱うクレートは存在しない
                </ListItem>
                <ListItem>
                  XMLを解析するクレートは存在するが、CityGMLを解析するクレートは存在しない
                </ListItem>
                <ListItem>
                  プロジェクトで特に重要な「3D
                  Tiles」の最新仕様を網羅したクレートも存在しない
                </ListItem>
                <ListItem>
                  テクスチャ最適化（アトラス化）を行うクレートも、利用しやすいものは存在しない
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          技術的実装の詳細
          <UnorderedList>
            <ListItem>CityGML形式の解析と処理</ListItem>
            <ListItem>
              CityGMLのツリー構造を出力ファイル形式に応じて変換
            </ListItem>
            <ListItem>地物（属性情報を持つ図形）の座標変換処理</ListItem>
            <ListItem>
              多様な出力形式（GeoPackage、GeoJSON、MVT、3D Tilesなど）の実装
            </ListItem>
            <ListItem>テクスチャの最適化</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          プロジェクトの成果と今後の展望
          <UnorderedList>
            <ListItem>
              継続して開発中
              <UnorderedList>
                <ListItem>テクスチャの更なる最適化・高速化</ListItem>
                <ListItem>巨大データダウンロード負荷の軽減</ListItem>
                <ListItem>出力ファイル形式の追加</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>RustでのGIS × 3D分野への貢献</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <Text pb={4}>
        本トークを通じて、地理空間情報（GIS）・3Dデータ処理の分野におけるRustの活用・有効性などを示すとともに、オープンソースプロジェクトとしての取り組みについても共有します。
      </Text>
    </>
  );
};

const Session10B_en = Session10B;

const lineupDatabase = [
  {
    id: session1A.id,
    ja: Session1A,
    en: Session1A_en,
  },
  {
    id: session1B.id,
    ja: Session1B,
    en: Session1B_en,
  },
  {
    id: session2A.id,
    ja: Session2A,
    en: Session2A_en,
  },
  {
    id: session2B.id,
    ja: Session2B,
    en: Session2B_en,
  },
  {
    id: session5A.id,
    ja: Session5A,
    en: Session5A_en,
  },
  {
    id: session5B.id,
    ja: Session5B,
    en: Session5B_en,
  },
  {
    id: session6A.id,
    ja: Session6A,
    en: Session6A_en,
  },
  {
    id: session6B.id,
    ja: Session6B,
    en: Session6B_en,
  },
  {
    id: session7A.id,
    ja: Session7A,
    en: Session7A_en,
  },
  {
    id: session7B.id,
    ja: Session7B,
    en: Session7B_en,
  },
  {
    id: session10A.id,
    ja: Session10A,
    en: Session10A_en,
  },
  {
    id: session10B.id,
    ja: Session10B,
    en: Session10B_en,
  },
];

export const LineupDatabaseJa = lineupDatabase.map(({ id, ja }) => ({
  id,
  component: ja,
}));
export const LineupDatabaseEn = lineupDatabase.map(({ id, en }) => ({
  id,
  component: en,
}));

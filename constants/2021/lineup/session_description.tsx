import { Code, Text } from "@chakra-ui/layout";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const Lineup1 = () => {
  return (
    <>
      <Text pb={4}>
        This talk’s goal is for you to understand what Rust contributors are
        doing to prevent regressions from reaching stable Rust.
      </Text>
      <Text pb={4}>
        It is generally known that there is more regression in nightly Rust and
        less in stable Rust, but how many people know how Rust contributors
        triage and fix it?
      </Text>
      <Text>This talk describes:</Text>
      <UnorderedList pb={4}>
        <ListItem>
          How do the release channels help to prevent regressions?
        </ListItem>
        <ListItem>What are the different types of regressions?</ListItem>
        <ListItem>How to find regressions before releasing stable?</ListItem>
        <ListItem>
          What’s the prioritization working group? What are they doing?
        </ListItem>
        <ListItem>Some examples of what and how we did</ListItem>
        <ListItem>How to contribute it?</ListItem>
      </UnorderedList>
      <Text>… and some more!</Text>
    </>
  );
};

const Lineup2 = () => {
  return (
    <>
      <Text pb={4}>
        This talk will discuss yatp, the unified thread pool in TiKV. In the
        past, there were many thread pools in TiKV, in which 2 kinds of thread
        pools serve read requests in TiKV.
      </Text>
      <UnorderedList pb={4}>
        <ListItem>Coprocessor Pool</ListItem>
        <ListItem>Storage Pool</ListItem>
      </UnorderedList>
      <Text pb={4}>
        In practice, there are tasks with various priorities, e.g. for the fast
        tasks, latency is an important metric. When some CPU-intensive tasks
        being executed, the operating system will allocate more CPU time to
        their thread pool, thus the latency of fast tasks increases. The
        increment of fast tasks even affects the production stability, it’s a
        great drawback in TiKV before.
      </Text>
      <Text pb={4}>
        yatp, the unified thread pool, can replace the multiple thread pools in
        TiKV. Due to the unified thread pool, when the tasks need to be
        re-balanced, it’s scheduled in user mode with our control instead of
        kernel mode. This strategy is known as work-stealing. Further, when some
        particular tasks have high CPU usage, other tasks can avoid being
        starving and still being executed in an expected way.
      </Text>
      <Text>
        In a word, a unified thread pool can make the database system use CPU
        resources in a better way with less overhead. We’ll talk about how yatp
        solves the starving problem.
      </Text>
    </>
  );
};

const Lineup3 = () => {
  return (
    <>
      <Text pb={4}>
        Rustでrbenvよりも7秒速いRubyのバージョンマネージャーを作りました。この「7秒速い」とは、特定のバージョンをインストールしてそのバージョン使用するという一連の流れ（rbenv
        init → rbenv install → rbenv local）が7秒速いということです。
      </Text>
      <Text pb={4}>
        Rubyにはランタイムのバージョンに依存したコードが多く存在します。そのため、ランタイムのバージョン管理が重要視されています。しかしながら、rbenv
        installの実行には環境にもよりますが、2分から3分ほどかかり、新しいバージョンをインストールするたびにこれを待つのは非効率です。主なボトルネックとなっているのは、ruby-buildと呼ばれる、シェルスクリプトで書かれた異なるバージョンのRubyを簡単にインストールするためのコマンドラインユーティリティであり、今回はこのruby-buildを含めてPure
        RustでRubyバージョンマネージャー「frum」を作りました。
      </Text>
      <Text pb={2}>
        このセッションでは、Rustでシンプルでかつ使いやすいRubyバージョンマネージャーを作るために行った工夫とfrumを作る過程で得た知見を共有します。具体的には、主に
      </Text>
      <UnorderedList pb={4}>
        <ListItem>
          ファイルのインストールを行うCLIをマクロを使って上手くE2Eテストするコツ
        </ListItem>
        <ListItem>サブコマンドが複数あるCLIをRustで書く時の設計のコツ</ListItem>
        <ListItem>
          コマンドラインパーサーclapを用いて作るCLIで柔軟な補完機能を実現する方法
        </ListItem>
      </UnorderedList>
      <Text>について話します。</Text>
    </>
  );
};

const Lineup3En = () => {
  return (
    <>
      <Text pb={4}>
        I built a Ruby version manager with Rust, which is 7 seconds faster than
        rbenv. In detail, it takes about 7 seconds faster to install a
        particular version and set it with frum than rbenv.
      </Text>
      <Text pb={4}>
        Ruby has a lot of code that depends on the runtime version. Therefore,
        it is important to manage Ruby versions. However, it takes 2 to 3
        minutes to run <Code>rbenv install</Code>, depending on the environment,
        and waiting for this to happen every time you install a new version is
        inefficient. The main bottleneck is a command-line utility called
        ruby-build, which makes it easy to install virtually any version of
        Ruby. In order to solve this problem, I created a Pure Rust Ruby version
        manager called frum.
      </Text>
      <Text pb={2}>
        In this talk, I will share my efforts to build a simple and easy to use
        Ruby version manager with Rust, and what I learned in the process of
        making frum like the following things.
      </Text>
      <UnorderedList pb={4}>
        <ListItem>
          Tips on good E2E testing a CLI that manipulates files using
          declarative macros
        </ListItem>
        <ListItem>
          Tips for writing a CLI with multiple subcommands in Rust
        </ListItem>
        <ListItem>
          How to use the command line parser clap to implement flexible
          command-line completion
        </ListItem>
      </UnorderedList>
    </>
  );
};

const Lineup4 = () => {
  return (
    <>
      <Text pb={4}>
        Sh4der Jockey
        というリアルタイムVJツールを紹介します。このツールはDJの音楽に合わせて映像を出力するためのツールですが、一般的なVJツールのResolumeやVDMXのようにVJ素材を利用のではなく、リアルタイムCGを使って映像をシェーダーと呼ばれるGPUプログラムで定義して、その場でレンダリングします。シェーダーを使った映像表現に取り組んでいるコミュニティはすでにいくつか存在しており、Algoraveやデモシーンといった区分けで存在しています。そのようなコミュニティに参加している背景から、VRChatでのVJ表現を行うためにその用途に特化したシェーダーコーディング環境を製作しました。
      </Text>
      <Text pb={4}>
        その結果生まれた仕様として複数のシェーダーを組み合わせてひとつのレンダリングパイプラインを構築する、といったパラダイムがこのツールの中心にあります。複数のシェーダーを組み合わせることで頂点情報を利用した絵とレイマーチングなどのスクリーンスペース表現を組み合わせて利用することが可能になったり、Compute
        Shaderを使ってパーティクルの情報などを計算して頂点シェーダーで描画する、またはレイトレーシング時に途中計算の蓄積と表示を分ける、など様々な表現が可能になります。他にもステレオオーディオ入力、NDIを用いたリアルタイム映像入力、MIDIの動的バインディング等のVJ用の機能を搭載しています。
      </Text>
      <Text>
        このようなニッチな機能を実装していると、技術的な問題に頻繁に衝突します。欲しい機能を満たすcrateが存在しなかったり、パイプラインの構築を非同期にすることでフレームレートを維持しなければいけなかったり、フレームレートを維持するためにマルチスレッド化を随所で頑張ったりしています。そういった開発時の苦労面も紹介できたらと思います。
      </Text>
    </>
  );
};

const Lineup4En = () => {
  return (
    <>
      <Text pb={4}>
        Sh4der Jockey is a program for creating visual performances or “VJ-ing”
        alongside a DJ. Unlike more contemporary tools like Resolume or VDMX,
        this tool does not rely on VJ loops or video files. Instead, it focuses
        on generating graphics via shaders. Some communities already exist which
        engage in shader live coding, or live coding in general such as Algorave
        and Demoscene. As participants of these communities ourselves, we wanted
        to create a shader live coding tool which suited our needs for creating
        performances in VRChat.
      </Text>
      <Text pb={4}>
        One such feature is the ability to combine multiple shaders into a
        custom rendering pipeline. We wanted to combine vertex shader effects
        with raymarching effects, or use an intermediate buffer for storing
        raytracing data among other things. There are other improvements
        compared to existing shader coding tools like dynamic MIDI bindings,
        stereo audio, or NDI video stream input. These features let us create
        effects for various DJs and we’ve used the tool in 9 performances so
        far.
      </Text>
      <Text>
        Of course, nothing comes for free and developing this tool came with its
        own set of technical challenges. Some of these challenges include
        asynchronously compiling the shaders in order to reduce lost frames
        while a pipeline is being compiled, creating our own crates to satisfy
        features that we want, or making as much of the CPU multithreaded as
        possible in order to maintain frame rate.
      </Text>
    </>
  );
};

const Lineup5 = () => {
  return (
    <>
      <Text pb={4}>
        本セッションではコンテナランタイムでのRustを活用する可能性をお話します。私が中心となっている開発しているRustのコンテナランタイムのyoukiの経験を通して感じたこと共有します。これらの経験から私はRustはもっとこの分野に貢献するべき言語だと感じました。この発表で知見を共有することで多くのRustaceanにこの分野に関心を持ってもらえることを願っています。また、ここで共有する経験はコンテナランタイムのみに限らず、Rustを低レイヤで採用する際にきっと役に立つと思います。
      </Text>
      <Text>
        発表の最初ではコンテナ技術のcgroupなどについても説明するだけではなく、youkiの実際のRustのコードを交えながら簡単に説明します。
      </Text>
    </>
  );
};

const Lineup5En = () => {
  return (
    <>
      <Text pb={4}>
        In this session, I&apos;ll talk about the possibility of using Rust in a
        container runtime. I&apos;ll share my experiences with youki, the
        container runtime in Rust that I&apos;m working on. From these
        experiences, I feel that Rust is a language that should contribute more
        to this field. By sharing my knowledge in this presentation, many
        Rustaceans will be interested in this field. I also believe that the
        experience I&apos;ll be sharing here will be helpful not only for
        container runtime but also for using Rust at lower layers.
      </Text>
      <Text>
        At the beginning of the presentation, I will explain container
        technology such as cgroups and briefly explain with actual codes of
        youki.
      </Text>
    </>
  );
};

const Lineup6 = () => {
  return (
    <>
      <Text pb={4}>
        Rust is a system language and sysinfo provides system information. It
        can be interesting to present what happens when you try to get such low
        level information such as the traps that you may encounter on the way.
        For example, how to iterate over a “C array” (which is basically just a
        pointer) by wrapping them inside a struct or how to handle memory
        allocation/free automatically by using the Drop trait.
      </Text>
      <Text>
        The sysinfo crate is a very good representant of such technical issues
        since it interacts directly with systems by querying low-level APIs and
        is one of the oldest Rust crates. It allows to see how it works in such
        “unsafe environments” with “unsafe calls” from “unsafe system
        libraries”.
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
    component: Lineup3En,
  },
  {
    id: 4,
    component: Lineup4En,
  },
  {
    id: 5,
    component: Lineup5En,
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

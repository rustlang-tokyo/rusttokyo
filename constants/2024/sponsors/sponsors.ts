import type {
  BronzeSponsor,
  GoldSponsor,
  SilverSponsor,
  VenueSponsor,
} from "@/types/2024/types";

export type GoldSponsorList = {
  ja: GoldSponsor[];
  en: GoldSponsor[];
};

export const goldSponsors: GoldSponsorList = {
  ja: [
    {
      id: 0,
      name: "株式会社KICONIA WORKS",
      description:
        "KICONIA WORKSは、機械学習、数理最適化、アプリケーション開発などを通じて、さまざまな業界の大手企業から中小企業まで、幅広い企業の課題解決をサポートする会社です。少数精鋭のチームで迅速かつ高品質なサービスを提供し、年間40〜50件のプロジェクトを手がけています。また、自社サービスの開発や社内での研究開発を通じて、エンジニアが自己実現できる機会も提供しています。",
      logoImagePath: "/static/2024/sponsors/kiconia_logo_typ2.png",
      url: "https://kiconiaworks.com/",
    },
    {
      id: 1,
      name: "Fairy Devices株式会社",
      description:
        "自社開発の首掛け型ウェアラブルデバイスTHINKLETと音声AIプラットフォームmimiによって、現場DXサービスを提供しています。私たちはデバイスと音声処理技術をもとに、インターネットに存在しない情報をデータ化し、機械知能が理解可能にすること、その結果として人類のあらゆる知識を叡智として流通可能にすることを目指しています。",
      logoImagePath: "/static/2024/sponsors/fairydevices.png",
      url: "https://fairydevices.jp/",
    },
    {
      id: 2,
      name: "株式会社一休",
      description:
        "株式会社一休は、「こころに贅沢させよう。」をコンセプトに掲げ上質なサービスを提供しています。 創業まもない2000年に運営を開始した高級ホテル・旅館の予約サイト「一休.com」をはじめ、プレミアムグルメの予約サイト「一休.comレストラン」、 贅沢体験をお届けする「一休.comスパ」や、新規事業である「一休.comふるさと納税」「一休.comお取り寄せ」など、さまざまなサービスを展開してきました。 消費者ニーズを捉えた事業を通し、世の中に「こころに贅沢」な時間を増やすことを目指しています。",
      logoImagePath: "/static/2024/sponsors/ikyu_com_1.png",
      url: "https://www.ikyu.co.jp/",
    },
    {
      id: 3,
      name: "ユニークビジョン株式会社",
      description:
        "【バズったあのキャンペーンもユニークビジョン!?】\n" +
        "ユニークビジョンはSNSで企業と消費者のより良いブランド体験を創出することを使命としているエンジニア中心の会社です。開発するSNSマーケティングツール「Belugaシリーズ」は、飲料・ゲーム・化粧品・エンタメをはじめとして多くの業界で利用されています。",
      logoImagePath: "/static/2024/sponsors/UNIQUEVISION_logo_4to3.png",
      url: "https://www.uniquevision.co.jp/",
    },
    {
      id: 4,
      name: "株式会社アークエッジ・スペース",
      description:
        "アークエッジ・スペースは、小型衛星コンステレーションの企画・設計から量産化、運用、関連するソフトウェア開発まで総合的なソリューション提供を行う宇宙スタートアップ企業です。“衛星を通じて、人々により安全で豊かな未来を”実現することを目指し、今後は地球観測、船舶向け衛星通信（衛星VDES）、IoTデータ収集等に対応した小型衛星コンステレーションの構築を実現するとともに、月面活動にむけた衛星インフラ構築や深宇宙探査など、多様なミッションニーズに対応し、誰でも手が届く宇宙の開発利用を推進しています。",
      logoImagePath: "/static/2024/sponsors/ArkEdgeSpace_BRANDLOGO-RGB-Ver001.png",
      imageRatio: "90%",
      url: "https://arkedgespace.com/",
    },
    {
      id: 5,
      name: "AGC株式会社",
      description:
        "「AGC、いつも世界の大事な一部」を私達の使命に掲げ、社会のニーズに応える独自の素材、ソリューションを提供しています。2023年にデジタル戦略の立案・支援・人財育成を担う組織として、デジタル・イノベーション推進部を新設しました。内製ソフトウェア開発チームではRustを中心としたモダンな技術スタックで妥協のないアジャイル開発を進めているほか、数理最適化などの技術領域でも活用が広がっています。",
      logoImagePath:
        "/static/2024/sponsors/AGC_GroupBrandLogo_EmblemType_png.png",
      url: "https://www.agc.com/",
    },
    {
      id: 6,
      name: "JetBrains",
      description:
        "JetBrains は、プロ向け開発ツールを提供するソフトウェア企業で IntelliJ IDEA や PyCharm などのツールが高く評価されています。2023 年には、Rust 専用の IDE「RustRover」を発表し、スマートなコード補完や Cargo との統合、テストのサポートを備え、効率的な Rust 開発を実現します。",
      logoImagePath: "/static/2024/sponsors/jetbrains-logo.jpg",
      url: "https://www.jetbrains.com/ja-jp/rust/",
    },
  ],
  en: [], // Copied from ja later
};

goldSponsors.en = goldSponsors.ja;

export type SilverSponsorList = {
  ja: SilverSponsor[];
  en: SilverSponsor[];
};

export const silverSponsors: SilverSponsorList = {
  ja: [
    {
      name: "合同会社シグナルスロット",
      logoImagePath: "/static/2024/sponsors/SignalSlot_logo-200x80.png",
      url: "https://signal-slot.co.jp/",
    },
    {
      name: "合同会社ザウエル",
      logoImagePath: "/static/2024/sponsors/zauel.png",
      url: "https://zauel.co.jp/",
    },
    {
      name: "株式会社LabBase",
      logoImagePath: "/static/2024/sponsors/LabBase_corp_200.png",
      url: "https://labbase.co.jp/",
    },
    {
      name: "BLUEPRINT Holdings, Limited",
      logoImagePath: "/static/2024/sponsors/bp_logo.png",
      url: "https://blueprint-trading.net",
    },
    {
      name: "株式会社Jij",
      logoImagePath: "/static/2024/sponsors/jij.png",
      imageRatio: "80%",
      url: "https://www.j-ij.com/ja",
    },
  ],
  en: [], // Copied from ja later
};

silverSponsors.en = silverSponsors.ja;

export type BronzeSponsorList = {
  ja: BronzeSponsor[];
  en: BronzeSponsor[];
};

export const bronzeSponsors: BronzeSponsorList = {
  ja: [
    {
      name: "株式会社アダコテック",
      logoImagePath: "/static/2024/sponsors/Adacotech-Icon-rect.png",
      url: "https://adacotech.notion.site/08f6ee7d2d1a4b099ca5de374175c743",
    },
    {
      name: "株式会社estie",
      logoImagePath: "/static/2024/sponsors/estie.png",
      url: "https://www.estie.jp/",
    },
  ],
  en: [], // Copied from ja later
};

bronzeSponsors.en = bronzeSponsors.ja;

export type VenueSponsorList = {
  ja: VenueSponsor[];
  en: VenueSponsor[];
};

export const venueSponsors: VenueSponsorList = {
  ja: [
    {
      name: "GMOインターネットグループ",
      description:
        "1995年以来「すべての人にインターネット」をコーポレートキャッチに、インターネットの便利さ、楽しさ、可能性を、多くの方に届けたいという強い想いのもと、インターネット関連の様々なサービスを提供しています。\n" +
        "また、急激な発展を遂げるAIに対し「AIで未来を創るNo.1企業グループ」を掲げ、「時間とコストの節約」「既存サービスの質向上」「AI産業への新サービス提供」を軸とした取り組みを進めています。",
      logoImagePath: "/static/2024/sponsors/gmo.png",
      url: "https://www.gmo.jp/ ",
    },
  ],
  en: [], // Copied from ja later
};

venueSponsors.en = venueSponsors.ja;

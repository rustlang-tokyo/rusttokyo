import { BronzeSponsor, GoldSponsor, SilverSponsor } from "@/types/2023/types";

export type GoldSponsorList = {
  ja: GoldSponsor[];
  en: GoldSponsor[];
};

export const goldSponsors: GoldSponsorList = {
  ja: [
    {
      id: 0,
      name: "ユニークビジョン株式会社",
      description:
        "【バズったあのキャンペーンもユニークビジョン!?】\n" +
        "ユニークビジョンはSNSで企業と消費者のより良いブランド体験を創出することを使命としているエンジニア中心の会社です。開発するSNSマーケティングツール「Belugaシリーズ」は、飲料・ゲーム・化粧品・アパレルをはじめとして多くの業界で利用されています。",
      logoImagePath: "/static/2023/sponsors/uniquevision.jpg",
      url: "https://www.uniquevision.co.jp/",
    },
    {
      id: 1,
      name: "AGC株式会社",
      description:
        "「AGC、いつも世界の大事な一部」を私達の使命に掲げ、社会のニーズに応える独自の素材、ソリューションを提供しています。2023年にデジタル戦略の立案・支援・人財育成を担う組織として、デジタル・イノベーション推進部を新設しました。スピード感を持った開発のためソフトウェアの内製にこだわりRustを含め最新技術のキャッチアップも積極的に行っています。",
      logoImagePath: "/static/2023/sponsors/agc.png",
      url: "https://www.agc.com/recruiting/careers/",
    },
    {
      id: 2,
      name: "FairyDevices",
      description:
        "自社開発の首掛け型ウェアラブルデバイスTHINKLETと、音声AIプラットフォームmimiによって、現場DXサービスを提供しています。私たちはデバイスと音声処理技術をもとに、インターネットに存在しない情報をデータ化し、機械知能が理解可能にすること、その結果として人類のあらゆる知識を叡智として流通可能にすることを目指しています。",
      logoImagePath: "/static/2023/sponsors/fairydevices.png",
      url: "https://fairydevices.jp/",
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
      name: "株式会社ゆめみ",
      logoImagePath: "/static/2023/sponsors/yumemi.png",
      url: "https://www.yumemi.co.jp/",
      inverse: true,
    },
    {
      name: "株式会社ペイルド",
      logoImagePath: "/static/2023/sponsors/paild.png",
      url: "https://www.paild.co.jp/",
    },
    {
      name: "株式会社LabBase",
      logoImagePath: "/static/2023/sponsors/labbase.png",
      url: "https://labbase.co.jp/",
    },
    {
      name: "パイオニア株式会社",
      logoImagePath: "/static/2023/sponsors/pioneer.png",
      url: "https://jpn.pioneer/ja/",
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
      name: "株式会社estie",
      logoImagePath: "/static/2023/sponsors/estie.png",
      url: "https://www.estie.jp/",
    },
    {
      name: "京都小松法律事務所",
      logoImagePath: "/static/2023/sponsors/kyoto_komatsu_law_firm.png",
      url: "https://komatsu.kyoto.jp/",
    },
  ],
  en: [], // Copied from ja later
};

bronzeSponsors.en = bronzeSponsors.ja;

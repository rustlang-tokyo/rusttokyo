import type {
  BronzeSponsor,
  GoldSponsor,
  SilverSponsor,
} from "@/types/2022/types";

export type GoldSponsorList = {
  ja: GoldSponsor[];
  en: GoldSponsor[];
};

export const goldSponsors: GoldSponsorList = (() => {
  const sponsorMasterList = {
    ja: [
      {
        id: 0,
        name: "FairyDevices",
        description:
          "「機械が人に寄りそう、心温まる世界を創る」をVisionに音声解析技術を強みにしている会社です。現在は「THINKLET」というウェアラブルデバイスを用いた現場DXに力を入れています。",
        logoImagePath: "/static/2022/sponsors/fairydevices.png",
        url: "https://fairydevices.jp/",
      },
      {
        id: 1,
        name: "株式会社ゆめみ",
        description:
          "5000万人のみんな知ってるあのサービスも、ゆめみが一緒に作ってます。大手企業や急成長スタートアップと共創型でWeb/スマホのサービス作りや内製化支援を行っています。【エンジニアが最も成長できる会社No.1】を目標にした、アジャイル組織として先端を走るエンジニア集団です。",
        logoImagePath: "/static/2022/sponsors/yumemi.png",
        url: "https://www.yumemi.co.jp/",
      },
    ],
    en: [
      {
        id: 0,
        name: "FairyDevices",
        description:
          "「機械が人に寄りそう、心温まる世界を創る」をVisionに音声解析技術を強みにしている会社です。現在は「THINKLET」というウェアラブルデバイスを用いた現場DXに力を入れています。",
        logoImagePath: "/static/2022/sponsors/fairydevices.png",
        url: "https://fairydevices.jp/",
      },
      {
        id: 1,
        name: "株式会社ゆめみ",
        description:
          "5000万人のみんな知ってるあのサービスも、ゆめみが一緒に作ってます。大手企業や急成長スタートアップと共創型でWeb/スマホのサービス作りや内製化支援を行っています。【エンジニアが最も成長できる会社No.1】を目標にした、アジャイル組織として先端を走るエンジニア集団です。",
        logoImagePath: "/static/2022/sponsors/yumemi.png",
        url: "https://www.yumemi.co.jp/",
      },
    ],
  };

  return sponsorMasterList;
})();

export type SilverSponsorList = {
  ja: SilverSponsor[];
  en: SilverSponsor[];
};

export const silverSponsors: SilverSponsorList = {
  ja: [
    {
      name: "パイオニア株式会社",
      logoImagePath: "/static/2022/sponsors/pioneer.png",
      url: "https://jpn.pioneer/ja/?bz=rusttokyo",
    },
    {
      name: "フルカイテン株式会社",
      logoImagePath: "/static/2022/sponsors/fullkaiten.jpg",
      url: "https://corp.full-kaiten.com/index.html",
    },
    {
      name: "キャディ株式会社",
      logoImagePath: "/static/2022/sponsors/caddi.png",
      url: "https://corp.caddi.jp",
    },
    {
      name: "ユニークビジョン株式会社",
      logoImagePath: "/static/2022/sponsors/uniquevision.png",
      url: "https://www.uniquevision.co.jp/",
    },
    {
      name: "株式会社エモーションテック",
      logoImagePath: "/static/2022/sponsors/emotiontech.png",
      url: "https://www.emotion-tech.co.jp/",
    },
  ],
  en: [
    {
      name: "パイオニア株式会社",
      logoImagePath: "/static/2022/sponsors/pioneer.png",
      url: "https://jpn.pioneer/ja/?bz=rusttokyo",
    },
    {
      name: "フルカイテン株式会社",
      logoImagePath: "/static/2022/sponsors/fullkaiten.jpg",
      url: "https://corp.full-kaiten.com/index.html",
    },
    {
      name: "キャディ株式会社",
      logoImagePath: "/static/2022/sponsors/caddi.png",
      url: "https://corp.caddi.jp",
    },
    {
      name: "ユニークビジョン株式会社",
      logoImagePath: "/static/2022/sponsors/uniquevision.png",
      url: "https://www.uniquevision.co.jp/",
    },
    {
      name: "株式会社エモーションテック",
      logoImagePath: "/static/2022/sponsors/emotiontech.png",
      url: "https://www.emotion-tech.co.jp/",
    },
  ],
};

export type BronzeSponsorList = {
  ja: BronzeSponsor[];
  en: BronzeSponsor[];
};

export const bronzeSponsors: BronzeSponsorList = {
  ja: [
    {
      name: "株式会社estie",
      logoImagePath: "/static/2022/sponsors/estie.png",
      url: "https://www.estie.jp/corp/",
    },
    {
      name: "NOWIST株式会社",
      logoImagePath: "/static/2022/sponsors/nowist.jpg",
      url: "https://nowist.co.jp/",
    },
  ],
  en: [
    {
      name: "株式会社estie",
      logoImagePath: "/static/2022/sponsors/estie.png",
      url: "https://www.estie.jp/corp/",
    },
    {
      name: "NOWIST株式会社",
      logoImagePath: "/static/2022/sponsors/nowist.jpg",
      url: "https://nowist.co.jp/",
    },
  ],
};

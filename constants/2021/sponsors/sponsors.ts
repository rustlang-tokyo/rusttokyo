import type { GoldSponsor, SilverSponsor } from "@/types/2021/types";

export type GoldSponsorList = {
  ja: GoldSponsor[];
  en: GoldSponsor[];
};

export const goldSponsors: GoldSponsorList = (() => {
  const sponsorMasterList = {
    ja: [
      // {
      //   name: "Rust.Tokyo 2021",
      //   description:
      //     "Rust.Tokyo 2021 は9月18日に開催予定の、プログラミング言語Rustに関する日本国内向けのカンファレンスです。2019年に開催されたRust.Tokyoでは、200名以上の参加者、20セッションが執り行われました。",
      //   logoImagePath: "/static/2021/sponsors/sponsor_logo_template.png",
      //   url: "https://rust.tokyo/",
      // },
      {
        id: 2,
        name: "株式会社ゆめみ",
        description:
          "5000万人のみんなが知ってるあのサービス、実はゆめみが作ってます。大手企業や急成長スタートアップと共創型でWeb/スマホのサービス作りや内製化支援を行っています。【エンジニアが最も成長できる会社No.1】を目標にした、アジャイル組織として先端を走るエンジニア集団です。 ",
        logoImagePath: "/static/2021/sponsors/yumemi.png",
        url: "https://www.yumemi.co.jp/",
      },
    ],
    en: [
      {
        id: 4,
        name: "YUMEMI Inc.",
        description:
          "Many of the services you know, services that are used by 50 million people, are built by us at YUMEMI. Together with large enterprises and fast growing startups, we build web and mobile services and assist in-house development in a co-creative environment. We are an engineer-led agile organization and we aim to become the number one company for growing as an engineer.",
        logoImagePath: "/static/2021/sponsors/yumemi.png",
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
    // {
    //   name: "Rust.Tokyo 2021",
    //   logoImagePath: "/static/2021/sponsors/sponsor_logo_template.png",
    //   url: "https://rust.tokyo/",
    // },
    {
      name: "キャディ株式会社",
      logoImagePath: "/static/2021/sponsors/caddi.png",
      url: "https://corp.caddi.jp/recruit/eng",
    },
    {
      name: "Concordium",
      logoImagePath: "/static/2021/sponsors/concordium.png",
      url: "https://hashhub-research.com/articles/2021-04-10-about-concordium",
    },
    {
      name: "フォルシア株式会社",
      logoImagePath: "/static/2021/sponsors/forcia.png",
      url: "https://www.forcia.com/",
    },
    {
      name: "VANDDD株式会社",
      logoImagePath: "/static/2021/sponsors/vanddd.png",
      url: "https://vanddd.com/",
    },
    {
      name: "ウォンテッドリー株式会社",
      logoImagePath: "/static/2021/sponsors/wantedly.png",
      url: "https://docs.wantedly.dev/",
    },
    {
      name: "合同会社ザウエル",
      logoImagePath: "/static/2021/sponsors/zauel.png",
      url: "https://zauel.co.jp/",
    },
  ],
  en: [
    {
      name: "CADDi",
      logoImagePath: "/static/2021/sponsors/caddi.png",
      url: "https://corp.caddi.jp/recruit/eng",
    },
    {
      name: "Concordium",
      logoImagePath: "/static/2021/sponsors/concordium.png",
      url: "https://concordium.com/",
    },
    {
      name: "FORCIA",
      logoImagePath: "/static/2021/sponsors/forcia.png",
      url: "https://www.forcia.com/en/",
    },
    {
      name: "VANDDD",
      logoImagePath: "/static/2021/sponsors/vanddd.png",
      url: "https://vanddd.com/",
    },
    {
      name: "Wantedly",
      logoImagePath: "/static/2021/sponsors/wantedly.png",
      url: "https://docs.wantedly.dev/",
    },
    {
      name: "Zauel",
      logoImagePath: "/static/2021/sponsors/zauel.png",
      url: "https://zauel.co.jp/",
    },
  ],
};

export type PagePath = {
  ja: string;
  en: string;
};

export const topPagePath = {
  ja: "/2021/",
  en: "/2021/en/",
};

export const lineupPagePath = {
  ja: "/2021/lineup/",
  en: "/2021/lineup/en",
};

export const descriptionPagePath = (id: number) => {
  return {
    ja: `/2021/lineup/${id}/`,
    en: `/2021/lineup/en/${id}/`,
  };
};

export const sponsorPagePath = {
  ja: "/2021/sponsors/",
  en: "/2021/sponsors/en/",
};

export const cocPagePath = {
  ja: "/2021/coc/",
  en: "/2021/coc/en",
};

export const sctaPagePath = {
  ja: "/scta",
  en: "/scta", // 英語版ページは存在しないが
};

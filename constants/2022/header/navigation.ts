export type PagePath = {
  ja: string;
  en: string;
};

export const topPagePath = {
  ja: "/2022/",
  en: "/2022/en/",
};

export const lineupPagePath = {
  ja: "/2022/lineup/",
  en: "/2022/lineup/en",
};

export const descriptionPagePath = (id: number) => {
  return {
    ja: `/2022/lineup/${id}/`,
    en: `/2022/lineup/en/${id}/`,
  };
};

export const sponsorPagePath = {
  ja: "/2022/sponsors/",
  en: "/2022/sponsors/en/",
};

export const cocPagePath = {
  ja: "/2022/coc/",
  en: "/2022/coc/en",
};

export const sctaPagePath = {
  ja: "/scta",
  en: "/scta", // 英語版ページは存在しないが
};

export const jobboardPagePath = {
  ja: "/2022/jobboard/",
  en: "/2022/jobboard/en/",
};

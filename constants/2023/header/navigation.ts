export type PagePath = {
  ja: string;
  en: string;
};

export const topPagePath = {
  ja: "/2023/",
  en: "/2023/en/",
};

export const lineupPagePath = {
  ja: "/2023/lineup/",
  en: "/2023/lineup/en",
};

export const descriptionPagePath = (id: number) => {
  return {
    ja: `/2023/lineup/${id}/`,
    en: `/2023/lineup/en/${id}/`,
  };
};

export const sponsorPagePath = {
  ja: "/2023/sponsors/",
  en: "/2023/sponsors/en/",
};

// NOTE(tkat0): redirect to Google Docs. See netlify.toml.
export const cocPagePath = {
  ja: "/coc",
  en: "/coc",
};

export const sctaPagePath = {
  ja: "/scta",
  en: "/scta", // 英語版ページは存在しないが
};

export const jobboardPagePath = {
  ja: "/2023/jobboard/",
  en: "/2023/jobboard/en/",
};

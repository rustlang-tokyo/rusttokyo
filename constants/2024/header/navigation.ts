export type PagePath = {
  ja: string;
  en: string;
};

export const topPagePath = {
  ja: "/",
  en: "/en/",
};

export const lineupPagePath = {
  ja: "/lineup/",
  en: "/lineup/en/",
};

export const descriptionPagePath = (id: number) => {
  return {
    ja: `/lineup/${id}/`,
    en: `/lineup/en/${id}/`,
  };
};

export const sponsorPagePath = {
  ja: "/sponsors/",
  en: "/sponsors/en/",
};

// NOTE(tkat0): redirect to Google Docs. See netlify.toml.
export const cocPagePath = {
  ja: "/coc/",
  en: "/coc/",
};

export const sctaPagePath = {
  ja: "/scta/",
  en: "/scta/", // 英語版ページは存在しないが
};

export const jobboardPagePath = {
  ja: "/jobboard/",
  en: "/jobboard/en/",
};

export const accessPagePath = {
  ja: "/access/",
  en: "/access/en/",
};

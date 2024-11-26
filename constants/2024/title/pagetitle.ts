export type PageTitle = {
  ja: string;
  en: string;
};

export const lineup = {
  ja: "セッション一覧とスケジュール",
  en: "Lineup & Schedule",
};

export const sessionDescprition = (
  sessionTitle: string,
  speakerName: string,
) => {
  return {
    ja: `セッション: ${sessionTitle} by ${speakerName}`,
    en: `Session: ${sessionTitle} by ${speakerName}`,
  };
};

export const sponsors = {
  ja: "スポンサー",
  en: "Sponsors",
};

export const codeOfConduct = {
  ja: "行動規範",
  en: "Code of conduct",
};

export const stca = {
  ja: "特定商取引に基づく表示",
  en: "Legal information and notices required by Act on Specified Commercial Transactions",
};

export const jobboard = {
  ja: "ジョブボード",
  en: "JobBoard",
};

export const access = {
  ja: "アクセス",
  en: "Access",
};

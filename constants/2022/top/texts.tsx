export type JaTopTextList = TopTextList;
export type EnTopTextList = TopTextList;

type TopTextList = {
  dateText: string;
  addCalendarText: string;
  purchaseTicketText: string;
  readFullText: string;
  readFullTextDisable: string;
  bronzeSponsor: string;
  silverSponsor: string;
  goldSponsor: string;
};

export type TopI18nTexts = {
  ja: JaTopTextList;
  en: EnTopTextList;
};

export const topI18nTexts: Record<"ja" | "en", TopTextList> = {
  ja: {
    dateText: "2022年9月23日（金・祝） 10:00am 開催",
    addCalendarText: "予定をカレンダーに入れる",
    purchaseTicketText: "チケットを取得する",
    readFullText: "全部読む",
    readFullTextDisable: "閉じる",
    bronzeSponsor: "ブロンズスポンサー",
    silverSponsor: "シルバースポンサー",
    goldSponsor: "ゴールドスポンサー",
  },
  en: {
    dateText: "September 23rd at 10:00am JST",
    addCalendarText: "Save the date",
    purchaseTicketText: "Register to attend",
    readFullText: "Read full text",
    readFullTextDisable: "Close",
    bronzeSponsor: "Bronze Sponsor",
    silverSponsor: "Silver Sponsor",
    goldSponsor: "Gold Sponsor",
  },
};

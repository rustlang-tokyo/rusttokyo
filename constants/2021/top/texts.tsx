export type JaTopTextList = TopTextList;
export type EnTopTextList = TopTextList;

type TopTextList = {
  addCalendarText: string;
  purchaseTicketText: string;
  applySponsor: string;
  readFullText: string;
  readFullTextDisable: string;
  finishedSponsorApplicationMessage: string;
  silverSponsor: string;
  goldSponsor: string;
};

export type TopI18nTexts = {
  ja: JaTopTextList;
  en: EnTopTextList;
};

export const topI18nTexts = {
  ja: {
    addCalendarText: "予定をカレンダーに入れる",
    purchaseTicketText: "チケットを購入する",
    applySponsor: "スポンサーに応募する",
    readFullText: "全部読む",
    readFullTextDisable: "閉じる",
    finishedSponsorApplicationMessage:
      "スポンサーの応募は締め切りました。たくさんのご応募ありがとうございました。",
    silverSponsor: "シルバースポンサー",
    goldSponsor: "ゴールドスポンサー",
  },
  en: {
    addCalendarText: "Save the date",
    purchaseTicketText: "Register to attend",
    applySponsor: "Be a sponsor",
    readFullText: "Read full text",
    readFullTextDisable: "Close",
    finishedSponsorApplicationMessage:
      "Calling for sponsor has been over. Thank you for the application.",
    silverSponsor: "Silver Sponsor",
    goldSponsor: "Gold Sponsor",
  },
};

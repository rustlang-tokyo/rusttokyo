export type JaTopTextList = TopTextList;
export type EnTopTextList = TopTextList;

type TopTextList = {
  dateText: string;
  addCalendarText: string;
  purchaseTicketText: string;
  registerAttendOnline: string;
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
    // TOOD(tkat0): Update once start time is finalized.
    dateText: "2023年10月21日（土） 開催",
    // dateText: "2023年10月21日（土） 13:00 開催",
    addCalendarText: "予定をカレンダーに入れる",
    purchaseTicketText: "チケットを取得する",
    registerAttendOnline: "オンライン視聴に登録する",
    readFullText: "全部読む",
    readFullTextDisable: "閉じる",
    bronzeSponsor: "ブロンズスポンサー",
    silverSponsor: "シルバースポンサー",
    goldSponsor: "ゴールドスポンサー",
  },
  en: {
    // TOOD(tkat0): Update once start time is finalized.
    dateText: "October 21st",
    // dateText: "October 21st at 10:00am JST",
    addCalendarText: "Save the date",
    purchaseTicketText: "Register to attend",
    registerAttendOnline: "Register to attend online",
    readFullText: "Read full text",
    readFullTextDisable: "Close",
    bronzeSponsor: "Bronze Sponsor",
    silverSponsor: "Silver Sponsor",
    goldSponsor: "Gold Sponsor",
  },
};

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
  venueSponsor: string;
  submitProposal: string;
};

export type TopI18nTexts = {
  ja: JaTopTextList;
  en: EnTopTextList;
};

export const topI18nTexts: Record<"ja" | "en", TopTextList> = {
  ja: {
    dateText: "2024年11月30日（土）11:00 開催",
    addCalendarText: "予定をカレンダーに入れる",
    purchaseTicketText: "チケットを取得する",
    registerAttendOnline: "オンライン視聴に登録する",
    readFullText: "全部読む",
    readFullTextDisable: "閉じる",
    bronzeSponsor: "ブロンズスポンサー",
    silverSponsor: "シルバースポンサー",
    goldSponsor: "ゴールドスポンサー",
    venueSponsor: "会場スポンサー",
    submitProposal: "プロポーザルを応募する",
  },
  en: {
    dateText: "30th Nobember at 11:00am JST",
    addCalendarText: "Save the date",
    purchaseTicketText: "Register to attend",
    registerAttendOnline: "Register to attend online",
    readFullText: "Read full text",
    readFullTextDisable: "Close",
    bronzeSponsor: "Bronze Sponsor",
    silverSponsor: "Silver Sponsor",
    goldSponsor: "Gold Sponsor",
    venueSponsor: "Venue Sponsor",
    submitProposal: "Submit proposals",
  },
};

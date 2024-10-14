export type SpeakerInfo = {
  name: string;
  profile: string;
  twitterAccount?: string;
  githubAccount?: string;
  avatarSrc: string;
  // padding for avatar icon.
  padding?: number;
};

const organiserAvatarBase = "/static/2024/organizers/";

// Rust.Tokyo team
export const dorayakikun: SpeakerInfo = {
  name: "TODO",
  profile: "",
  twitterAccount: "@x",
  avatarSrc: `${organiserAvatarBase}dorayakikun.png`,
};

const avatarBaseSrc = "/static/2024/speakers/";

export const speaker1: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  twitterAccount: "@x",
  avatarSrc: `${avatarBaseSrc}s_1.jpg`,
};

export const speaker2: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  twitterAccount: "@x",
  avatarSrc: `${avatarBaseSrc}s_2.jpg`,
};

export const speaker3: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  twitterAccount: "@x",
  avatarSrc: `${avatarBaseSrc}s_3.jpg`,
};

export const speaker4: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  twitterAccount: "@x",
  avatarSrc: `${avatarBaseSrc}s_4.jpg`,
};

export const speaker5: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  avatarSrc: `${avatarBaseSrc}s_5.jpg`,
};

export const speaker6: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  twitterAccount: "@x",
  avatarSrc: `${avatarBaseSrc}s_6.jpg`,
};

export const speaker4_en: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  twitterAccount: "@x",
  avatarSrc: `${avatarBaseSrc}s_4.jpg`,
};

export const sponsor1: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  avatarSrc: `${avatarBaseSrc}sponsor_1.png`,
};

export const sponsor2: SpeakerInfo = {
  name: "TODO",
  profile: "TODO TODO TODO",
  avatarSrc: `${avatarBaseSrc}sponsor_2.jpg`,
  padding: 1,
};

export type GoldSponsor = {
  id: number;
  name: string;
  description: string;
  logoImagePath: string;
  url: string;
};

export type SilverSponsor = {
  name: string;
  logoImagePath: string;
  url: string;
  // NOTE(tkat0): workaround for yumemi-inc.
  inverse?: boolean;
};

export type BronzeSponsor = {
  name: string;
  logoImagePath: string;
  url: string;
};

export type VenueSponsor = {
  name: string;
  logoImagePath: string;
  url: string;
};

export type JobBoardSponsor = {
  name: string;
  imgSrc: string;
  description: string;
  url: string;
  inverse?: boolean;
};

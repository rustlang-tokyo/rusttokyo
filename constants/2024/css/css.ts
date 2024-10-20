import { css } from "@emotion/css";

export const trackColor = {
  a: {
    primary: "rgb(255,71,167)",
    secondary: "rgb(255,209,233)",
  },
  b: {
    primary: "rgb(143,243,244)",
    secondary: "rgb(235,255,254)",
  },
};

export const headlines = css`
  text-align: center;
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: var(--chakra-colors-cottonCandy-100);
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const iconWrapper = css`
  display: inline;
`;

export const trackHeadlinesA = css`
  color: ${trackColor.a.primary};
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background: ${trackColor.a.secondary};
    position: absolute;
    bottom: 4px;
    left: 0;
    margin: auto;
  }
`;

export const trackHeadlinesB = css`
  color: ${trackColor.b.primary};
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background: ${trackColor.b.secondary};
    position: absolute;
    bottom: 4px;
    left: 0;
    margin: auto;
  }
`;

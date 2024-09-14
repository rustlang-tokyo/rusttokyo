import { css } from "@emotion/css";

export const headlines = css`
  text-align: center;
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 2rem;
    height: 3px;
    background: #bbb;
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

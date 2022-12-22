import {css} from "styled-components";
import JosefinRegular from '../assets/fonts/Josefin-Sans/Josefin-Regular.woff2'

console.log({ JosefinRegular })
export const fontStyles = css`
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JosefinRegular}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`
import {createGlobalStyle} from "styled-components";
import {fontStyles} from "./fonts.js";
import {variables} from "./variables.js";

export const Global = createGlobalStyle`
  ${variables};
  ${fontStyles};
`
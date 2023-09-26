import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./GlobalStyles";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { themeConfig } from './config';

export default extendTheme(
    { config: themeConfig }, //  color mode config
    { breakpoints }, // Breakpoints
    globalStyles,
    buttonStyles, // Button styles
);
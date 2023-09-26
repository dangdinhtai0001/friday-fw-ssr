import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./GlobalStyles";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";

export default extendTheme(
    { breakpoints }, // Breakpoints
    globalStyles,
    buttonStyles, // Button styles
);
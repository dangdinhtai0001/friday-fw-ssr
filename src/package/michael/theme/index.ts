import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./GlobalStyles";
import { themeConfig } from './config';
import { semanticTokens } from './sematic-tokens';
import { fonts, textStyles } from './typography';

import { menuTheme } from './components/Menu';
import { cardTheme } from './components/Card';
import { buttonTheme } from './components/Button';

export default extendTheme({
    // ----------------------------------------------------------------
    styles: globalStyles,
    // ---------------------------------------------------------------- 
    semanticTokens: semanticTokens,
    // ----------------------------------------------------------------
    fonts: fonts,
    textStyles: textStyles,
    // ----------------------------------------------------------------
    config: themeConfig,
    // ---------------------------------------------------------------- 
    components: {
        Menu: menuTheme,
        Card: cardTheme,
        Button: buttonTheme
    }
});
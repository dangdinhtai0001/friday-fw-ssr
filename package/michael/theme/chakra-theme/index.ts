import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./GlobalStyles";
import { breakpoints } from "./foundations/breakpoints";
import { themeConfig } from './config';
import { colors } from './colors';

import { accordionStyles } from './components/accordion';

export default extendTheme({

    globalStyles,
    config: themeConfig, //  color mode config
    colors: colors,
    // components 
    components: {
        Accordion: accordionStyles
    }
}
);
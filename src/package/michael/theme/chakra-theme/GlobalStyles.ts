import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

export const globalStyles = {
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                overflowX: "hidden",
                bgColor: mode("background.100", "background.900")(props),
                fontFamily: "Helvetica, sans-serif",
            },
            html: {
                fontFamily: "Helvetica, sans-serif",
            },
        }),
    },
};
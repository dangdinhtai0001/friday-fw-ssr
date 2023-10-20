import type { Styles, GlobalStyleProps } from "@chakra-ui/theme-tools";

export const globalStyles: Styles = {
    global: (props: GlobalStyleProps) => ({
        body: {
            overflowX: "hidden",
            bgColor: "primary.background",
        },

        // =================================================================
        '::-webkit-scrollbar': {
            borderRadius: '10px',
            w: '5px',
            bgColor: 'primary.background',
        },
        '::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'black.40',
        },
    }),
};
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

export const globalStyles = {
    colors: {
        "primary": {
            "50": "#ebf1ff",
            "100": "#d6e1fa",
            "200": "#c1d3f3",
            "300": "#a9c4ed",
            "400": "#8fb5e8",
            "500": "#76a7e3",
            "600": "#5d99dd",
            "700": "#4488d7",
            "800": "#2b78d2",
            "900": "#1a67cc"
        },
        "secondary": {
            "50": "#f1f5fb",
            "100": "#e4eaf8",
            "200": "#d7e0f6",
            "300": "#cadcf4",
            "400": "#c1d2f2",
            "500": "#b4caf0",
            "600": "#a8c2ee",
            "700": "#9cbbeb",
            "800": "#8fb4e9",
            "900": "#83aee7"
        },
        "success": {
            "50": "#e9fbe5",
            "100": "#d6f7d8",
            "200": "#c3f4cb",
            "300": "#b0f1be",
            "400": "#9decb1",
            "500": "#8ae8a4",
            "600": "#77e497",
            "700": "#64e18a",
            "800": "#51dd7d",
            "900": "#3ed970"
        },
        "warning": {
            "50": "#fff4e1",
            "100": "#ffeed8",
            "200": "#ffebcf",
            "300": "#ffe3c6",
            "400": "#ffdbc3",
            "500": "#ffd3c0",
            "600": "#ffcccD",
            "700": "#ffc5ba",
            "800": "#ffbeb7",
            "900": "#ffb7b4"
        },
        "errors": {
            "50": "#ffe8d9",
            "100": "#ffdfd0",
            "200": "#ffd6c7",
            "300": "#ffcdbe",
            "400": "#ffc4b5",
            "500": "#ffbbb2",
            "600": "#ffb2ae",
            "700": "#ffa9ab",
            "800": "#ffa0a8",
            "900": "#ff97a5"
        },
        "background": {
            "50": "#f1f5fb",
            "100": "#e4eaf8",
            "200": "#d7e0f6",
            "300": "#cadcf4",
            "400": "#c1d2f2",
            "500": "#b4caf0",
            "600": "#a8c2ee",
            "700": "#9cbbeb",
            "800": "#8fb4e9",
            "900": "#83aee7"
        },
        "text": {
            "50": "#242424",
            "100": "#383838",
            "200": "#4f4f4f",
            "300": "#616161",
            "400": "#737373",
            "500": "#858585",
            "600": "#969696",
            "700": "#a8a8a8",
            "800": "#bababa",
            "900": "#cfcfcf"
        }
    }
    ,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                overflowX: "hidden",
                bgColor: mode("background.50", "#f1f5fb")(props),
                fontFamily: "Helvetica, sans-serif",
            },
            html: {
                fontFamily: "Helvetica, sans-serif",
            },
        }),
    },
};
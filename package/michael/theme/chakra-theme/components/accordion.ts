import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys);

const sidebar = definePartsStyle({
    panel: {
        p: 0,
    },
    button: {
        py: 2,
        px: 8,
        borderRadius: 1,
    },
    container: {
        border: 'none',
        mx: 1,
    },
    root: {
        width: 'full',
    }
});

export const accordionStyles = defineMultiStyleConfig({ variants: { sidebar }, });
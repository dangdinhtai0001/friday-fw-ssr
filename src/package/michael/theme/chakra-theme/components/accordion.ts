import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys);

const sidebar = definePartsStyle({
    panel: {
        p: 0,
    },
    button: {
        py: 2.5,
        borderRadius: 1,
    },
    container: {
        border: 'none',
    },
    root: {
        width: '100%',
    }
});

export const accordionStyles = defineMultiStyleConfig({ variants: { sidebar }, });
import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys);

const sidebarVariant = definePartsStyle({

});

const baseStyle = definePartsStyle({
    panel: {
        padding: '0px',
    },
    button: {
        border: 'none',
    }
})

export const accordionStyles = defineMultiStyleConfig({ baseStyle })
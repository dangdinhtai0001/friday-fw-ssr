import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys);

const sidebarVariant = definePartsStyle({

});

const baseStyle = definePartsStyle({
    // define the part you're going to style
    container: {
        bg: 'red.200', // change the backgroundColor of the container
    },
})

export const accordionStyles = defineMultiStyleConfig({ baseStyle })
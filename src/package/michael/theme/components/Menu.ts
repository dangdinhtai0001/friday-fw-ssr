import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
    // define the part you're going to style
    button: {
        // this will style the MenuButton component
        _hover: {
            bg: 'black.5',
            cursor: 'pointer',
        },

        pr: 'measurement.8',
        py: 'measurement.4',
        gap: 'measurement.4',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'strech',
        flex: '1 0 0',
        w: 'full',

        color: 'black.100',
        fontStyle: '14.regular',
    },
    list: {
        // this will style the MenuList component
        transition: "all 0.1s",
        w: 'full',
        p: 0,
        borderRadius: 'measurement.8',

        bg: 'primary.background',
    },
    item: {
        // this will style the MenuItem and MenuItemOption components
        pr: 'measurement.8',
        py: 'measurement.4',
        gap: 'measurement.4',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'strech',
        flex: '1 0 0',
        w: 'full',

        bg: 'primary.background',

        _hover: {
            bg: 'black.5',
            cursor: 'pointer'
        },
        _focus: {
            bg: 'black.5',
        }
    },
    groupTitle: {
        // this will style the text defined by the title prop
        // in the MenuGroup and MenuOptionGroup components
        textStyle: '14.regular',
        color: 'black.40'
    },
    command: {
        // this will style the text defined by the command
        // prop in the MenuItem and MenuItemOption components
    },
    divider: {
        // this will style the MenuDivider component
    },
});

// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })
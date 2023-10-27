import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
    // define the part you're going to style
    container: {
        p: 'measurement.24',
        gap: 'measurement.16',
        borderRadius: 'measurement.16',
        bg: "primary.background"
    },
    header: {
        p: 'measurement.0',
        pb: 'measurement.8',
        borderBottomStyle: 'solid',
        borderBottomColor: 'black.10',
        borderBottomWidth: '1px'
    },
    body: {
        p: 'measurement.0',
    },
    footer: {
    },
})

export const cardTheme = defineMultiStyleConfig({ baseStyle })
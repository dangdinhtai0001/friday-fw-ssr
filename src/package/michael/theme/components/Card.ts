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
    },
    header: {
        p: 'measurement.0',
    },
    body: {
    },
    footer: {
    },
})

const sizes = {
    md: definePartsStyle({
        container: {
        },
    }),
}

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes })
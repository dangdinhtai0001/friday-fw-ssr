import { StyleFunctionProps, defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { textStyles } from '@package/michael/theme/typography';
import _ from 'lodash';
import { reduceOpacity, getColorBrightness, getColorCodeFromChakraTheme, adjustBrightness } from '@package/raphael/utils/colors'

// ================================================================= || Base || =================================================================
const baseStyle = defineStyle({
    _active: {
        transform: 'scale(0.8)'
    },

    _hover: {
    }
})
// ================================================================= || Sizes || =================================================================
const small = defineStyle({
    py: 'measurement.4',
    px: 'measurement.8',
    gap: 'measurement.4',
    borderRadius: 'measurement.8',
    // 14.regular
    ...textStyles[14]?.regular
});

const medium = defineStyle({
    py: 'measurement.8',
    px: 'measurement.16',
    gap: 'measurement.8',
    borderRadius: 'measurement.12',
    // 18 regular
    ...textStyles[18]?.regular
});

const large = defineStyle({
    py: 'measurement.16',
    px: 'measurement.24',
    gap: 'measurement.8',
    borderRadius: 'measurement.16',
    // 18 regular
    ...textStyles[18]?.regular
});

// ================================================================= || Variants || =================================================================
const _solid = defineStyle((props: StyleFunctionProps) => {
    const { colorScheme, colorMode } = props;

    let colorCode = getColorCodeFromChakraTheme(props);

    return {
        bg: colorScheme,
        color: getColorBrightness(colorCode) > 0.5 ?
            (colorMode === 'light' ? "black.100" : "white.100") :
            (colorMode === 'light' ? "white.100" : "black.100"),

        _hover: {
            bg: getColorBrightness(colorCode) > 0.5 ? adjustBrightness(colorCode, -0.2) : adjustBrightness(colorCode, 0.2),
        },

        _focus: {
            bg: getColorBrightness(colorCode) > 0.5 ? adjustBrightness(colorCode, -0.2) : adjustBrightness(colorCode, 0.2),
        }
    }
});

const _outline = defineStyle((props: StyleFunctionProps) => {
    const { colorScheme, colorMode } = props;

    let colorCode = getColorCodeFromChakraTheme(props);

    return {
        bg: 'transparent',
        color: colorScheme,

        borderStyle: 'solid',
        borderColor: colorScheme,
        borderWidth: '1px',

        _hover: {
            bg: colorScheme,
            color: getColorBrightness(colorCode) > 0.5 ?
                (colorMode === 'light' ? "black.100" : "white.100") :
                (colorMode === 'light' ? "white.100" : "black.100"),
        },

        _focus: {
            bg: colorScheme,
            color: getColorBrightness(colorCode) > 0.5 ?
                (colorMode === 'light' ? "black.100" : "white.100") :
                (colorMode === 'light' ? "white.100" : "black.100"),
        }
    }
});

const _ghost = defineStyle((props: StyleFunctionProps) => {
    const { colorScheme, colorMode } = props;

    let colorCode = getColorCodeFromChakraTheme(props);

    return {
        bg: 'transparent',
        color: colorScheme,

        _hover: {
            bg: colorScheme,
            color: getColorBrightness(colorCode) > 0.5 ?
                (colorMode === 'light' ? "black.100" : "white.100") :
                (colorMode === 'light' ? "white.100" : "black.100"),
        },

        _focus: {
            bg: colorScheme,
            color: getColorBrightness(colorCode) > 0.5 ?
                (colorMode === 'light' ? "black.100" : "white.100") :
                (colorMode === 'light' ? "white.100" : "black.100"),
        }
    }
});

export const buttonTheme = defineStyleConfig({
    baseStyle,
    sizes: { small, medium, large },
    variants: { _solid, _outline, _ghost }
});




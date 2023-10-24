import { StyleFunctionProps, defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { textStyles } from '@package/michael/theme/typography';

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

const _solid = defineStyle((props: StyleFunctionProps) => {
    const { colorScheme } = props

    return {
        bg: colorScheme,

        _hover: {
            border: '1px solid var(--chakra-colors-black-100)',
            // var(--chakra-colors-black-20)
            // bg: mix(colorScheme, "#000", 0.75)

        }
    }
})

export const buttonTheme = defineStyleConfig({
    sizes: { small, medium, large },
    variants: { _solid }
})


import { Flex, Text } from '@chakra-ui/react';

import { IItemContentProps } from './_types.d';

import { IconSwitcher } from '@package/uriel/atoms/icon-switcher';

export default function ItemContent(props: IItemContentProps) {
    const {
        icon,
        label,
        isOpen = false,
        expandIcon,
        collapseIcon
    } = props;

    return (
        <Flex
            p='measurement.4'
            alignItems='center'
            alignContent='center'
            gap='measurement.4'
            alignSelf='strech'
        >
            {(expandIcon && collapseIcon) && (
                <IconSwitcher
                    closeIcon={expandIcon}
                    openIcon={collapseIcon}
                    isOpen={isOpen}
                />
            )}
            {icon}
            <Text color='black.100' textStyle='14.regular'>{label}</Text>
        </Flex>
    );
};

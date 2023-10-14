import { Flex, Icon, Text } from '@chakra-ui/react';

import { IItemContentProps } from './_types.d';

import { ToggleIcon } from '@package/uriel/atoms/toggle-icon'

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
                <ToggleIcon
                    closeIcon={collapseIcon}
                    openIcon={expandIcon}
                    isOpen={isOpen}
                    iconProps={{ color: 'black.40', w: 'measurement.16', h: 'measurement.16' }}
                />
            )}
            {icon && <Icon as={icon} />}
            <Text color='black.100' textStyle='14.regular'>{label}</Text>
        </Flex>
    );
};

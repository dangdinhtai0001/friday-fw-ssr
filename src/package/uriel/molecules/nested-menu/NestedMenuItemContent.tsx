import { Flex, Icon, Text } from '@chakra-ui/react';

import { IINestedMenuItemContentProps } from './_types.d';
import { menuButtonFlexStyles } from './utils';
function NestedMenuItemContent(props: IINestedMenuItemContentProps) {
    const { icon, label } = props;
    return (
        <Flex {...menuButtonFlexStyles}>
            {icon && <Icon as={icon} />}
            <Text color='black.100' textStyle='14.regular'>{label}</Text>
        </Flex>
    );
};

export default NestedMenuItemContent;

import * as React from 'react';
import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { ISidebarProps } from './_types';
import { MdSettings } from 'react-icons/md';
import { IconType } from 'react-icons';

import { INavItemProps } from '@/package/uriel/molecules/nav-item/_type';
import NavItemList from '../../molecules/nav-item/NavItemList';

function Sidebar(props: ISidebarProps) {
    const { collapsedWidth = 50, expandedWidth = 150, isExpanded = true } = props;

    return (
        <Box
            height={'full'}
            width={isExpanded ? expandedWidth : collapsedWidth}
            bg={useColorModeValue('surface.100', 'surface.900')}
        >
            {/* ------------------------------- LOGO ------------------------------- */}
            <Flex align='center' justify='center'>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
            </Flex>
            {/* ------------------------------- ITEMS ------------------------------- */}
            {items.map((item, index) => (
                <NavItemList key={index} {...item}></NavItemList>
            ))}
        </Box>
    );
};

const iconMap: Record<string, IconType> = {
    item1: MdSettings
}

const items: INavItemProps[] = [
    { title: 'Item 1', disabledHover: true, items: [{ title: 'Item 1.1' }], icon: iconMap['item1'] },
    { title: 'Item 2', disabledHover: true, items: [{ title: 'Item 2.1' }, { title: 'Item 2.2' }, { title: 'Item 2.3' }] },
    { title: 'Item 3', disabledHover: true, items: [{ title: 'Item 3.1' }] },
]
export default Sidebar;

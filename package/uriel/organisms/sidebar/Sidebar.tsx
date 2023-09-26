import * as React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { ISidebarProps } from './_types';

import { NavItem } from '@/package/uriel/molecules/nav-item';
import { INavItemProps } from '@/package/uriel/molecules/nav-item/_type';

function Sidebar(props: ISidebarProps) {
    const { collapsedWidth = 50, expandedWidth = 150, isExpanded = true } = props;

    return (
        <div>
            <Box
                height={'full'}
                width={isExpanded ? expandedWidth : collapsedWidth}
                bg={useColorModeValue('surface.100', 'surface.900')}
            >
                sidebar nef
                {items.map((item, index) => (
                    <NavItem key={index} {...item}></NavItem>
                ))}
            </Box>
        </div>
    );
};

const items: INavItemProps[] = [
    { title: 'Dashboard', items: [{ title: 'Dashboard 2' }] },
    { title: 'Calendar', },
]
export default Sidebar;

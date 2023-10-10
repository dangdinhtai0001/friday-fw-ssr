import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';

import { ISidebarProps } from './_types';
import { NavItem, NavItemList } from '@package/uriel/molecules/nav-item';

import { _sidebar } from '@package/michael/routes'


function Sidebar(props: ISidebarProps) {
    const { collapsedWidth = 50, expandedWidth = 150, isExpanded = true } = props;

    console.log(_sidebar);

    return (
        <Flex direction='column' bgColor={useColorModeValue('surface.100', 'surface.900')} className='sidebar'>
            {/* ------------------------------- LOGO ------------------------------- */}
            <Flex alignItems='flex-start' justifyContent='center' py={5}>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
            </Flex>
            <Box
                height='full'
                overflow='auto'
                width={isExpanded ? expandedWidth : collapsedWidth}
            >

                {/* ------------------------------- ITEMS ------------------------------- */}
                <Flex direction='column' alignItems='flex-start' alignSelf='stretch'>
                    {_sidebar!.filter(i => !i.isDefault).map((item, index) => (
                        <NavItemList key={index} {...item}></NavItemList>
                    ))}
                </Flex>
                {/* ------------------------------- ITEMS ------------------------------- */}
            </Box>
            <Flex direction='column' alignItems='flex-start' alignSelf='stretch'>
                {_sidebar!.filter(i => i.isDefault).map((item, index) => (
                    <NavItemList key={index} {...item}></NavItemList>
                ))}
            </Flex>
        </Flex>
    );
};

export default Sidebar;
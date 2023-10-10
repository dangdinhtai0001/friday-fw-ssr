import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ISidebarProps } from './_types';
import { NavItemList } from '@package/uriel/molecules/nav-item';

import { _sidebar } from '@package/michael/routes'


function Sidebar(props: ISidebarProps) {
    const { collapsedWidth = 50, expandedWidth = 150, isExpanded = true, logoHeight = '70px' } = props;

    return (
        <Flex
            as={motion.div}
            animate={{
                width: isExpanded ? expandedWidth : collapsedWidth,
            }}
            direction='column'
            bgColor={useColorModeValue('surface.100', 'surface.900')}
            className='sidebar'
        >
            {/* ------------------------------- LOGO ------------------------------- */}
            <Flex className='sidebar--logo' alignItems='center' justifyContent='center' h={logoHeight}>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
            </Flex>
            <Box height='full' overflow='auto' >
                {/* ------------------------------- ITEMS ------------------------------- */}
                <Flex direction='column' alignItems='flex-start' alignSelf='stretch'>
                    {_sidebar!.filter(i => !i.isDefault).map((item, index) => (
                        <NavItemList key={index} {...item} navSize={isExpanded ? 'large' : 'small'} />
                    ))}
                </Flex>
                {/* ------------------------------- ITEMS ------------------------------- */}
            </Box>
            <Flex direction='column' alignItems='flex-start' alignSelf='stretch'>
                {_sidebar!.filter(i => i.isDefault).map((item, index) => (
                    <NavItemList key={index} {...item} navSize={isExpanded ? 'large' : 'small'} />
                ))}
            </Flex>
        </Flex>
    );
};

export default Sidebar;
import * as React from 'react';
import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { MdDashboard, MdMeetingRoom, MdSchool } from 'react-icons/md';
import { PiStudent, PiBuildings } from 'react-icons/pi';
import { FcSettings } from 'react-icons/fc';

import { ISidebarProps } from './_types';
import { INavItemProps } from '@/package/uriel/molecules/nav-item/_type';
import NavItemList from '../../molecules/nav-item/NavItemList';

function Sidebar(props: ISidebarProps) {
    const { collapsedWidth = 50, expandedWidth = 150, isExpanded = true } = props;

    return (
        <Box
            height='full'
            width={isExpanded ? expandedWidth : collapsedWidth}
            bgColor={useColorModeValue('surface.100', 'surface.900')}
        >
            {/* ------------------------------- LOGO ------------------------------- */}
            <Flex alignItems='flex-start' justifyContent='center' py={5}>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
            </Flex>
            {/* ------------------------------- ITEMS ------------------------------- */}
            <Flex direction='column' alignItems='flex-start' alignSelf='stretch'>

                {items.map((item, index) => (
                    <NavItemList key={index} {...item}></NavItemList>
                ))}
            </Flex>
        </Box>
    );
};

const iconMap: Record<string, IconType> = {
    // ----------------------------------------------------------------
    dashboard: MdDashboard,
    // ----------------------------------------------------------------
    edu: MdSchool,
    edu_classroom: MdMeetingRoom,
    edu_student: PiStudent,
    edu_address: PiBuildings,
    // ----------------------------------------------------------------
    settings: FcSettings
}

const items: INavItemProps[] = [

    { title: 'Dashboard', icon: iconMap['dashboard'] },
    {
        title: 'Education', icon: iconMap['edu'], items: [
            { title: 'Classroom', icon: iconMap['edu_classroom'] },
            { title: 'Student', icon: iconMap['edu_student'] },
            { title: 'Address', icon: iconMap['edu_address'] },
        ]
    },
    { title: 'Settings', icon: iconMap['settings'] },
]
export default Sidebar;

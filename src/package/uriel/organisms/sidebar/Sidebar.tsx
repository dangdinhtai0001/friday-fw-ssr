import * as React from 'react';
import { Box, useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { FaRankingStar } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GiExpense } from 'react-icons/gi';
import { GrConfigure, GrSystem, GrUserAdmin } from 'react-icons/gr';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { MdDashboard, MdMeetingRoom, MdSchool, MdSupportAgent } from 'react-icons/md';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { PiStudent } from 'react-icons/pi';
import { GrMoney } from 'react-icons/gr';
import { TbMoneybag } from 'react-icons/tb';
import { GiMoneyStack, GiTeacher } from 'react-icons/gi';

import { ISidebarProps } from './_types';
import { INavItemProps } from '@/package/uriel/molecules/nav-item/_type';
import NavItemList from '../../molecules/nav-item/NavItemList';

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
                    {_sidebar!.map((item, index) => (
                        <NavItemList key={index} {...item}></NavItemList>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
};

// const iconMap: Record<string, IconType> = {
//     // ----------------------------------------------------------------
//     dashboard: MdDashboard,
//     // ----------------------------------------------------------------
//     admin: GrUserAdmin,
//     admin_users: FiUsers,
//     admin_setting: FiSettings,
//     admin_analyse: IoAnalyticsSharp,
//     // ----------------------------------------------------------------
//     edu: MdSchool,
//     edu_course: MdSchool,
//     edu_classroom: MdMeetingRoom,
//     edu_teacher: GiTeacher,
//     edu_student: PiStudent,
//     edu_result: FaRankingStar,
//     // ----------------------------------------------------------------
//     fin: GrMoney,
//     fin_tuition: TbMoneybag,
//     fin_other: RiMoneyDollarCircleLine,
//     fin_expense: GiExpense,
//     // ----------------------------------------------------------------
//     system: GrSystem,
//     system_config: GrConfigure,
//     system_support: MdSupportAgent,
// }

// const items: INavItemProps[] = [

//     { title: 'Trang chủ', icon: iconMap['dashboard'] },
//     {
//         title: 'Quản trị', icon: iconMap['admin'], items: [
//             { title: 'Người dùng', icon: iconMap['admin_users'] },
//             { title: 'Cài đặt', icon: iconMap['admin_setting'] },
//             { title: 'Thống kê', icon: iconMap['admin_analyse'] },
//         ]
//     },
//     {
//         title: 'Đào tạo', icon: iconMap['edu'], items: [
//             { title: 'Khóa học', icon: iconMap['edu_course'] },
//             { title: 'Lớp học', icon: iconMap['edu_classroom'] },
//             { title: 'Giáo viên', icon: iconMap['edu_teacher'] },
//             { title: 'Học viên', icon: iconMap['edu_student'] },
//             { title: 'Kết quả học tập', icon: iconMap['edu_result'] },
//         ]
//     },
//     {
//         title: 'Tài chính', icon: iconMap['fin'], items: [
//             { title: 'Học phí', icon: iconMap['fin_tuition'] },
//             { title: 'Các khoản thu khác', icon: iconMap['fin_other'] },
//             { title: 'Các khoản chi', icon: iconMap['fin_expense'] },
//         ]
//     },
//     {
//         title: 'Hệ thống', icon: iconMap['system'], items: [
//             { title: 'Cấu hình hệ thống', icon: iconMap['system_config'] },
//             { title: 'Hỗ trợ', icon: iconMap['system_support'] },
//         ]
//     },
// ]
export default Sidebar;
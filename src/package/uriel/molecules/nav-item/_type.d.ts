import { IconType } from 'react-icons';
import type { FlexProps } from '@chakra-ui/react';
import { SidebarConfig } from '@package/michael/routes/_types'

export interface INavItemProps extends SidebarConfig, FlexProps {
    icon?: IconType;
    title?: string;
    description?: string;
    isActive?: boolean;
    navSize?: 'none' | 'small' | 'large';
    disabledHover?: boolean;
    // children?: INavItemProps[];
}
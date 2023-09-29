import { IconType } from 'react-icons';
import type { FlexProps } from '@chakra-ui/react';

export interface INavItemProps extends FlexProps {
    icon?: IconType;
    title?: string;
    description?: string;
    isActive?: boolean;
    navSize?: 'none' | 'small' | 'large';
    disabledHover?: boolean;
    items?: INavItemProps[];
}
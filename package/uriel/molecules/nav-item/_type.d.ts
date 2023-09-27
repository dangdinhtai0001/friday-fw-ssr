import { IconType } from 'react-icons'

export interface INavItemProps {
    icon?: IconType ;
    title?: string;
    description?: string;
    isActive?: boolean;
    navSize?: 'none' | 'small' | 'large';
    disabledHover?: boolean;
    items?: INavItemProps[];
}
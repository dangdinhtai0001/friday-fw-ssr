export interface INavItemProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    isActive?: boolean;
    navSize?: 'none' | 'small' | 'large';

    items?: INavItemProps[];
}
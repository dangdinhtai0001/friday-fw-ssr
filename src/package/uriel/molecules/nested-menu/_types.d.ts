export interface INestedMenuProps {
};

export interface INestedMenuItemProps extends IItemDefinition{
};

export interface IItemContentProps {
    icon: IconType | null;
    label: string;
    expandIcon?: IconType;
    collapseIcon?: IconType;
    isOpen?: boolean; 
}

export interface IItemDefinition {
    disabled?: boolean;
    icon: IconType | null;
    key: string;
    label: string;
    title?: string;
    type?: 'group',
    items?: IItemDefinition[];
};
export interface INestedMenuProps {
    items: INestedMenuItemProps[];
};

export interface INestedMenuItemProps extends IItemDefinition{
};

export interface IItemContentProps {
    icon: React.ReactNode | null;
    label: string;
    expandIcon?: React.ReactNode;
    collapseIcon?: React.ReactNode;
    isOpen?: boolean; 
}

export interface IItemDefinition {
    disabled?: boolean;
    icon: React.ReactNode | null;
    key: string;
    label: string;
    title?: string;
    type?: 'group',
    items?: IItemDefinition[];
};
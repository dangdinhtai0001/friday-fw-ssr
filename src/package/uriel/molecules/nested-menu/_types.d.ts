import { IconType } from "react-icons";

export interface INestedMenuProps {
    itemDef: IItemDefinition
}

export interface INestedMenuItemProps {
}

export interface IItemDefinition {
    disabled?: boolean;
    icon: IconType | null;
    key: string;
    label: React.ReactNode;
    title?: string;
    type?: 'group',
    items?: IItemDefinition[];
};

export interface ICloseSubMenuOverlayProps {
    isActive: boolean;
    closeSubMenu: () => void;
};

export interface INestedMenuItemProps {
    children: React.ReactNode;
    closeSubMenu?: () => void;
};

export interface IINestedMenuItemContentProps {
    icon: IconType | null;
    label: React.ReactNode;
};

export interface IMenuItemSubMenuProps {
    children: React.ReactNode;
};

export interface IInnerMenuProps {
    title: string;
    childrenItems: Array<string | MenuItem>; 
};
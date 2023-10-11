export interface ICloseSubMenuOverlayProps {
    isActive: boolean;
    closeSubMenu: () => void;
};

export interface IStyledMenuItemProps {
    children: React.ReactNode;
    closeSubMenu?: () => void;
};

export interface IInnerMenuProps {
    title: string;
    childrenItems: Array<string | MenuItem>; 
};

export interface IMenuItemSubMenuProps {
    children: React.ReactNode;
};
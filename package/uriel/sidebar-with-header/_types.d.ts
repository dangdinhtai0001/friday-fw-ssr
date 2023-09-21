export interface ISidebarWithHeaderProps {
    children: React.ReactNode;
}

export interface ISidebarProps {
    onClose: () => void;
    isOpen: boolean
    variant: 'drawer' | 'sidebar'
}

export interface ISidebarContentProps {
}

export interface IHeaderProps {
    onShowSidebar: () => void;
    showSidebarButton?: boolean
}
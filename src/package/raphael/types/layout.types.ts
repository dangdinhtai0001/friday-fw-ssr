import { IconType } from "react-icons";

export interface ISidebarRouteItemDef {
    disabled?: boolean;
    icon: IconType | null;
    key: string;
    label: string;
    title?: string;
    type?: 'group',
    items?: ISidebarRouteItemDef[];
};
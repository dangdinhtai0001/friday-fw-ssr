import { IconType } from "react-icons";

export interface ICategoryDef {
    id?: string;
    disabled?: boolean;
    icon: IconType | null;
    key: string;
    label: string;
    title?: string;
    type?: 'group',
    items?: ICategoryDef[];
};
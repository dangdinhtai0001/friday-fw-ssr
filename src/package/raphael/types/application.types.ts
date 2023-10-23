export interface ICategoryDef {
    id?: string;
    disabled?: boolean;
    key?: string;
    label?: string;
    title?: string;
    type?: 'group',
    url?: string | null,
    items?: ICategoryDef[];
    icon?: any,
};
export interface ICategoryDef {
    id?: string;
    disabled?: boolean;
    icon: React.ReactNode | null;
    key: string;
    label: string;
    title?: string;
    type?: 'group',
    items?: ICategoryDef[];
};
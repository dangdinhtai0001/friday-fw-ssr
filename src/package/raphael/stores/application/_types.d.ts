import { ICategoryDef } from '@package/raphael/types/application.types';

export type State = {
    categories?: ICategoryDef[];
    savedCategories?: ICategoryDef[];
};
export type Action = {
    addSavedCategory?: (category: ICategoryDef) => void;
    removeSavedCategory?: (id: string) => void;
};
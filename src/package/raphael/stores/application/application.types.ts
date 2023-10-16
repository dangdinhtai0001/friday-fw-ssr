import { IconType } from "react-icons";
import { ISidebarRouteItemDef } from "@package/raphael/types/layout.types";

export type State = {
    favorites: ISidebarSavedItem[];
    recently: ISidebarSavedItem[];
    // --------------------------
    adminLayout: {
        sidebarRouteItems: ISidebarRouteItemDef[]
    }
};

export type Action = {
    addFavorite: (item: ISidebarSavedItem) => void;
    addRecently: (item: ISidebarSavedItem) => void;
    removeFavorite: (id: string) => void;
    removeRecently: (id: string) => void;
};

// =================================================================

export interface ISidebarSavedItem {
    id: string;
    displayName: string;
    url: string;
    icon?: IconType;
};

export interface ISidebarRouteItem extends ISidebarRouteItemDef{
};
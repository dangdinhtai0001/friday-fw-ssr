import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Snowflake } from "@theinternetfolks/snowflake";
import _ from 'lodash';

import { State, Action, ISidebarSavedItem, ISidebarRouteItem } from './application.types';

export const useApplicationStore = create<State & Action>()(
    persist((set) => ({
        favorites: [],
        recently: [],
        adminLayout: {
            sidebarRouteItems: sidebarRouteItems
        },
        // ==================================================================================================================================
        addFavorite: (item: ISidebarSavedItem) => {
            set((state) => ({ ...state, favorites: pushItem(item, state.favorites) }));
        },
        addRecently: (item: ISidebarSavedItem) => {
            set((state) => ({ ...state, recently: pushItem(item, state.recently) }));
        },
        removeFavorite: (id: string) => {
            set((state) => ({ ...state, recently: removeItem(id, state.favorites) }));
        },
        removeRecently: (id: string) => {
            set((state) => ({ ...state, recently: removeItem(id, state.recently) }));
        }
    }), {
        name: 'application-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })
);

// ==================================================================================================================================
// ==================================================================================================================================
// ==================================================================================================================================

const pushItem = (item: ISidebarSavedItem, list: ISidebarSavedItem[]) => {
    list.push({ ...item, id: Snowflake.generate() });

    return list;
};

const removeItem = (id: string, list: ISidebarSavedItem[]) => {
    return _.remove(list, (item: ISidebarSavedItem) => item.id === id);
};

const sidebarRouteItems: ISidebarRouteItem[] = [
    {
        label: 'Dashboard', key: Snowflake.generate(), icon: null, type: 'group', items: [
            { label: "eCommerce", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Projects", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Online Courses", key: Snowflake.generate(), icon: null, items: [] },
        ],
    }, {
        label: 'Pages', key: Snowflake.generate(), icon: null, type: 'group', items: [
            {
                label: "User Profile", key: Snowflake.generate(), icon: null, items: [
                    { label: "Overview", key: Snowflake.generate(), icon: null },
                    { label: "Projects", key: Snowflake.generate(), icon: null },
                    { label: "Campaigns", key: Snowflake.generate(), icon: null },
                    { label: "Documents", key: Snowflake.generate(), icon: null },
                    { label: "Flowers", key: Snowflake.generate(), icon: null },
                ]
            },
            { label: "Account", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Corporate", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Blog", key: Snowflake.generate(), icon: null, items: [] },
            { label: "Social", key: Snowflake.generate(), icon: null, items: [] },
        ]
    }
];
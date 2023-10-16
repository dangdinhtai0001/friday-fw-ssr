import { StateCreator } from 'zustand';
import { Snowflake } from "@theinternetfolks/snowflake";

import { State, Action } from './_types';
import { ICategoryDef } from '@package/raphael/types/application.types'

const categories: ICategoryDef[] = [
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

export const createStateSlice: StateCreator<State & Action> = () => ({
    categories: categories,
    savedCategories: [],
});
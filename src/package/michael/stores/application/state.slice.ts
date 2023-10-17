import { StateCreator } from 'zustand';
import { Snowflake } from "@theinternetfolks/snowflake";

import { State, Action } from './_types';
import { ICategoryDef } from '@package/raphael/types/application.types'

const categories: ICategoryDef[] = [
    {
        label: "Demo", key: Snowflake.generate(), icon: null, type: 'group', items: [
            { label: "Overview", key: Snowflake.generate(), icon: null },
            {
                label: "Example", key: Snowflake.generate(), icon: null, items: [
                    { label: "Profile", key: Snowflake.generate(), icon: null },
                    { label: "Login", key: Snowflake.generate(), icon: null },
                    { label: "Register", key: Snowflake.generate(), icon: null },
                    { label: "Timeline", key: Snowflake.generate(), icon: null },
                ]
            },
            {
                label: "Components", key: Snowflake.generate(), icon: null, items: [
                    { label: "Base component", key: Snowflake.generate(), icon: null },
                    { label: "Common component", key: Snowflake.generate(), icon: null },
                ]
            },
            {
                label: "Forms", key: Snowflake.generate(), icon: null, items: [
                    { label: "Element", key: Snowflake.generate(), icon: null },
                    { label: "Components", key: Snowflake.generate(), icon: null },
                    { label: "Validation", key: Snowflake.generate(), icon: null },
                ]
            },
            {
                label: "Tables", key: Snowflake.generate(), icon: null, items: [
                    { label: "Table", key: Snowflake.generate(), icon: null },
                ]
            },
            { label: "Widget", key: Snowflake.generate(), icon: null },
            { label: "Charts", key: Snowflake.generate(), icon: null },
            { label: "Calendar", key: Snowflake.generate(), icon: null },
        ]
    },
    {
        label: "Documents", key: Snowflake.generate(), icon: null, type: 'group', items: [
            {
                label: "Design system", key: Snowflake.generate(), icon: null, items: [
                    { label: "Measurement", key: Snowflake.generate(), icon: null },
                    { label: "Color", key: Snowflake.generate(), icon: null },
                    { label: "Text Styles", key: Snowflake.generate(), icon: null },
                    { label: "Effect Styles", key: Snowflake.generate(), icon: null },
                ]
            },
        ]
    },
];

export const createStateSlice: StateCreator<State & Action> = () => ({
    categories: categories,
    savedCategories: [],
});
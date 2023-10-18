import { StateCreator } from 'zustand';
import { Snowflake } from "@theinternetfolks/snowflake";

import { State, Action } from './_types';
import { ICategoryDef } from '@package/raphael/types/application.types'

const categories: ICategoryDef[] = [
    {
        label: "Demo", key: Snowflake.generate(), url: null, type: 'group', items: [
            { label: "Overview", key: Snowflake.generate(), url: null },
            {
                label: "Example", key: Snowflake.generate(), url: null, items: [
                    { label: "Profile", key: Snowflake.generate(), url: null },
                    { label: "Login", key: Snowflake.generate(), url: null },
                    { label: "Register", key: Snowflake.generate(), url: null },
                    { label: "Timeline", key: Snowflake.generate(), url: null },
                ]
            },
            {
                label: "Components", key: Snowflake.generate(), url: null, items: [
                    { label: "Base component", key: Snowflake.generate(), url: null },
                    { label: "Common component", key: Snowflake.generate(), url: null },
                ]
            },
            {
                label: "Forms", key: Snowflake.generate(), url: null, items: [
                    { label: "Element", key: Snowflake.generate(), url: null },
                    { label: "Components", key: Snowflake.generate(), url: null },
                    { label: "Validation", key: Snowflake.generate(), url: null },
                ]
            },
            {
                label: "Tables", key: Snowflake.generate(), url: null, items: [
                    { label: "Table", key: Snowflake.generate(), url: null },
                ]
            },
            { label: "Widget", key: Snowflake.generate(), url: null },
            { label: "Charts", key: Snowflake.generate(), url: null },
            { label: "Calendar", key: Snowflake.generate(), url: null },
        ]
    },
    {
        label: "Documents", key: Snowflake.generate(), url: null, type: 'group', items: [
            {
                label: "Design system", key: Snowflake.generate(), url: "design-system", items: [
                    { label: "Measurement", key: Snowflake.generate(), url: "design-system/measurement" },
                    { label: "Color", key: Snowflake.generate(), url: "design-system/color" },
                    { label: "Text Styles", key: Snowflake.generate(), url: "design-system/text-styles" },
                    { label: "Effect Styles", key: Snowflake.generate(), url: null },
                ]
            },
        ]
    },
];

export const createStateSlice: StateCreator<State & Action> = () => ({
    categories: categories,
    savedCategories: [],
});
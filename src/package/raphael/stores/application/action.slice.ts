import { StateCreator } from 'zustand';
import { Snowflake } from "@theinternetfolks/snowflake";
import _ from 'lodash';

import { State, Action } from './_types';
import { ICategoryDef } from '@package/raphael/types/application.types'

export const createActionSlice: StateCreator<State & Action, [], [], Action> = (set) => ({
    addSavedCategory: (category: ICategoryDef) => {
        set((state) => {
            let _savedCategories = state.savedCategories || [];
            _savedCategories?.push({ ...category, id: category.id ? category.id : Snowflake.generate() });

            return { ...state, savedCategories: _savedCategories };
        })
    },
    removeSavedCategory: (id) => {
        set((state) => {
            let _savedCategories = state.savedCategories || [];
            _.remove(_savedCategories, (category: ICategoryDef) => category.id === id);

            return { ...state, savedCategories: _savedCategories };
        })
    },
});
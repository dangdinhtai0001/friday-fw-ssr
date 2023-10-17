import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { createActionSlice } from './action.slice';
import { createStateSlice } from './state.slice';
import { State, Action } from './_types';

export const useApplicationStore = create<State & Action>()(
    persist((...args) => ({
        ...createActionSlice(...args),
        ...createStateSlice(...args),
    }),{
        name: 'application-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    } )
);
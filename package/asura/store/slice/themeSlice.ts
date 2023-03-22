import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ThemePalette = {
  mode: string;
};

export interface ThemeState {
  palette: ThemePalette;
}

const initialState: ThemeState = {
  palette: {
    mode: 'light',
  },
};

export const themeSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    changePaletteMode: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.palette.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePaletteMode } = themeSlice.actions;

export default themeSlice.reducer;

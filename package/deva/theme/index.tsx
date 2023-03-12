/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/package/asura/store/configureStore';
import { changePaletteMode } from '@/package/asura/store/slice/themeSlice';
import useTrans from '@/package/asura/i18/useTrans';

const Item = styled('div')(({ theme }) => ({
  border: '1px solid',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  textColor: theme.palette.text,
  height: '5rem',
}));

const _theme = {
  palette: [
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
    'text',
    'background',
  ],
};

type Theme = 'light' | 'dark';

const ThemePage = () => {
  const palette = useSelector(
    (state: RootState) => state.theme.palette
  );
  const dispatch = useDispatch();

  const trans = useTrans();

  const handleThemeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(changePaletteMode(event.target.value as Theme));
  };

  return (
    <>
      <h2>{trans.common.welcome}</h2>
      <h2>{`palette (mode='${palette.mode}')`}</h2>
      <div>
        <label htmlFor="theme-selector">Select Palette mode:</label>
        <select
          id="theme-selector"
          value={palette.mode}
          onChange={handleThemeChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <Box sx={{ flexGrow: 1, marginTop: '1rem' }}>
        <Grid container spacing={2}>
          {_theme.palette.map((color: string) => {
            return (
              <Grid xs={1} key={color}>
                <Item sx={{ backgroundColor: color }}>
                  <div>{color}</div>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ThemePage;

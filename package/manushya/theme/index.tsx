/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/package/asura/store/configureStore';
import { changePaletteMode } from '@/package/asura/store/slice/themeSlice';
import useTrans from '@/package/asura/i18/useTrans';
import DevaDivider from '@/package/deva/divider/Divider';

const Item = styled('div')(({ theme }) => ({
  border: '1px solid',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  textColor: theme.palette.text,
  height: '5rem',
}));

const _theme = [
  {
    type: 'primary',
    props: ['main', 'light', 'dark', 'contrastText'],
  },
  {
    type: 'secondary',
    props: ['main', 'light', 'dark', 'contrastText'],
  },
  {
    type: 'error',
    props: ['main', 'light', 'dark', 'contrastText'],
  },
  {
    type: 'warning',
    props: ['main', 'light', 'dark', 'contrastText'],
  },
  { type: 'info', props: ['main', 'light', 'dark', 'contrastText'] },
  {
    type: 'success',
    props: ['main', 'light', 'dark', 'contrastText'],
  },
  { type: 'background', props: ['default', 'paper'] },
  {
    type: 'text',
    props: ['primary', 'secondary', 'disabled', 'hint'],
  },
];

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
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <h2>{trans.common.language_name}</h2>
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
        {_theme.map(item => {
          return (
            <Box
              key={item.type}
              sx={{ justifyContent: 'space-between' }}
            >
              <DevaDivider text={item.type}></DevaDivider>
              <Grid container spacing={2} gap={2}>
                {item.props.map(color => {
                  return (
                    <Grid xs={1} key={color}>
                      <Item
                        sx={{
                          backgroundColor: `${item.type}.${color}`,
                        }}
                      ></Item>
                      <div>{`${item.type}.${color}`}</div>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ThemePage;

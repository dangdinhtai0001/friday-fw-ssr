/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import useTheme from '@mui/system/useTheme';

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
  const theme = useTheme();
  const [selectedTheme, setSelectedTheme] =
    React.useState<Theme>('light');

  const handleThemeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTheme(event.target.value as Theme);
  };

  return (
    <>
      <div>
        <label htmlFor="theme-selector">Select Theme:</label>
        <select
          id="theme-selector"
          value={selectedTheme}
          onChange={handleThemeChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <h2>{`palette (mode='${theme.palette.mode}')`}</h2>
      <Box sx={{ flexGrow: 1 }}>
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

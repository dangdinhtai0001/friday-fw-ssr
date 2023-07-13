import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption1 } from '@/package/preta/styled-shared';
import { margin } from '@mui/system';



export const StyledAdornmentArrow = styled('button')(({ theme }: { theme?: IDefaultTheme }) => ({
  // border: '1px solid red',

  border: 'none',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  background: 'inherit',
  cursor: 'pointer',
  height: '100%',
}));


export const StyledAdornmentContainer = styled('div')(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  // border: '1px solid red',

  ':hover': {
    // boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.2)',
    // borderLeft: '1px solid #ccc',
  },
}));

// --------------------------------

export const StyledNumberControlContainer = styled('div')(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledNumberControlItem = styled('div')(({ theme }: { theme?: IDefaultTheme }) => ({
  cursor: 'pointer',
  margin: '0',
  border: '1px solid red',

}));
import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, typographyCaption1Strong, typographyCaption2 } from '@/package/preta/styled-shared';

export const StyledRadioGroupOption = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme: theme, noneBorder: true }),

  display: 'flex',
  alignItems: 'center',
}));


export const StyledRadioGroupOptionLabel = styled('label', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption2({ theme }),

  cursor: 'pointer',
  marginTop: '2px'
}));

export const StyledRadioGroupOptionCheckbox = styled('input', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme: theme, noneBorder: true }),
  width: 'fit-content',
}));
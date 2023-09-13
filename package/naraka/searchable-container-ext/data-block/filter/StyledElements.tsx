import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer } from '@/package/preta/styled-shared';
import {} from './types.d';

export const StyledFilterContainer = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  padding: `${theme?.components.spacing.s}`,
  marginTop: `${theme?.components.spacing.s}`,
}));

export const StyledFilterActionContainer = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  padding: `${theme?.components.spacing.sx} ${theme?.components.spacing.none} ${theme?.components.spacing.none} ${theme?.components.spacing.none} `,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: `${theme?.components.spacing.s}`,
}));

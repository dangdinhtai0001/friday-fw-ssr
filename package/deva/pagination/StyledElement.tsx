import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { typographyCaption1 } from '../shared';
import { IStyledPageNumber } from './type.d';

export const StyledPaginationRoot = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0.3rem'
}));

// ====================================================
export const StyledPageNavigationContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.2rem',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledPageNumber = styled('div', {})<IStyledPageNumber>(({ theme, isCurrentPage }: IStyledPageNumber) => ({
  ...typographyCaption1({ theme }),

  display: 'inline-block',
  padding: '0.2rem 0.5rem 0.2rem 0.5rem',

  borderRadius: theme?.components.cornerRadius.medium,
  border: `${theme?.components.strokeWidth.thin} solid ${theme?.palette.secondary.main}`,

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: isCurrentPage ? theme?.palette.primary.main : theme?.palette.secondary.main,
  },

  backgroundColor: isCurrentPage ? theme?.palette.primary.main : 'transparent',
  color: isCurrentPage ? theme?.palette.primary.contrastText : theme?.palette.text.primary,
}));

// ====================================================
export const StyledTotalItemCountContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),
}));

// ====================================================
export const StyledPageControlContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.3rem',
  alignItems: 'center',
  justifyContent: 'space-between',

}));

export const StyledPaginationText = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),
}));
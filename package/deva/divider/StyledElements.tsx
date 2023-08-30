import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { DividerType } from './types'
import { defaultControllerContainer, typographyCaption2 } from '@/package/preta/styled-shared';

export const StyledDividerContainer = styled('div', {})(({ theme, height }: { theme?: IDefaultTheme, height: number | string }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: height,
  margin: `${theme?.components.spacing.xxs} 0`,
}));

export const StyledDividerLine = styled('div', {})(({ theme, type }: { theme?: IDefaultTheme, type: DividerType }) => ({
  width: '100%',
  borderBottom: `${type} ${theme?.palette.divider} 1px`,
}));

export const StyledDividerText = styled('div', {})(({ theme, color }: { theme?: IDefaultTheme, color?: string }) => ({
  ...typographyCaption2({ theme }),

  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  color: color || theme?.palette.text.primary,
  
  padding: `0 ${theme?.components.spacing.xxs}`,
}));
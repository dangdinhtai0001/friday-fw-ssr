import { IDataFieldLabelProps, IDataFieldMessageProps } from '@/package/naraka/manipulation-container/types';
import { styled } from '@mui/system';
import { IDefaultTheme } from '@/package/preta/types';

export const DataFieldLabel = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'status' && prop !== 'textAlign'
})<IDataFieldLabelProps & { theme?: IDefaultTheme }>(({ theme, status, textAlign }) => ({
  color: status === 'error' ? theme.palette.error.main :
    status === 'warning' ? theme.palette.warning.main : 'inherit',
  textAlign: textAlign,

  fontSize: theme.typography.body1Strong.fontSize,
  fontWeight: theme.typography.body1Strong.fontWeight,
  lineHeight: theme.typography.body1Strong.lineHeight,
  letterSpacing: theme.typography.body1Strong.letterSpacing,
}));

export const DataFieldMessage = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'status'
})<IDataFieldMessageProps>(({ theme, status }) => ({
  color: status === 'error' ? theme.palette.error.main :
    status === 'warning' ? theme.palette.warning.main : 'inherit',
}));

export const RequiredIcon = styled('span', {
})<{ theme?: IDefaultTheme }>(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1rem',
  marginLeft: '0.1rem',
}));
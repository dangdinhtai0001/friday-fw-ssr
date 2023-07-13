import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption1Strong } from '@/package/preta/styled-shared';
import { IStyledButtonProps } from './types.d'



// export const StyledButtonContainer = styled('button')<IStyledButtonProps>(({ theme, width, colorType }: IStyledButtonProps) => ({
//   ...defaultControllerContainer({ theme, width, }),
//   ...typographyCaption1Strong({ theme }),
//   color: theme?.palette.primary.contrastText,

//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: '0.5rem',

//   cursor: 'pointer',
//   backgroundColor: colorType ? theme?.palette[colorType].main : 'transparent',

//   // border: `${theme?.components.strokeWidth.thin} solid ${theme?.palette.secondary.main}`,
//   border: `3px solid ${theme?.palette.secondary.main}`,
// }));


export const StyledButtonContainer = styled('button')<IStyledButtonProps>(({ theme, width, colorType, disabled }: IStyledButtonProps) => ({
  ...defaultControllerContainer({ theme, width, noneBorder: true }),
  ...typographyCaption1Strong({ theme }),
  color: disabled ? theme?.palette.text.disabled : theme?.palette.primary.contrastText,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  cursor: disabled ? 'not-allowed' : 'pointer',
  // backgroundColor: colorType ? theme?.palette[colorType].main : 'transparent',
  backgroundColor: colorType ? (disabled ? theme?.palette.background.default : theme?.palette[colorType].main) : 'transparent',


}));


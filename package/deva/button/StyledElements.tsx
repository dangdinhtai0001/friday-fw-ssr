import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption1Strong } from '@/package/preta/styled-shared';
import { IStyledButtonProps } from './types.d'



export const StyledButtonContainer = styled('button')<IStyledButtonProps>(({ theme, width }: IStyledButtonProps) => ({
  ...defaultControllerContainer({ theme }),
  ...typographyCaption1Strong({ theme }),
}));
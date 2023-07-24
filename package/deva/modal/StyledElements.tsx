import styled from '@mui/system/styled';
import Modal from '@mui/base/Modal';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyBody1Strong, defaultComponentContainer } from '@/package/preta/styled-shared';
import { IStyledModalContainerProps } from './types.d'

export const StyledBackdrop = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  zIndex: -1,
  position: "fixed",
  inset: 0,
  backgroundColor: "rgb(0, 0, 0, 0.5)",
  "-webkit-tap-highlight-color": "transparent",
}));

export const StyledModal = styled(Modal, {})(({ theme }: { theme?: IDefaultTheme }) => ({
  position: "fixed",
  zIndex: 1300,
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

// --------------------------------------------------------------------------

export const StyledModalContainer = styled('div', {})<IStyledModalContainerProps>(({ theme, width, height }: IStyledModalContainerProps) => ({
  ...defaultComponentContainer({ theme, width }),
  height: height,

  backgroundColor: theme?.palette?.background?.paper,
}));

export const StyledModalHeader = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme }),
  width: '',

  ...typographyBody1Strong({ theme }),
  color: theme?.palette?.text?.secondary,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: theme?.components?.spacing.sx,

  backgroundColor: theme?.palette?.primary.main,
}));
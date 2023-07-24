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

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // alignItems: "center",

  backgroundColor: theme?.palette?.background?.paper,
}));

export const StyledModalHeader = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),
  width: '',
  borderRadius: `${theme?.components.cornerRadius.medium} ${theme?.components.cornerRadius.medium} 0px 0px`,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ...typographyBody1Strong({ theme }),
  color: theme?.palette?.text?.secondary,

  padding: theme?.components?.spacing.sx,

  backgroundColor: theme?.palette?.primary.main,
}));

export const StyledModalContent = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),
  width: '',
  borderRadius: `0px 0px 0px 0px`,
  height: '100%',

  padding: theme?.components?.spacing.sx,
}));

export const StyledModalFooter = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),
  width: '',
  borderRadius: `0px 0px ${theme?.components.cornerRadius.medium} ${theme?.components.cornerRadius.medium}`,
  borderTop: `${theme?.components.strokeWidth.thin} solid ${theme?.palette.secondary.main}`,

  display: "flex",
  justifyContent: "end",
  alignItems: "center",

  padding: theme?.components?.spacing.sx,
}));
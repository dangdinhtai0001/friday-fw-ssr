import styled from '@mui/system/styled';
import Modal from '@mui/base/Modal';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption2 } from '@/package/preta/styled-shared';
import { } from './types.d'

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
import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, } from '@/package/preta/styled-shared';
import { IStyledGridContainerProps } from './types.d';


export const StyledGridContainer = styled('div', {})((props: IStyledGridContainerProps) => {
  const { height, width, theme } = props;
  return {
    height: height,
    width: width,

    // Customising Colours & Fonts
    '--ag-alpine-active-color': theme?.palette.primary.main,
    '--ag-foreground-color': theme?.palette.text.primary,
    '--ag-background-color': theme?.palette.background.default,
    '--ag-secondary-foreground-color': theme?.palette.text.primary,
    '--ag-data-color': theme?.palette.text.primary,
    '--ag-header-foreground-color': theme?.palette.text.secondary,
    '--ag-header-background-color': theme?.palette.primary.main,
    '--ag-row-hover-color': theme?.palette.primary.light,
    '--ag-odd-row-background-color': theme?.palette.background.paper,
    '--ag-font-family': theme?.typography.root.fontFamily,
    '--ag-font-size': theme?.typography.root.fontSize,
    '--ag-header-column-resize-handle-color': theme?.palette.text.secondary,
    // Customising Compactness & Row Height
    '--ag-row-height': theme?.typography.body2.lineHeight,
    '--ag-header-height': theme?.typography.body2.lineHeight,
    '--ag-header-column-resize-handle-height': '100%',
    // Customising Selections
    
  };
});

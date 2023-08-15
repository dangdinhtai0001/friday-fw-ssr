import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, } from '@/package/preta/styled-shared';
import { IStyledGridContainerProps } from './types.d';


export const StyledGridContainer = styled('div', {})((props: IStyledGridContainerProps) => {
  const { height, width, theme } = props;
  return {
    height: height,
    width: width,

    // ------------------------------------------------------------------------------------------------------------------------
    // Customising Colours & Fonts (https://www.ag-grid.com/react-data-grid/global-style-customisation-colours/)
    // ------------------------------------------------------------------------------------------------------------------------

    // (Alpine theme only) accent colour used for checked checkboxes, range selections, row hover, row selections, selected tab underlines, and input focus outlines in the Alpine theme
    '--ag-alpine-active-color': theme?.palette.primary.main,
    // Colour of text and icons in primary UI elements like menus
    '--ag-foreground-color': theme?.palette.text.primary,
    // Background colour of the grid
    '--ag-background-color': theme?.palette.background.default,
    // Colour of text and icons in UI elements that need to be slightly less emphasised to avoid distracting attention from data
    '--ag-secondary-foreground-color': theme?.palette.text.primary,
    // Colour of text in grid cells
    '--ag-data-color': theme?.palette.text.primary,
    // Colour of text and icons in the header
    '--ag-header-foreground-color': theme?.palette.text.secondary,
    // Background colour for all headers, including the grid header, panels etc
    '--ag-header-background-color': theme?.palette.primary.main,
    // Color of elements that can't be interacted with because they are in a disabled state
    // --ag-disabled-foreground-color
    // Background colour applied to every other row
    '--ag-odd-row-background-color': theme?.palette.background.paper,
    // Background color when hovering over rows in the grid and in dropdown menus. Set to transparent to disable the hover effect. Note: if you want a rollover on one but not the other, use CSS selectors instead of this property
    '--ag-row-hover-color': theme?.palette.primary.light,
    // Colour for border around major UI components like the grid itself, headers; footers and tool panels.
    '--ag-border-color': theme?.palette.secondary.main,
    // Colour of the border between grid rows, or transparent to display no border
    '--ag-row-border-color': theme?.palette.secondary.main,

    // ------------------------------------------------------------------------------------------------------------------------
    // Customising Compactness & Row Height (https://www.ag-grid.com/react-data-grid/global-style-customisation-compactness/)
    // ------------------------------------------------------------------------------------------------------------------------

    // Height of grid rows
    '--ag-row-height': theme?.typography.body2.lineHeight,

    // ------------------------------------------------------------------------------------------------------------------------
    // Customising Selections (https://www.ag-grid.com/react-data-grid/global-style-customisation-selections/)
    // ------------------------------------------------------------------------------------------------------------------------

    // Background color of selected rows in the grid and in dropdown menus
    '--ag-selected-row-background-color': theme?.palette.primary.dark,

    // ------------------------------------------------------------------------------------------------------------------------
    // Customising the Header (https://www.ag-grid.com/react-data-grid/global-style-customisation-header/)
    // ------------------------------------------------------------------------------------------------------------------------

    // Colour applied to header cells when the column is being dragged to a new position
    '--ag-header-cell-moving-background-color': theme?.palette.secondary.main,

    // Height of header rows
    '--ag-header-height': '1.5rem',

    // Whether to display the header column separator - a vertical line that displays between every header cell
    '--ag-header-column-separator-display': 'block',

    // Height of the header column separator. Percentage values are relative to the header height.
    '--ag-header-column-separator-height': '100%',

    // Width of the header column separator
    '--ag-header-column-separator-width': '1px',

    // Colour of the header column separator (Nhớ để cùng màu với border)
    '--ag-header-column-separator-color': theme?.palette.secondary.main,

    // Whether to show the header column resize handle - a vertical line that displays only between resizeable header columns, indicating where to drag in order to resize the column.
    '--ag-header-column-resize-handle-display': 'none',

    // ------------------------------------------------------------------------------------------------------------------------
    // CSS Variable Reference (https://www.ag-grid.com/react-data-grid/global-style-customisation-variables/)
    // ------------------------------------------------------------------------------------------------------------------------

    // Enable or disable borders around most UI elements in the grid. Set this to a border style and thickness, e.g. solid 1px to enable borders, or none to disable borders. 
    // Use the other --ag-borders-* variables for more fine grained control over which UI elements get borders.
    '--ag-borders': 'solid 1px',

    // Font family used for all text
    '--ag-font-family': theme?.typography.root.fontFamily,

    // Default font size for text in the grid
    '--ag-font-size': theme?.typography.root.fontSize,

    // Horizontal padding for grid and header cells (vertical padding is not set explicitly, but inferred from row-height / header-height
    '--ag-cell-horizontal-padding': theme?.components.spacing.s,

    // Default border for cells. This can be used to specify the border-style and border-color properties e.g. dashed red but the border-width is fixed at 1px. Set to solid transparent to show no border.
    '--ag-cell-horizontal-border': 'solid ' + theme?.palette.secondary.main,

    // ------------------------------------------------------------------------------------------------------------------------
    // Override css 
    // ------------------------------------------------------------------------------------------------------------------------
    '.ag-header-group-cell:after': {
      height: '100px'
    }
  };
});

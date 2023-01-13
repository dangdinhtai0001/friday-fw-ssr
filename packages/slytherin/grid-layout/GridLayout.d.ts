export interface GridLayoutProps {
  /**
   * Vertical column alignment
   */
  align?: "normal" |  "start"| "center"| "end"| "stretch"
  /**
   * 	flex-direction style attribute
   */
  direction?: "column"| "row"| "column-reverse"| "row-reverse"
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid?: boolean;
  /**
   * 	Custom gutter width for this row
   */
  gutterWidth?: number;
  /**
   * 	Horizontal column alignment
   */
  justify?:"start"| "center"| "end"| "between"| "around"| "initial"| "inherit";
  /**
   * Optional styling
   */
  style?: Object;
  /**
   * 	flex-wrap style attribute
   */
  wrap?: "nowrap"| "wrap"| "reverse"
  /**
   * Số lượng column
   */
  columnCount?: number;
  children?: JSX.Element | JSX.Element[];
}
export interface GridItemProps {
  // 	Content of the column
  children?: JSX.Element | JSX.Element[];
  // The offset of this column for all screenclasses
  offset?: { xs?: number, sm?: number, md?: number, lg?: number, xl?: number, xxl?: number, xxxl?: number };
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  xxxl?: number;
}

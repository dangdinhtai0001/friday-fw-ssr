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
   * Số lượng column
   */
  columnCount?: number;
  children?: JSX.Element | JSX.Element[];
}
export interface GridItemProps {
  children?: JSX.Element | JSX.Element[];
}

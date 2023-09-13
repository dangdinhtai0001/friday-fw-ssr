import { Theme } from '@mui/system/createTheme';

export interface IFontWeight {
  regular: number | string;
  semibold: number | string;
  bold: number | string;
}

export interface ISpacing {
  none: number | string;
  xxs: number | string;
  sx: number | string;
  sNudge: number | string;
  s: number | string;
  mNudge: number | string;
  m: number | string;
  l: number | string;
  xxl: number | string;
  xxxl: number | string;
}

export interface IStrokeWidth {
  none: number | string;
  thin: number | string;
  thick: number | string;
  thicker: number | string;
  thickest: number | string;
}

export interface ICornerRadius {
  none: number | string;
  small: number | string;
  medium: number | string;
  large: number | string;
  xLarge: number | string;
  circle: number | string;
}

export interface IThemeComponents {
  fontWeight: IFontWeight;
  spacing: ISpacing;
  strokeWidth: IStrokeWidth;
  cornerRadius: ICornerRadius;
}

export interface IThemeTypographyOption {
  fontSize: string;
  lineHeight: string | number;
  letterSpacing: string | number;
  fontWeight: string | number;

  fontFamily?: string;
}

export type IThemeTypographyKey =
  | 'root'
  | 'caption2'
  | 'caption2Strong'
  | 'caption1'
  | 'caption1Strong'
  | 'caption1Stronger'
  | 'body1'
  | 'body1Strong'
  | 'body1Stronger'
  | 'body2'
  | 'subtitle2'
  | 'subtitle2Stronger'
  | 'subtitle1'
  | 'title3'
  | 'title2'
  | 'title1'
  | 'largeTitle'
  | 'display';

export interface IThemeTypography
  extends Record<IThemeTypographyKey, IThemeTypographyOption> {}

export interface IDefaultTheme extends Theme {
  components: IThemeComponents;
  typography: IThemeTypography;
}

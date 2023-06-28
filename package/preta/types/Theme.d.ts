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
  spacing: ISpacing,
  strokeWidth: IStrokeWidth,
  cornerRadius: ICornerRadius
};

export interface IThemeTypographyOption {
  fontSize: any;
  lineHeight: any;
  letterSpacing: any;
  fontWeight: any;
}

export interface IDefaultTheme extends Theme {
  components: IThemeComponents,
  typography: Record<any, IThemeTypographyOption>
}
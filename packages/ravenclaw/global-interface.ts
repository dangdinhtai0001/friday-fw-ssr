import { tuple } from './type';

const _BackgroundThemes = tuple(
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info'
);

export type BackgroundThemes = (typeof _BackgroundThemes)[number];

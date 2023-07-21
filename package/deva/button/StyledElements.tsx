import styled from '@mui/system/styled';
import { defaultControllerContainer, typographyCaption1 } from '@/package/preta/styled-shared';
import { IStyledButtonProps } from './types.d'


export const StyledButtonContainer = styled('button')<IStyledButtonProps>(({
  theme, width, colorType, disabled, color, border, textColor
}: IStyledButtonProps) => {
  let _backgroundColor = 'transparent';
  let _color = theme?.palette.text.secondary;


  // logic tìm màu cho background và màu cho text
  if (textColor) {
    _color = theme?.palette.text[textColor];
  };

  if (colorType) {
    _backgroundColor = theme?.palette[colorType].main;
  }
  if (color) {
    _backgroundColor = color;
  }
  if (disabled) {
    _backgroundColor = theme?.palette.background.default;
    _color = theme?.palette.text.disabled;
  };

  return {
    ...defaultControllerContainer({ theme, width, noneBorder: !border }),
    // ...typographyCaption2Strong({ theme }),
    ...typographyCaption1({ theme }),
    color: _color,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.2rem 0.4rem',

    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: _backgroundColor,
  }
});


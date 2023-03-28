import * as React from 'react';
import { styled } from '@mui/system';

export interface IDividerProps {
  color?: string;
  height?: number;
  type?: 'solid' | 'dashed' | 'dotted';
  text?: string;
}

export interface IDividerContainerProps {
  height: number;
}

export interface IDividerLineProps {
  color: string;
  type: string;
}

export interface IDividerTextProps {
  color?: string;
}

const DividerContainer = styled(
  'div',
  {}
)<IDividerContainerProps>(({ height }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `${height}px`,
  margin: '16px 0',
}));

const DividerLine = styled(
  'div',
  {}
)<IDividerLineProps>(props => ({
  width: '100%',
  borderBottom: `${props.type} ${props.color} 1px`,
}));

const DividerText = styled(
  'div',
  {}
)<IDividerTextProps>(props => ({
  fontSize: '14px',
  fontWeight: 500,
  backgroundColor: props.theme.palette.background.default || '#fff',
  padding: '0 12px',
  color: props.color || props.theme.palette.text.primary,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}));

export default function Divider(props: IDividerProps) {
  const { color = '#000', height = 1, type = 'solid', text } = props;

  return (
    <DividerContainer height={height}>
      <DividerLine color={color} type={type} />
      {text && <DividerText>{text}</DividerText>}
    </DividerContainer>
  );
}

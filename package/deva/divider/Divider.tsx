import { IDividerProps } from './types';
import { StyledDividerContainer, StyledDividerLine, StyledDividerText } from './StyledElements';

export default function Divider(props: IDividerProps) {
  const { height = 1, type = 'solid', text, color } = props;
  return (
    <StyledDividerContainer height={height}>
      <StyledDividerLine type={type} />
      {text && <StyledDividerText>{text}</StyledDividerText>}
    </StyledDividerContainer>
  );
}

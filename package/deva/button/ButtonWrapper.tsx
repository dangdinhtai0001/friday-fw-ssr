import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import useButton from '@mui/base/useButton';
import { IButtonWrapperProps } from './types.d';
import { StyledButtonContainer } from './StyledElements';

function ButtonWrapper(props: IButtonWrapperProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    disabled,
    children,
    icon,
    colorType = 'primary',
    width = '',
    color,
    border,
    textColor
  } = props;

  const { active, focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  const renderChildContainer = () => {
    if (icon) {
      return (
        <>{children}{icon}</>
      );
    }

    return children;
  }

  return (
    <motion.div whileTap={{ scale: disabled ? 1 : hoverScale }} style={{width: 'fit-content'}}>
      <StyledButtonContainer
        {...getRootProps()}
        colorType={colorType}
        width={width}
        color={color}
        border={border}
        textColor={textColor}
      >
        {renderChildContainer()}
      </StyledButtonContainer>
    </motion.div>
  );
};

const hoverScale = 0.9;

export default forwardRef(ButtonWrapper);

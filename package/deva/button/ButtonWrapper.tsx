import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import useButton from '@mui/base/useButton';
import { IButtonWrapperProps } from './types.d';
import { StyledButtonContainer } from './StyledElements';

function ButtonWrapper(props: IButtonWrapperProps, ref: React.ForwardedRef<any>) {
  const { disabled, children, icon, colorType = 'primary', width = '' } = props;

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
    <motion.div whileTap={{ scale: disabled ? 1 : hoverScale }}>
      <StyledButtonContainer {...getRootProps()} colorType={colorType} width={width}>
        {renderChildContainer()}
      </StyledButtonContainer>
    </motion.div>
  );
};

const hoverScale = 0.9;

export default forwardRef(ButtonWrapper);

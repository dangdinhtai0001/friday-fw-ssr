import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import useButton from '@mui/base/useButton';
import { useTheme } from '@mui/system';
import { IButtonWrapperProps } from './types.d';
import { StyledButtonContainer } from './StyledElements';
import { IDefaultTheme } from '@/package/preta/types';

function ButtonWrapper(props: IButtonWrapperProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    disabled,
    children,
    icon,
    colorType = 'primary',
    width = '',
    color,
    border,
    textColor,
    animationDisabled,
    iconPosition = 'left'
  } = props;

  const { active, focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  const theme = useTheme<IDefaultTheme>();

  const renderChildContainer = () => {
    if (icon) {
      if (iconPosition === 'right') {
        return <>{children}{icon}</>
      }
      if (iconPosition === 'left') {
        return <>{icon}{children}</>
      }
      return null;
    }

    return children;
  }

  const renderButton = () => {
    return (
      <StyledButtonContainer
        {...getRootProps()}
        colorType={colorType}
        width={width}
        color={color}
        border={border}
        textColor={textColor}
        hasIcon={!!icon}
      >
        {renderChildContainer()}
      </StyledButtonContainer>
    );
  }

  return animationDisabled ?
    renderButton() :
    (
      <motion.div
        whileTap={{ scale: disabled ? 1 : hoverScale, y: 0 }}
        whileHover={{
          y: disabled ? 0 : `-${theme.components.spacing.xxs}`,
          boxShadow: disabled ? '' : `${theme.components.spacing.xxs} ${theme.components.spacing.xxs} ${theme.components.spacing.sNudge} rgba(0,0,0,0.51)`
        }}
        style={{
          width: width,
          borderRadius: theme?.components.cornerRadius.medium,
        }}
      >
        {renderButton()}
      </motion.div>
    );
};

const hoverScale = 0.9;

export default forwardRef(ButtonWrapper);

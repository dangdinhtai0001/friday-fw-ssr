import { IOptionWrapperProps, } from './types.d';
import useOption from '@mui/base/useOption';
import { StyledOption } from './StyledElement';
import { motion } from 'framer-motion';

export default function OptionWrapper(props: IOptionWrapperProps) {
  const { children, value, className, disabled = false } = props;
  const { getRootProps, highlighted } = useOption({
    value,
    disabled,
    label: children,
  });

  if (disabled) {
    return (
      <StyledOption
        {...getRootProps()}
        disabled={disabled}
        onClick={() => { }} // thêm hàm trắng như này là để khi click vào option bị disable nó sẽ không đóng list 
      >
        {children}
      </StyledOption>
    )

  }

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
    >
      <StyledOption
        {...getRootProps()}
        disabled={disabled}
      >
        {children}
      </StyledOption>
    </motion.div>
  );
};

import { IOptionWrapperProps, } from './types.d';
import useOption from '@mui/base/useOption';
import { StyledOption } from './StyledElement';
import { motion } from 'framer-motion';

export default function OptionWrapper<TValue>(props: IOptionWrapperProps) {
  const { children, value, disabled = false } = props;

  const { getRootProps, selected }  = useOption({
    value,
    disabled,
    label: children,
  });

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
    >
      {disabled ? (
        <StyledOption
          {...getRootProps()}
          disabled={disabled}
          onClick={() => { }} // thêm hàm trắng như này là để khi click vào option bị disable nó sẽ không đóng list 
        >
          {children}
        </StyledOption>
      ) : (
        <StyledOption
          {...getRootProps()}
          disabled={disabled}
          selected={selected}
        >
          {children}
        </StyledOption>
      )}
    </motion.div>
  );
};

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { StyledListbox } from './StyledElements';
import { IListboxWrapperProps } from './types';
import { popperSlideDownVariant } from '@/package/preta/constant';

function ListboxWrapper(props: IListboxWrapperProps, ref: any) {
  const { open } = props;

  return (
    <motion.div
      initial={open ? 'open' : 'closed'}
      animate={open ? 'open' : 'closed'}
      exit={open ? 'open' : 'closed'}

      variants={popperSlideDownVariant}
    >
      <StyledListbox {...props} ref={ref} />
    </motion.div>
  );
}

export default forwardRef(ListboxWrapper);
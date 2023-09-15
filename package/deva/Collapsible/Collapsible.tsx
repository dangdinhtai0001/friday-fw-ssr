import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ICollapsibleProps } from './types.d';
import { StyledCollapsibleContent } from './StyledElements';

function Collapsible(props: ICollapsibleProps) {
  const {
    open = false,
    defaultOpen = false,
    contentHeight = '100px',
    header,
    children
  } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentControls = useAnimation();

  useEffect(() => {
    handleOnOpenChange(!open);
  }, [open]);

  const handleOnToggle = () => {
    handleOnOpenChange(isOpen);
  };

  /**
   * Hàm xử lý sự kiện thay đổi trạng thái mở/đóng
   * 
   * @param {boolean} _open - Giá trị trạng thái mở/đóng hiện tại
   * 
   * @description Hàm này sẽ:
   * - Toggle giá trị trạng thái mở/đóng bằng cách gán lại giá trị đối nghịch cho biến isOpen
   * - Gọi phương thức start của đối tượng contentControls và truyền tham số là giá trị 
   *   của biến open hoặc defaultOpen
   * - Giá trị truyền vào sẽ là 'open' hoặc 'hidden' tùy thuộc vào giá trị của biến open và defaultOpen
   */
  const handleOnOpenChange = (_open: boolean) => {

    setIsOpen(!_open);

    contentControls.start(
      _open ?
        (defaultOpen ? 'hidden' : 'open') :
        (defaultOpen ? 'open' : 'hidden')
    );
  }

  return (
    <>
      {header ?
        header :
        <button onClick={handleOnToggle}>toggle</button>
      }
      <motion.div
        variants={getVariants(contentHeight)}
        initial={defaultOpen ? 'open' : 'hidden'}
        transition={{ duration: 0.3, ease: 'easeInOut', }}
        animate={contentControls}
      >
        <StyledCollapsibleContent
          className='styled-collapsible-content'
          maxHeight={contentHeight}
          open={isOpen}
        >
          {children}
        </StyledCollapsibleContent>
      </motion.div>
    </>
  )
};

const getVariants = (height: string | number) => ({
  hidden: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: height,
    opacity: 1,
  }
});

export default Collapsible;

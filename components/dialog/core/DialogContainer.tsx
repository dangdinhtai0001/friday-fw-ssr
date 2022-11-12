// ------- react imports
import React from 'react';
// ------- 3rd imports
import { motion, AnimatePresence } from 'framer-motion';
// ------- local imports
import Portal from '@components/portal/Portal';
import { useDialogContext } from './DialogContext';
import Button from '@components/button';
// ------- type imports
import type { IDialogPropTypes } from './PropTypes';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const DialogContainer: React.FC<IDialogPropTypes> = (props: IDialogPropTypes) => {
  const dialogContextHook = useDialogContext();
  const { context } = dialogContextHook;
  const { visible, actionDefs } = context;

  const {
    getContainer,
    forceRender,
    destroyOnClose = false,
    afterClose,
    title,
    onDialogEvent,
    children,
  } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState<boolean>(visible);

  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  // Destroy on close will remove wrapped div
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }

  const handleOnDialogEvent = (key: string) => {
    onDialogEvent?.({ key: key, hook: dialogContextHook });
  };

  const renderDialogFooter = () => {
    return actionDefs?.map((item, index) => {
      return (
        <Button
          key={`${item.key}--${index}`}
          type={item.type}
          onClick={() => {
            handleOnDialogEvent(item.key);
          }}
        >
          {item.label}
        </Button>
      );
    });
  };

  return (
    <AnimatePresence mode="wait">
      {/* 
        - Phải thêm điêu kiện như này thì framer motion mới chạy animate exit 
        - Nếu không cần animate thì bỏ phần này, chỉ cần dùng props open của portal alf đã có thể ok rồi
       */}
      {visible && (
        <Portal
          open={visible || forceRender}
          autoDestroy={false}
          getContainer={getContainer}
          autoLock={visible || animatedVisible}
        >
          <div className="fd--dialog-root">
            {/* ----------------------------------- | mask | ----------------------------------- */}
            <div className="fd--dialog-mask absolute top-0 left-0 bg-black opacity-50 h-screen w-screen "></div>
            {/* ----------------------------------- | container | ----------------------------------- */}
            <div
              tabIndex={-1}
              className="fd--dialog-container absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
            >
              <motion.div
                className="fd--dialog-panel h-fit w-fit bg-th-background rounded-[0.5rem] flex flex-col "
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="fd--dialog-panel"
                onAnimationComplete={definition => {
                  console.log('Completed animating', definition);
                }}
              >
                {/* ------------------ | header | ------------------ */}
                <div className="fd--dialog-header flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]">
                  {title}
                </div>
                {/* ------------------ | content | ------------------ */}
                <div className="fd--dialog-content px-[0.5rem] py-[0.3rem]">{children}</div>
                {/* ------------------ | footer | ------------------ */}
                <div className="fd--dialog-footer h-fit rounded-b-[0.5rem] border-t-[0.1rem] border-th-foreground flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem]">
                  {renderDialogFooter()}
                </div>
              </motion.div>
            </div>
            {/* ----------------------------------- | container | ----------------------------------- */}
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default DialogContainer;

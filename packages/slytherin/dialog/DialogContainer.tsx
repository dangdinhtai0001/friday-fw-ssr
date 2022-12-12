// react imports
import * as React from 'react';
// 3rd imports
import {
  AnimatePresence,
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
} from 'framer-motion';
import { inRange } from 'lodash';
// local imports
import { resizeableDirection } from '@packages/ravenclaw/global-interface';
import { DialogContainerProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';

const variants = {
  hidden: {
    y: '-100%',
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
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.25,
      type: 'spring',
    },
  },
};

function Container(
  props: DialogContainerProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const {
    children,
    minHeight = 200,
    maxHeight = 800,
    minWidth = 600,
    maxWidth = 1000,
    initialHeight = 300,
    initialWidth = 600,
  } = props;

  const { context } = useDialogContext();

  const controls = useAnimation();
  const mHeight = useMotionValue(initialHeight);
  const mWidth = useMotionValue(initialWidth);

  const [isResizing, setIsResizing] = React.useState(false);
  const constraintsRef = React.useRef(null);

  const handleOnResize = React.useCallback(
    (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
      direction: resizeableDirection
    ) => {
      let newHeight = mHeight.get();
      let newWidth = mWidth.get();

      switch (direction) {
        case 'top':
          newHeight = mHeight.get() - info.delta.y;
          break;
        case 'bottom':
          newHeight = mHeight.get() + info.delta.y;
          break;
        case 'left':
          newWidth = mWidth.get() - info.delta.x;
          break;
        case 'right':
          newWidth = mWidth.get() + info.delta.x;
          break;
        case 'top-left':
          newHeight = mHeight.get() - info.delta.y;
          newWidth = mWidth.get() - info.delta.x;
          break;
        case 'top-right':
          newHeight = mHeight.get() - info.delta.y;
          newWidth = mWidth.get() + info.delta.x;
          break;
        case 'bottom-left':
          newHeight = mHeight.get() + info.delta.y;
          newWidth = mWidth.get() - info.delta.x;
          break;
        case 'bottom-right':
          newHeight = mHeight.get() + info.delta.y;
          newWidth = mWidth.get() + info.delta.x;
          break;
        default:
          break;
      }

      if (inRange(newHeight, minHeight, maxHeight)) {
        mHeight.set(newHeight);
      }
      if (inRange(newWidth, minWidth, maxWidth)) {
        mWidth.set(newWidth);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    []
  );

  React.useEffect(() => {
    controls.start('visible');
    return () => {
      controls.start('exit');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.opened]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="__fd--dialog-panel absolute top-0 left-0 w-full h-full px-[0.5rem] py-[0.3rem] flex flex-col justify-center items-center overflow-hidden"
        variants={variants}
        initial="hidden"
        animate={controls}
        key="fd--dialog-panel"
        ref={constraintsRef}
      >
        <motion.div
          drag={!isResizing}
          dragConstraints={constraintsRef}
          className="rounded-t-[0.5rem] rounded-b-[0.5rem] relative "
          style={{
            height: mHeight,
            width: mWidth,
          }}
        >
          <div className="flex flex-col w-full h-full">
            {/* ------------------------------------ | header | ------------------------------------ */}
            <div
              id="__fd-dialog-title"
              className="flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]"
            >
              {context.title}
            </div>
            {/* ------------------------------------ | content | ------------------------------------ */}
            <div
              id="__fd-dialog-description"
              className="w-full h-full px-[0.5rem] py-[0.3rem] overflow-auto bg-th-background"
            >
              {children}
            </div>
            {/* ------------------------------------ | footer | ------------------------------------ */}
            <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
              Đây là footer
            </div>
          </div>
          {/* -------------------------------------------- | resizable container | -------------------------------------------- */}
          <div>
            <motion.div
              className="__fd-resizable-top absolute select-none w-[100%] h-[10px] top-[-5px] left-[0px] cursor-row-resize"
              drag="y"
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'top');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-right absolute select-none w-[10px] h-[100%] top-[0px] right-[-5px] cursor-col-resize "
              drag="x"
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'right');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-bottom absolute select-none w-[100%] h-[10px] bottom-[-5px] left-[0px] cursor-row-resize bg-red-200"
              drag="y"
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'bottom');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-left absolute select-none w-[10px] h-[100%] top-[0px]  left-[-5px] cursor-col-resize "
              drag="x"
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'left');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-topright absolute select-none w-[20px] h-[20px] top-[-10px] right-[-10px] cursor-ne-resize "
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'top-right');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-bottomright absolute select-none w-[20px] h-[20px] bottom-[-10px] right-[-10px] cursor-se-resize "
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'bottom-right');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-bottomleft absolute select-none w-[20px] h-[20px] bottom-[-10px] left-[-10px] cursor-sw-resize "
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'bottom-left');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
            <motion.div
              className="__fd-resizable-topleft absolute select-none w-[20px] h-[20px] top-[-10px] left-[-10px] cursor-nw-resize "
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => {
                setIsResizing(true);
              }}
              onDrag={(e, info) => {
                handleOnResize(e, info, 'top-left');
              }}
              onDragEnd={() => {
                setIsResizing(false);
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default React.forwardRef(Container);

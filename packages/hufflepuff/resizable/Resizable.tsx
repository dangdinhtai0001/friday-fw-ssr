// react imports
import * as React from 'react';
// 3rd imports
import {
  motion,
  PanInfo
} from 'framer-motion';
// local imports
import { ResizeableDirection } from '@packages/ravenclaw/global-interface';
import { ResizableProps } from './Resizable.d';

const containerClass = {
  top: '__fd-resizable-top absolute select-none w-[100%] h-[10px] top-[-5px] left-[0px] cursor-row-resize ',
  bottom: '__fd-resizable-bottom absolute select-none w-[100%] h-[10px] bottom-[-5px] left-[0px] cursor-row-resize ',
  left: '__fd-resizable-left absolute select-none w-[10px] h-[100%] top-[0px]  left-[-5px] cursor-col-resize ',
  right: '__fd-resizable-right absolute select-none w-[10px] h-[100%] top-[0px] right-[-5px] cursor-col-resize ',
  'top-left': '__fd-resizable-topleft absolute select-none w-[20px] h-[20px] top-[-10px] left-[-10px] cursor-nw-resize ',
  'top-right': '__fd-resizable-topright absolute select-none w-[20px] h-[20px] top-[-10px] right-[-10px] cursor-ne-resize ',
  'bottom-left': '__fd-resizable-bottomleft absolute select-none w-[20px] h-[20px] bottom-[-10px] left-[-10px] cursor-sw-resize ',
  'bottom-right': '__fd-resizable-bottomright absolute select-none w-[20px] h-[20px] bottom-[-10px] right-[-10px] cursor-se-resize'
}

function getDragDirection(direction: ResizeableDirection): "x" | "y" | boolean {
  if (direction === 'top' || direction === 'bottom') {
    return "y";
  }

  if (direction === "left" || direction === "right") {
    return "x";
  }

  return true;
}


function Resizable(
  props: ResizableProps,
  ref: React.ForwardedRef<any>
): JSX.Element {

  const { onResizeStart, onResizeEnd, onResize } = props;

  const handleOnResizeStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, direction: ResizeableDirection) => {
    onResizeStart?.(event, info, direction);
  }

  const handleOnResizeEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, direction: ResizeableDirection) => {
    onResizeEnd?.(event, info, direction);
  }

  const handleOnResize = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, direction: ResizeableDirection) => {
    onResize?.(event, info, direction);
  }

  const renderResizableContainer = (direction: ResizeableDirection) => {
    return (
      <motion.div
        className={containerClass[direction]}
        drag={getDragDirection(direction)}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={(e, info) => { handleOnResizeStart(e, info, direction); }}
        onDrag={(e, info) => { handleOnResize(e, info, direction); }}
        onDragEnd={(e, info) => { handleOnResizeEnd(e, info, direction); }}
      />
    );
  }

  return (
    <div>
      {renderResizableContainer('top')}
      {renderResizableContainer('right')}
      {renderResizableContainer('bottom')}
      {renderResizableContainer('left')}
      {renderResizableContainer('top-right')}
      {renderResizableContainer('bottom-right')}
      {renderResizableContainer('bottom-left')}
      {renderResizableContainer('top-left')}
    </div>
  );
}

export default React.forwardRef(Resizable);

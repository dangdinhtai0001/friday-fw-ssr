import { ResizeableDirection } from '@packages/ravenclaw/global-interface';

export interface ResizableProps {
  onResizeStart: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    direction: ResizeableDirection
  ) => void;
  onResize: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    direction: ResizeableDirection
  ) => void;
  onResizeEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    direction: ResizeableDirection
  ) => void;
}

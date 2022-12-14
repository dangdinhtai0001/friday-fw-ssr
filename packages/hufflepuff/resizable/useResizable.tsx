// react imports
import * as React from 'react';
// 3rd imports
import {
    PanInfo, useMotionValue
} from 'framer-motion';
import { inRange } from 'lodash';
// local imports
import { ResizableMetadata, ResizeableDirection } from '@packages/ravenclaw/global-interface';

const useResizable = (props: ResizableMetadata) => {
    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    } = props;

    const mHeight = useMotionValue(initialHeight);
    const mWidth = useMotionValue(initialWidth);

    const handleOnResize = React.useCallback(
        (
            event: MouseEvent | TouchEvent | PointerEvent,
            info: PanInfo,
            direction: ResizeableDirection
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
        [mHeight, mWidth, maxHeight, maxWidth, minHeight, minWidth]
    );

    return {
        mHeight,
        mWidth,
        handleOnResize
    }
}

export default useResizable;
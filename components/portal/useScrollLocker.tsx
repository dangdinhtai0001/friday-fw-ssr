import * as React from 'react';
import { updateCSS, removeCSS } from '@utils/dom/dynamicCSS';
import useLayoutEffect from '@utils/hooks/useLayoutEffect';
import getScrollBarSize from '@utils/getScrollBarSize';
import { isBodyOverflowing } from '@utils/isBodyOverflowing';

const UNIQUE_ID = `rc-util-locker-${Date.now()}`;

let uuid = 0;

export default function useScrollLocker(
    lock?: boolean,
) {
    const mergedLock = !!lock;
    const [id] = React.useState(() => {
        uuid += 1;
        return `${UNIQUE_ID}_${uuid}`;
    });

    useLayoutEffect(() => {
        if (mergedLock) {
            const scrollbarSize = getScrollBarSize();
            const isOverflow = isBodyOverflowing();

            updateCSS(
                `
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ''}
}`,
                id,
            );
        } else {
            removeCSS(id);
        }

        return () => {
            removeCSS(id);
        };
    }, [mergedLock, id]);
}

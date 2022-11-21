import * as React from 'react';
import useLayoutEffect from 'rc-util/lib/hooks/useLayoutEffect';
import canUseDom from 'rc-util/lib/Dom/canUseDom';
import OrderContext from './Context';
import type { QueueCreate } from './Context';

const EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
export default function useDom(
    render?: boolean,
    debug?: string,
): [Element, QueueCreate] {

    const createDefaultEle = (): HTMLDivElement | null => {
        if (!canUseDom()) {
            return null;
        }

        const defaultEle = document.createElement('div');

        if (process.env.NODE_ENV !== 'production' && debug) {
            defaultEle.setAttribute('data-debug', debug);
        }

        return defaultEle;
    }
    const [ele] = React.useState<Element | null>(createDefaultEle());

    // ========================== Order ==========================
    const queueCreate = React.useContext(OrderContext);
    const [queue, setQueue] = React.useState<VoidFunction[]>(EMPTY_LIST);

    const mergedQueueCreate =
        queueCreate ||
        ((appendFn: VoidFunction) => {
            setQueue(origin => {
                const newQueue = [appendFn, ...origin];
                return newQueue;
            });
        });

    // =========================== DOM ===========================
    function append() {
        if (ele && !ele.parentElement) {
            document.body.appendChild(ele);
        }
    }

    function cleanup() {
        if (ele) {
            ele.parentElement?.removeChild(ele);
        }
    }

    useLayoutEffect(() => {
        if (render) {
            if (queueCreate) {
                queueCreate(append);
            } else {
                append();
            }
        } else {
            cleanup();
        }

        return cleanup;
    }, [render]);

    useLayoutEffect(() => {
        if (queue.length) {
            queue.forEach(appendFn => appendFn());
            setQueue(EMPTY_LIST);
        }
    }, [queue]);

    return [ele!, mergedQueueCreate];
}
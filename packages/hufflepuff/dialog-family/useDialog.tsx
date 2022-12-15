// react imports
// 3rd imports
// local imports
import { useResizable } from '@packages/hufflepuff/resizable';

const useDialog = (props: any, context: any, helper: any) => {
    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    } = context;

    const { mHeight, mWidth, handleOnResize } = useResizable({
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    });

    const handleOnClickActivator = () => {
        console.debug("Click activator ");
        helper.commitOpened(true);
    }

    const handleOnClose = (event: object, reason: "backdropClick" | "escapeKeyDown"): void => {
        console.debug("Close event with reason: ", reason);
        helper.commitOpened(false);

        // trigger cho sự kiện close
        props.onClose?.()
    }

    return {
        mHeight,
        mWidth,
        handleOnClickActivator,
        handleOnClose,
        handleOnResize
    };
}

export default useDialog;
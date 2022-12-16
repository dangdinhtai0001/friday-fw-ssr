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

    const handleOnClose = async (event: object, reason: "backdropClick" | "escapeKeyDown" | "headerClick"): Promise<any> => {
        // animation cho sự kiện close
        await props.animationControls.start("exit");

        // trigger cho sự kiện close
        await props.onClose?.();


        console.debug("Close event with reason: ", reason);
        helper.commitOpened(false);
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
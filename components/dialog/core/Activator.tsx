// react imports
import { cloneElement, forwardRef, Children, useImperativeHandle } from 'react';
import { ActivatorProps } from './interface';
import { useDialogContext } from './DialogContext'

const Activator = forwardRef((props: ActivatorProps, ref) => {
    const { children, onClick } = props;

    const { updateVisible } = useDialogContext();

    useImperativeHandle(ref, () => ({
        show: () => { },
        hide: () => { }
    }));

    const handleOnClickActivator = () => {
        // gọi đến hàm onClick được truyền vào từ bên ngoài (nếu có )
        onClick?.();

        updateVisible(true);
    };

    if (children && Children.count(children) === 1) {
        return cloneElement(children, { onClick: handleOnClickActivator })
    }

    return <></>;
});

Activator.displayName = 'Dialog--Activator';


export default Activator;
// react imports
import { cloneElement, forwardRef, Children, useImperativeHandle } from 'react';
import { ActivatorProps } from './PropTypes';

const Activator = forwardRef((props: ActivatorProps, ref) => {
    const { children, onClick } = props;

    useImperativeHandle(ref, () => ({
        show: () => { },
        hide: () => { }
    }));

    const handleOnClickActivator = () => {
        // gọi đến hàm onClick được truyền vào từ bên ngoài (nếu có )
        onClick?.();
    };

    if (children && Children.count(children) === 1) {
        return cloneElement(children, { onClick: handleOnClickActivator })
    }

    return <></>;
});

export default Activator;
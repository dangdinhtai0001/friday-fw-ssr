// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { DialogContainerProps } from '../Dialog.d';

function Content(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { children } = props;

    return (
        <div className="w-full h-full px-[0.5rem] py-[0.3rem] overflow-auto bg-th-background "        >
            {children}
        </div>
    );
}

export default React.forwardRef(Content);

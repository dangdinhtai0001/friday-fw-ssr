// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { DialogContainerProps } from '../Dialog.d';
import { useDialogContext } from '../DialogContext';

function Header(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { extraHeader } = props;

    const { context } = useDialogContext();

    return (
        <>
            {/* ------------------------------------ | header | ------------------------------------ */}
            <div
                id="__fd-dialog-title"
                className="flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]"
            >
                {context.title}
            </div>
            {/* ------------------------------------ | extra header | ------------------------------------ */}
            <div className='w-full  bg-th-background'>
                {extraHeader}
            </div>
        </>
    );
}

export default React.forwardRef(Header);

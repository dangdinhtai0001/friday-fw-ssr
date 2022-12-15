// react imports
import * as React from 'react';
// 3rd imports
import { AiFillCloseCircle } from 'react-icons/ai';
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
            <div className="flex items-center justify-between text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem] "  >
                <div></div>
                {context.title}
                <div>
                    <AiFillCloseCircle />
                </div>
            </div>
            {/* ------------------------------------ | extra header | ------------------------------------ */}
            <div className='w-full  bg-th-background'>
                {extraHeader}
            </div>
        </>
    );
}

export default React.forwardRef(Header);

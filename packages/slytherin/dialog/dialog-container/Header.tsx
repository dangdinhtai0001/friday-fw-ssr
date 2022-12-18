// react imports
import * as React from 'react';
// 3rd imports
import { AiFillCloseCircle } from 'react-icons/ai';
// local imports
import useDialog from '@packages/hufflepuff/dialog-family/useDialog';
import { Button } from '@packages/slytherin/button';
import { DialogContainerProps } from '../Dialog.d';
import { useDialogContext } from '../DialogContext';

function Header(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { extraHeader } = props;

    const { context, helper } = useDialogContext();
    const { handleOnClose } = useDialog(props, context, helper);

    return (
        <>
            {/* ------------------------------------ | header | ------------------------------------ */}
            <div className="flex items-center justify-between text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem] "  >
                <div></div>
                {context.title}
                <Button
                    useBorder={false}
                    theme='danger'
                    onClick={(event) => { handleOnClose(event, "headerClick") }}
                    icon={<AiFillCloseCircle className='scale-[1.4] h-full w-full fill-th-danger bg-th-background rounded-full' />}
                />
            </div>
            {/* ------------------------------------ | extra header | ------------------------------------ */}
            <div className='w-full h-fit bg-th-background'>
                {extraHeader}
            </div>
        </>
    );
}

export default React.forwardRef(Header);

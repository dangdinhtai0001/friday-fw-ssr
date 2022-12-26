// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { FormFieldProps } from './Form.d';

function FormField(
    props: FormFieldProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    return <>
        <div className="grid grid-cols-2 gap-[0.1rem] ">
            <div className='bg-red-300'>Đây là label</div>
            <div className='bg-blue-300'>Đây là control</div>
            <div className='bg-yellow-300 col-span-2'>Đây là message</div>
        </div>
    </>;
}

export default React.forwardRef(FormField);

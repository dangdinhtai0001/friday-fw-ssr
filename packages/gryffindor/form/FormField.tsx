// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
// local imports
import { FormFieldProps } from './Form.d';

function FormField(
    props: FormFieldProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { labelWidth, labelAlign = 'right', label, children } = props;

    const fieldLabelClasses = classNames(
        `flex mr-[0.1rem] items-center font-medium`,
        {
            [`justify-start`]: labelAlign === 'left',
            [`justify-end`]: labelAlign === 'right',
        }
    );

    return (
        <>
            <div className="__fd-form-field-container flex flex-col w-full my-[0.1rem]">
                {/* ----------------------------------- row 1  ----------------------------------- */}
                <div className="__fd-field flex w-full mb-[0.1rem]">
                    <div className={fieldLabelClasses} style={{ width: labelWidth }}>
                        {label}
                    </div>
                    <div className=' flex w-full ml-[0.1rem] items-center'>
                        {children}
                    </div>
                </div>
                {/* ----------------------------------- row 2  ----------------------------------- */}
                <div className="__fd-field-message flex w-full mt-[0.1rem]">
                    <div style={{ width: labelWidth }} />
                    <div className='bg-yellow-300 flex w-full ml-[0.1rem] items-center'>Đây là message</div>
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(FormField);

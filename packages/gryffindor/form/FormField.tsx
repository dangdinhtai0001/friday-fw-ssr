// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { get } from 'lodash';
import { useFormContext } from "react-hook-form";
// local imports
import { FormFieldProps } from './Form.d';
import { fieldMessageVariant } from './FormUtils';

function FormField(
    props: FormFieldProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { labelWidth, labelAlign = 'right', label, fieldDef, children } = props;
    const { name } = fieldDef!;

    const { formState } = useFormContext(); // retrieve all hook methods
    const { errors } = formState;

    const [fieldErrorMessage] = React.useState(get(errors, [name, 'message']));

    const fieldLabelClasses = classNames(
        `flex mr-[0.1rem] items-center font-medium`,
        {
            [`justify-start`]: labelAlign === 'left',
            [`justify-end`]: labelAlign === 'right',
        }
    );

    const fieldContainerClasses = classNames(
        `__fd-form-field-container flex flex-col w-full my-[0.1rem] px-[0.1rem] py-[0.1rem]`,
        {
            [`border-[0.1rem] border-th-danger`]: fieldErrorMessage
        }
    );

    return (
        <>
            <div className={fieldContainerClasses}>
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
                    <motion.div
                        variants={fieldMessageVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className='flex w-full ml-[0.1rem] items-center'
                    >
                        {fieldErrorMessage &&
                            <div className='text-th-danger'>
                                {fieldErrorMessage}
                            </div>}
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(FormField);

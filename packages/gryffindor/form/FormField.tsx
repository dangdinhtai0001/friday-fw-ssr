// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { get } from 'lodash';
import { Controller, ControllerRenderProps, useFormContext } from "react-hook-form";
// local imports
import { FormFieldProps } from './Form.d';
import { fieldContainerLeftVariant, fieldContainerTransition, fieldMessageVariant } from './FormUtils';

function FormField(
    props: FormFieldProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { labelWidth, labelAlign = 'right', fieldDef, onChange } = props;
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

    const onRenderController = React.useCallback(({ field }: { field: ControllerRenderProps }) => {
        return React.createElement(
            fieldDef?.component,
            {
                ...fieldDef?.componentParams,
                ...field,
                onChange: async (values: any) => {
                    await onChange?.(values, field);
                }
            }
        );
    }, []);

    const fieldContainerControls = useAnimation();

    React.useEffect(() => {
        if (fieldErrorMessage) {
            fieldContainerControls.start("visible");
        }
    }, [fieldErrorMessage]);


    return (
        <>
            <div className='flex px-[0.1rem]'>
                {/* ------------- | LEFT | */}
                <motion.div
                    className='w-[0.3rem] mr-[0.2rem] bg-th-danger'
                    variants={fieldContainerLeftVariant}
                    initial="hidden"
                    animate={fieldContainerControls}
                    transition={fieldContainerTransition}
                />

                <div className="__fd-form-field-container flex flex-col w-full my-[0.1rem] px-[0.1rem] pb-[0.1rem] pt-[0.2rem]">
                    {/* ----------------------------------- row 1  ----------------------------------- */}
                    <div className="__fd-field flex w-full mb-[0.1rem]">
                        <div className={fieldLabelClasses} style={{ width: labelWidth }}>
                            {fieldDef?.label ? fieldDef.label : fieldDef?.name}
                        </div>
                        <div className=' flex w-full ml-[0.1rem] items-center'>
                            <Controller
                                render={onRenderController}
                                name={fieldDef?.name!}
                            />
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
            </div>
        </>
    );
}

export default React.forwardRef(FormField);

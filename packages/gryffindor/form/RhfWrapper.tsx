// react imports
import * as React from 'react';
// 3rd imports
import { FieldValues, FormProvider, Resolver, UseFormProps, UseFormReturn, useForm } from "react-hook-form";
// local imports
import Form from './Form';
import { FormProps } from './Form.d';
import { useFormContext } from './FormContext';
import useFormAction from './useFormAction';

function RhfWrapper<T extends FieldValues>(
    props: FormProps<T>,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { context } = useFormContext<T>();

    const rhfUseFormProps: UseFormProps<T> = React.useMemo((): UseFormProps<T> => {
        let { general } = props;
        // form resolver -------
        const _resolver: Resolver<T> = async (values: T) => {
            return await handleOnValidate(values);
        };

        let _props: UseFormProps<T> = {
            // Các giá trị lấy trực tiếp từ props
            ...props.general,
            mode: general?.formMode,
            context: 'context',
            // initial value -------
            defaultValues: context.initialValues,
            values: context.initialValues,
            resolver: _resolver
        };

        return _props;
    }, []);

    const useFormMethods: UseFormReturn<T> = useForm<T>(rhfUseFormProps);

    const { handleOnValidate } = useFormAction<T>(props, useFormMethods);

    return (
        <FormProvider {...useFormMethods}>
            <Form {...props} useFormMethods={useFormMethods} ref={ref} />
        </FormProvider>
    );
}

export default React.forwardRef(RhfWrapper);

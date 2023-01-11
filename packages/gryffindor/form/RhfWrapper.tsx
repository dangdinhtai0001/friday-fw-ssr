// react imports
import * as React from 'react';
// 3rd imports
import { FormProvider } from "react-hook-form";
// local imports
import Form from './Form';
import { FormProps } from './Form.d';
import useInternalForm from './useInternalForm';


function RhfWrapper(
    props: FormProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { useFormMethods } = useInternalForm(props);

    return (
        <FormProvider {...useFormMethods} >
            <Form {...props} ref={ref} />
        </FormProvider>
    );
}

export default React.forwardRef(RhfWrapper);

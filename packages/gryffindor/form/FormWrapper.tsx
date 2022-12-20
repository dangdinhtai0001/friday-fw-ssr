// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Form from './Form';
import { FormProps } from './Form.d';
import { FormContextProvider } from './FormContext';
import { createFormInitialContext } from './FormUtils';

function FormWrapper(
    props: FormProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <FormContextProvider initialState={createFormInitialContext(props)}>
            <Form {...props} ref={ref} />
        </FormContextProvider>
    );
}

export default React.forwardRef(FormWrapper);

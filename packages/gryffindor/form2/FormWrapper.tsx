// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { FormProps } from './Form.d';
import { FormContextProvider } from './FormContext';
import { createFormInitialContext } from './FormUtils';
import RhfWrapper from './RhfWrapper';

function FormWrapper(
    props: FormProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <FormContextProvider initialState={createFormInitialContext(props)}>
            <RhfWrapper {...props} ref={ref} />
        </FormContextProvider>
    );
}

export default React.forwardRef(FormWrapper);

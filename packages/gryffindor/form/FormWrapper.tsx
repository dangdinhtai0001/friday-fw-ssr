// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { FieldValues } from 'react-hook-form';
import { ContextState, FormProps } from './Form.d';
import { FormContextProvider } from './FormContext';
import RhfWrapper from './RhfWrapper';

function getInitialContext<T extends FieldValues>(props: FormProps<T>): ContextState<T> {
    let { fields } = props;

    let _initialValues: T = {} as T;
    let _disabled: { [key: string]: boolean } = {};
    let _visible: { [key: string]: boolean } = {};

    fields.forEach(fieldDef => {
        _initialValues = {
            ..._initialValues,
            [fieldDef.name]: fieldDef.initialValue
        }
        _disabled[fieldDef.name] = false;
        _visible[fieldDef.name] = true;
    });

    return {
        initialValues: _initialValues,
        fields,
        disabled: _disabled,
        visible: _visible,
        rawValues: _initialValues,
        submitCount: 0,
        status: 'initial',
    };
}

function FormWrapper<T extends FieldValues>(
    props: FormProps<T>,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <FormContextProvider initialState={getInitialContext<T>(props)}>
            <RhfWrapper {...props} ref={ref} />
        </FormContextProvider>
    );
}

export default React.forwardRef(FormWrapper);

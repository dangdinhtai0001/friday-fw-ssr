// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { FormProps } from './Form.d';
import FormField from './FormField';
import useForm from './useForm';

function Form(
  props: FormProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { formLayout } = props;

  const { } = useForm(props);

  return <>
    <FormField></FormField>
  </>;
}

export default React.forwardRef(Form);

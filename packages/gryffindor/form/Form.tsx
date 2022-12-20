// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { FormProps } from './Form.d';
import { useFormContext } from './FormContext';
import useForm from './useForm';


function Form(
  props: FormProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context, helper } = useFormContext();

  const { } = useForm(props);

  return <></>;
}

export default React.forwardRef(Form);

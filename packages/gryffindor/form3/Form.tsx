// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { FieldValues } from 'react-hook-form';
import { FormProps } from './Form.d';
import { useFormContext } from './FormContext';


function Form<T extends FieldValues>(
  props: FormProps<T>,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context, helper } = useFormContext();

  return <></>;
}

export default React.forwardRef(Form);

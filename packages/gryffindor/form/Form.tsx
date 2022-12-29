// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { GridLayout } from '@packages/slytherin/grid-layout';
import { FormProps } from './Form.d';
import { generateGridItemFromFields } from './FormUtils';
import useForm from './useForm';

function Form(
  props: FormProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { formLayout, fields } = props;


  const a = useForm(props);

  return <>
    <GridLayout fluid columnCount={formLayout?.column}>
      {generateGridItemFromFields(props)}
    </GridLayout>
  </>;
}

export default React.forwardRef(Form);

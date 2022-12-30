// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { GridLayout } from '@packages/slytherin/grid-layout';
import { FormProvider } from "react-hook-form";
import { FormProps } from './Form.d';
import useInternalForm from './useInternalForm';

function Form(
  props: FormProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { formLayout } = props;

  const { generateGridItemFromFields, useFormMethods, handleOnSubmit } = useInternalForm(props);

  return (
    <FormProvider {...useFormMethods} >
      {/* pass all methods into the context */}
      <form onSubmit={handleOnSubmit}>
        <GridLayout fluid columnCount={formLayout?.column}>
          {generateGridItemFromFields()}
        </GridLayout>
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default React.forwardRef(Form);

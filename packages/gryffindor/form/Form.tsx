// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { GridLayout } from '@packages/slytherin/grid-layout';
import { FormProps } from './Form.d';
import useInternalForm from './useInternalForm';

function Form(
  props: FormProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { formLayout } = props;
  const formRef = React.useRef<HTMLFormElement>(null);

  const { generateGridItemFromFields, useFormMethods, handleOnSubmit } = useInternalForm(props);

  React.useImperativeHandle(ref, () => {
    return {
      submit(): void {
        formRef.current?.dispatchEvent(
          new Event("submit", { bubbles: true, cancelable: true })
        )
      },
      getValues(): any {
        return useFormMethods.getValues();
      },
    }
  }, []);

  // return (
  //   <FormProvider {...useFormMethods} >
  //     {/* pass all methods into the context */}
  //     <form onSubmit={handleOnSubmit} ref={formRef}>
  //       <GridLayout fluid columnCount={formLayout?.column}>
  //         {generateGridItemFromFields()}
  //       </GridLayout>
  //     </form>
  //   </FormProvider>
  // );

  return (
    <form onSubmit={handleOnSubmit} ref={formRef}>
      <GridLayout fluid columnCount={formLayout?.column}>
        {generateGridItemFromFields()}
      </GridLayout>
    </form>
  );
}

export default React.forwardRef(Form);

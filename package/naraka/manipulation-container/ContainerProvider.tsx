import * as React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContainerProviderProps, ContextState } from './types';
import { useForm, FormProvider, UseFormProps } from "react-hook-form";

// 'DeepPartial<T> | AsyncDefaultValues<T> | undefined'

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps): ContextState => {
  return {
    fieldDefs: props.fieldDefs,
    onValueChange: props.onValueChange
  };
}

const createReactHookFormProps = (props: ContainerProviderProps): UseFormProps => {
  return {
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    delayError: 1,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    // TODO: Chuyển thành đọc từ props
    defaultValues: {
      foo: 'foo'
    },
    // TODO: Chuyển thành đọc từ props
    resolver: async (values, context, options) => {
      console.log("validate ", values, options);
      let errors: any = {};

      if (values.foo === 'bar') {
        errors.foo = {
          type: "custom",
          message: "This is custom."
        }
      }
      return {
        values: values,
        errors: errors
      }
    }
  };
}

export default function ContainerProvider(props: ContainerProviderProps) {
  let initialState: ContextState = createDefaultContextStateValue(props);
  let rhfProps: UseFormProps = createReactHookFormProps(props);

  const methods = useForm(rhfProps);

  return (
    <>
      <ContainerContextProvider initialState={initialState}>
        <FormProvider {...methods} > // pass all methods into the context
          <Container {...initialState}></Container>
        </FormProvider>
      </ContainerContextProvider>
    </>
  );
}

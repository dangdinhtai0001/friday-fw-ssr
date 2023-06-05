import * as React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContainerProviderProps, ContextState } from './types';
import { useForm, FormProvider } from "react-hook-form";

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps): ContextState => {
  return {};
}

export default function ContainerProvider(props: ContainerProviderProps) {
  let initialState: ContextState = createDefaultContextStateValue(props);

  const methods = useForm();



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

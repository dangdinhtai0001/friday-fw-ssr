import * as React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContainerProviderProps, ContextState } from './types';

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps): ContextState => {
  return {};
}

export default function ContainerProvider(props: ContainerProviderProps) {
  let initialState: ContextState = createDefaultContextStateValue(props);

  return (
    <>
      <ContainerContextProvider initialState={initialState}>
        <Container {...initialState}></Container>
      </ContainerContextProvider>
    </>
  );
}

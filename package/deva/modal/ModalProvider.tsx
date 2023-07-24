import { ForwardedRef, forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContextState } from './types';
import { IModalProviderProps } from './types.d'
import { ModalContextProvider } from './context/ModalContext';
import ModalWrapper from './ModalWrapper';
const createDefaultContextStateValue = (props: IModalProviderProps): ContextState => {
  return {
    modalId: props.id ? props.id : uuidv4(),
  };
}

function ModalProvider(props: IModalProviderProps, ref: ForwardedRef<unknown>) {
  let initialState: ContextState = createDefaultContextStateValue(props);

  return (
    <ModalContextProvider initialState={initialState}>
      <ModalWrapper {...initialState} ref={ref}></ModalWrapper>
    </ModalContextProvider>
  );
}

export default forwardRef(ModalProvider);
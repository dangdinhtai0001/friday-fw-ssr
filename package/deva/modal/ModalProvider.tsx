import { ForwardedRef, forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContextState } from './types';
import { IModalProviderProps } from './types.d'
import { ModalContextProvider } from './context/ModalContext';
import ModalWrapper from './ModalWrapper';
const createDefaultContextStateValue = (props: IModalProviderProps): ContextState => {
  return {
    modalId: props.id ? props.id : uuidv4(),
    open: false,
    footerDefs: props.footerDefs,
    width: String(props.width ? props.width : '50vw'),
    height: String(props.height ? props.height : '50vh'),
    title: props.title,
  };
}

function ModalProvider(props: IModalProviderProps, ref: ForwardedRef<unknown>) {
  let initialState: ContextState = createDefaultContextStateValue(props);

  return (
    <ModalContextProvider initialState={initialState}>
      <ModalWrapper
        {...initialState}
        component={props.component}
        componentParams={props.componentParams}
        ref={ref}></ModalWrapper>
    </ModalContextProvider>
  );
}

export default forwardRef(ModalProvider);
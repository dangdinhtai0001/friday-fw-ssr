import { useContext } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextHookValue, ContextApi } from '../types';
import { ModalContext, ModalContextProvider, } from './ModalContext';
import { mutations } from './ContextMutations';

// ---------------------- || Định nghĩa hook || ---------------------- //
const useContainerContext =
  (): ContextHookValue => {
    // lấy giá trị của context
    const { context, setContext } = useContext(ModalContext)!;

    if (!context) {
      throw new Error(
        'useContainerContext must be used within an ContainerProvider'
      );
    }

    const contextApi: ContextApi = mutations(
      context,
      setContext
    );

    return { context, contextApi };
  };

export { ModalContextProvider, useContainerContext };

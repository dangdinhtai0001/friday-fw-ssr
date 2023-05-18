import { useContext } from 'react';
// ------------------------ || define interface || ------------------------
import { ContainerContextType } from '../types';
import {
  ContainerContext,
  mutations,
  ContainerContextProvider,
} from './ContainerContext';

// ---------------------- || Định nghĩa hook || ---------------------- //
const useContainerContext =
  (): ContainerContextType.ContextHookValue => {
    // lấy giá trị của context
    const { context, setContext } = useContext(ContainerContext)!;

    if (!context) {
      throw new Error(
        'useContainerContext must be used within an ContainerProvider'
      );
    }

    const helper: ContainerContextType.ContextHelper = mutations(
      context,
      setContext
    );

    return { context, helper };
  };

export { ContainerContextProvider, useContainerContext };

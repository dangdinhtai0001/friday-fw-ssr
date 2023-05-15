import { Dispatch, createContext, useContext, useEffect, useMemo, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState } from './ContainerContext.d';
import { ContainerContext, mutations, ContainerContextProvider} from './ContainerContext';

// ---------------------- || Định nghĩa hook || ---------------------- //
const useContainerContext = (): { context: ContextState, helper: ContextHelper } => {
  // lấy giá trị của context
  const { context, setContext } = useContext(ContainerContext)!;

  if (!context) {
    throw new Error('useContainerContext must be used within an ContainerProvider');
  }
  
  const helper: ContextHelper = mutations(context, setContext);

  return { context, helper };
};

export { ContainerContextProvider, useContainerContext };
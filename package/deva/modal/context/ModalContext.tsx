import React, { createContext, useEffect, useState } from 'react';
import { ContextProviderValue, ContextProviderProps, ContextState } from '../types.d';

// Tạo một context mới với giá trị ban đầu là null
export const ModalContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
export const ModalContextProvider: React.FC<ContextProviderProps> = (props) => {
  const { initialState, children } = props;

  // Sử dụng useState để lưu trữ trạng thái của context
  const [context, setContext] = useState<ContextState>(initialState);

  // Trả về context provider, cung cấp giá trị context và setter cho các component con
  return (
    <ModalContext.Provider value={{ context, setContext }}>
      {children}
    </ModalContext.Provider>
  );
};

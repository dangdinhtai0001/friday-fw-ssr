import React, { createContext, useEffect, useState } from 'react';
import { ContextProviderValue, ContextProviderProps, ContextState } from '../types';

// Tạo một context mới với giá trị ban đầu là null
export const ContainerContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
export const ContainerContextProvider: React.FC<ContextProviderProps> = (props) => {
  const { initialState, children } = props;

  // Sử dụng useState để lưu trữ trạng thái của context
  const [context, setContext] = useState<ContextState>(initialState);

  // Sử dụng useEffect để theo dõi sự thay đổi của initialState
  useEffect(() => {
    // Các hành động mà bạn muốn thực hiện khi initialState thay đổi
    return () => {
      // Hành động dọn dẹp (nếu có) khi component bị hủy
    };
  }, [props.initialState]);

  // Trả về context provider, cung cấp giá trị context và setter cho các component con
  return (
    <ContainerContext.Provider value={{ context, setContext }}>
      {children}
    </ContainerContext.Provider>
  );
};

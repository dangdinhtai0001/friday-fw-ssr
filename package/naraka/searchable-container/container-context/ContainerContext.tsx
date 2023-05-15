import { Dispatch, createContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState, InitialContextState } from './ContainerContext.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
export const ContainerContext = createContext<ContextProviderValue | null>(null);

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (initialState: InitialContextState): ContextState => {
  return {
    searchConditions: [],
    sortConditions: [],
    paginationData: {
      totalItems: 100,
      totalPages: 10,
      currentPage: 1,
      itemsPerPage: 10
    },
    data: []
  }
}

// ---------------------- || Định nghĩa context provider || ---------------------- //
export const ContainerContextProvider = (props: ContextProviderProps) => {
  const { initialState, children } = props;

  const [context, setContext] = useState<ContextState>(createDefaultContextStateValue(initialState));

  useEffect(() => {
    return () => {
      setContext(props.initialState);
    };
  }, [props.initialState]);

  return (
    <ContainerContext.Provider value={{ context, setContext }}>
      {children}
    </ContainerContext.Provider>
  );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính 
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
// --------------------------------------------------------------------------------
export function mutations(context: ContextState, setContext: Dispatch<any>): ContextHelper {
  return {
  }
}
// --------------------------------------------------------------------------------



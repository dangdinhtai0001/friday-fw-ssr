import { Dispatch, createContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContainerContextType, SearchableContainerType, CommonType } from '../types';
import Queue from 'queue-fifo';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
export const ContainerContext = createContext<ContainerContextType.ContextProviderValue | null>(null);

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (initialState: ContainerContextType.InitialContextState): ContainerContextType.ContextState => {
  let queue = new Queue();

  return {
    filterInstance: [],
    sortConditions: [],
    paginationData: {
      totalItems: 100,
      totalPages: 10,
      currentPage: 1,
      itemsPerPage: 10
    },
    data: [],
    taskQueue: queue
  }
}

// ---------------------- || Định nghĩa context provider || ---------------------- //
export const ContainerContextProvider = (props: ContainerContextType.ContextProviderProps) => {
  const { initialState, children } = props;

  const [context, setContext] = useState<ContainerContextType.ContextState>(createDefaultContextStateValue(initialState));

  useEffect(() => {
    return () => {
      // setContext(props.initialState);
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
// - create... ==> Tính toán và thay đổi hoàn toàn giá trị  cuẩ thuộc tính 
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
// --------------------------------------------------------------------------------
export function mutations(context: ContainerContextType.ContextState, setContext: Dispatch<any>): ContainerContextType.ContextHelper {
  return {
    /**
     * Hàm tạo context từ props
     */
    createContextFromProps: (props: SearchableContainerType.SearchableContainerProps): void => {
      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        filterBlockComponent: props.filterBlockComponent,
        filterBlockParams: props.filterBlockParams,
        //  ------------------------------------
        taskControls: props.taskControls
      };

      setContext(updatedContext);
    },
    /**
     * 
     */
    commitFilterInstance: (filterInstance: CommonType.FilterCriteria[]): void => {
      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        filterInstance: filterInstance
      };

      setContext(updatedContext);
    },
    /**
     * 
     */
    createTask: (task: CommonType.TaskPayload) : void => {
      let queue = context.taskQueue;
      queue.enqueue(task);

      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        taskQueue: queue
      };

      setContext(updatedContext);
    }

  }
}
// --------------------------------------------------------------------------------



// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
import { Dispatch } from 'react';
import { ContextState, ContextApi, ITaskBlock, FilterCriteria, PaginationModel } from '../types';
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính
// - create... ==> Tính toán và thay đổi hoàn toàn giá trị  cuẩ thuộc tính
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó
// --------------------------------------------------------------------------------
export function mutations(context: ContextState, setContext: Dispatch<React.SetStateAction<ContextState>>): ContextApi {
  return {
    applyFilterInstance: (filterInstance: FilterCriteria[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          filterInstance: filterInstance,
        };

        return updatedContext;
      });
    },
    createTaskChain: (taskChain: ITaskBlock[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          taskChain: taskChain,
        };

        return updatedContext;
      });
    },
    applyPaginationInstance: (paginationModel: PaginationModel): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          paginationInstance: { ...paginationModel },
        };

        return updatedContext;
      });
    },
    applyContainerData: (data: any[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          containerData: [...data],
        };

        return updatedContext;
      });
    },
    applyProcessingData: (data: any | null): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          processingData: data === null ? null : { ...data },
        };

        return updatedContext;
      });
    },
    applyContainerLoadingStatus: (isLoading: boolean) => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          containerLoading: isLoading
        };

        return updatedContext;
      });
    },
    applyTaskBatch: (taskChain: ITaskBlock[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          taskChain: taskChain,
        };

        return updatedContext;
      });
    },
    clearTaskResult: (): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          taskResult: [],
        };

        return updatedContext;
      });
    },
    completeTask: (task: ITaskBlock): void => {
      setContext((prevContext: ContextState) => {
        let _taskResult: ITaskBlock[] = prevContext.taskResult;
        _taskResult.push(task);

        const updatedContext: ContextState = {
          ...prevContext,
          taskResult: _taskResult,
        };

        return updatedContext;
      });
    },
    commitCurrentModalTemplate: (modalTemplate?: string): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          currentModalTeamplate: modalTemplate,
        };

        return updatedContext;
      });
    }
  }
}
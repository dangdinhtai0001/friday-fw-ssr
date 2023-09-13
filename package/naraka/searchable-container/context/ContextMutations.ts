// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
import { Dispatch } from 'react';
import _ from 'lodash';
import {
  ContextState,
  ContextApi,
  ITaskBlock,
  FilterCriteria,
  PaginationModel,
} from '../types';
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính
// - create... ==> Tính toán và thay đổi hoàn toàn giá trị  cuẩ thuộc tính
// - inrease/ decrease/ add... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó
// --------------------------------------------------------------------------------

/**
 * Các hàm dưới đây định nghĩa các thay đổi (mutations) cho context của ứng dụng.
 * Mỗi hàm thay đổi một phần cụ thể của context, và sử dụng hàm setContext để cập nhật giá trị mới.
 * @param context - Trạng thái hiện tại của context.
 * @param setContext - Hàm để cập nhật giá trị mới cho context.
 * @returns Object chứa các hàm thay đổi cho context.
 */
export function mutations(
  context: ContextState,
  setContext: Dispatch<React.SetStateAction<ContextState>>
): ContextApi {
  return {
    //#region ----------------------|| Filter ||----------------------
    /**
     * Thay đổi filterInstance trong context.
     * @param filterInstance - Mảng các tiêu chí filter mới.
     */
    applyFilterInstance: (
      filterInstance: FilterCriteria[]
    ): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          filterInstance: filterInstance,
        };

        return updatedContext;
      });
    },
    /**
     * Thêm các filter criteria vào context.
     *
     * @param {FilterCriteria[]} criterias - Mảng chứa các filter criteria cần thêm vào.
     * @returns {void}
     */
    addFilterCriterias(criterias: FilterCriteria[]): void {
      let currentFilterInstance = context.filterInstance;

      const updatedFilterInstance = _.unionWith(
        currentFilterInstance,
        criterias,
        (obj1: FilterCriteria, obj2: FilterCriteria) => {
          return (
            obj1.key === obj2.key && obj1.source === obj2.source
          );
        }
      );

      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          filterInstance: updatedFilterInstance,
        };

        return updatedContext;
      });
    },
    //#endregion
    /**
     * Thay đổi paginationInstance trong context.
     * @param paginationModel - Mô hình đối tượng PaginationModel mới.
     */
    applyPaginationInstance: (
      paginationModel: PaginationModel
    ): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          paginationInstance: { ...paginationModel },
        };

        return updatedContext;
      });
    },
    /**
     * Thay đổi containerData trong context.
     * @param data - Mảng dữ liệu mới cho containerData.
     */
    applyContainerData: (data: any[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          containerData: [...data],
        };

        return updatedContext;
      });
    },
    /**
     * Thay đổi processingData trong context.
     * @param data - Dữ liệu mới cho processingData, hoặc null nếu không có dữ liệu.
     */
    applyProcessingData: (data: any | null): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          processingData: data === null ? null : { ...data },
        };

        return updatedContext;
      });
    },
    /**
     * Thay đổi trạng thái loading của container trong context.
     * @param isLoading - Trạng thái loading mới.
     */
    applyContainerLoadingStatus: (isLoading: boolean) => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          containerLoading: isLoading,
        };

        return updatedContext;
      });
    },
    //#region ----------------------|| task  || ----------------------
    /**
     * Thay đổi taskChain trong context.
     * @param taskChain - Mảng các ITaskBlock mới tạo thành một chuỗi nhiệm vụ.
     */
    applyTaskBatch: (taskChain: ITaskBlock[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          taskChain: taskChain,
        };

        return updatedContext;
      });
    },
    /**
     * Xóa kết quả của nhiệm vụ đã thực hiện trong context.
     */
    clearTaskResult: (): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          taskResult: [],
        };

        return updatedContext;
      });
    },
    /**
     * Hoàn thành một nhiệm vụ và thêm kết quả vào danh sách kết quả trong context.
     * @param task - ITaskBlock đại diện cho nhiệm vụ đã hoàn thành.
     */
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
    /**
     * Thay đổi taskChain trong context.
     * @param taskChain - Mảng các ITaskBlock mới tạo thành một chuỗi nhiệm vụ.
     */
    createTaskChain: (taskChain: ITaskBlock[]): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          taskChain: taskChain,
        };

        return updatedContext;
      });
    },
    //#endregion
    /**
     * Thay đổi template hiện tại cho modal trong context.
     * @param modalTemplate - Tên template modal mới.
     */
    commitCurrentModalTemplate: (modalTemplate?: string): void => {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          currentModalTeamplate: modalTemplate,
        };

        return updatedContext;
      });
    },
  };
}

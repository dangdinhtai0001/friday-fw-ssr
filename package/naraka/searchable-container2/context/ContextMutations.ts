import { FilterCriteria, PaginationModel } from '../types';

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
import { Dispatch } from 'react';
import { ContextState, ContextApi, TaskBlock } from '../types'
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính
// - create... ==> Tính toán và thay đổi hoàn toàn giá trị  cuẩ thuộc tính
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó
// --------------------------------------------------------------------------------
export function mutations(context: ContextState, setContext: Dispatch<ContextState>): ContextApi {
  return {
    applyFilterInstance: (filterInstance: FilterCriteria[]): void => {
      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        filterInstance: filterInstance,
      };

      setContext(updatedContext);
    },
    createTaskChain: (taskChain: TaskBlock[]): void => {
      const queue = context.taskQueue;

      taskChain.forEach(task => {
        queue.enqueue(task);
      });

      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        taskQueue: queue,
      };

      setContext(updatedContext);
    },
    dequeueTaskChain: (): TaskBlock => {
      let queue = context.taskQueue;

      let task: TaskBlock = queue.dequeue();

      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        taskQueue: queue,
      };

      setContext(updatedContext);

      return task;
    },
    applyPaginationInstance: (paginationModel: PaginationModel): void => {
      const updatedContext = {
        ...context, // Giữ lại tất cả các thuộc tính khác
        paginationInstance: paginationModel,
      };

      setContext(updatedContext);
    }
  }
}
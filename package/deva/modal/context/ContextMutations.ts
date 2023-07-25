// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
import { Dispatch } from 'react';
import { ContextState, ContextApi } from '../types.d';
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính
// - create... ==> Tính toán và thay đổi hoàn toàn giá trị  cuẩ thuộc tính
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó
// --------------------------------------------------------------------------------
export function mutations(context: ContextState, setContext: Dispatch<React.SetStateAction<ContextState>>): ContextApi {
  return {
    commitOpen(open: boolean) {
      setContext((prevContext: ContextState) => {
        // Tạo một bản sao mới của prevContext để tránh thay đổi trực tiếp
        const updatedContext: ContextState = {
          ...prevContext,
          open: open
        };
        // Trả về context đã được cập nhật
        return updatedContext;
      });
    }
  };
}
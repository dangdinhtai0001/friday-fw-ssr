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

  };
}
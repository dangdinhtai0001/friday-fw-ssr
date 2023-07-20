// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
import { Dispatch } from 'react';
import { ContextState, ContextApi, DataFieldStatus } from '../types'
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính
// - create... ==> Tính toán và thay đổi hoàn toàn giá trị  cuẩ thuộc tính
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó
// --------------------------------------------------------------------------------
export function mutations(context: ContextState, setContext: Dispatch<React.SetStateAction<ContextState>>): ContextApi {
  return {
    /**
     * Tăng giá trị của submitCounter trong context và cập nhật context mới.
     * @returns {void}
     */
    increaseSubmitCounter(): void {
      setContext((prevContext: ContextState) => {
        // Tạo một bản sao mới của prevContext để tránh thay đổi trực tiếp
        const updatedContext: ContextState = {
          ...prevContext,
          // Tăng giá trị của submitCounter lên 1
          submitCounter: prevContext.submitCounter++
        };
        // Trả về context đã được cập nhật
        return updatedContext;
      });
    },
    /**
     * Áp dụng trạng thái vô hiệu hóa cho các trường (field) trong ngữ cảnh (context).
     * @param {DataFieldStatus} fieldStatus - Đối tượng chứa trạng thái vô hiệu hóa của các trường.
     * @returns {void}
     */
    applyFieldDisabled(fieldStatus: DataFieldStatus): void {
      setContext((prevContext: ContextState) => {
        // Tạo một bản sao của ngữ cảnh trước đó
        const updatedContext: ContextState = {
          ...prevContext,
          // Cập nhật trạng thái vô hiệu hóa của trường (fieldDisabled) bằng cách merge ngữ cảnh trước đó và trạng thái trường mới
          fieldDisabled: Object.assign({}, prevContext.fieldDisabled, fieldStatus)
        };
        return updatedContext;
      });
    },
    /**
     * Áp dụng trạng thái chỉ đọc cho các trường (field) trong ngữ cảnh (context).
     * @param {DataFieldStatus} fieldStatus - Đối tượng chứa trạng thái chỉ đọc của các trường.
     * @returns {void}
     */
    applyFieldReadOnly(fieldStatus: DataFieldStatus): void {
      setContext((prevContext: ContextState) => {
        // Tạo một bản sao của ngữ cảnh trước đó
        const updatedContext: ContextState = {
          ...prevContext,
          // Cập nhật trạng thái chỉ đọc của trường (fieldReadOnly) bằng cách merge ngữ cảnh trước đó và trạng thái trường mới
          fieldReadOnly: Object.assign({}, prevContext.fieldReadOnly, fieldStatus)
        };
        return updatedContext;
      });
    },
    /**
     * Áp dụng trạng thái ẩn cho các trường (field) trong ngữ cảnh (context).
     * @param {DataFieldStatus} fieldStatus - Đối tượng chứa trạng thái ẩn của các trường.
     * @returns {void}
     */
    applyFieldHidden(fieldStatus: DataFieldStatus): void {
      setContext((prevContext: ContextState) => {
        // Tạo một bản sao của ngữ cảnh trước đó
        const updatedContext: ContextState = {
          ...prevContext,
          // Cập nhật trạng thái ẩn của trường (fieldHidden) bằng cách merge ngữ cảnh trước đó và trạng thái trường mới
          fieldHidden: Object.assign({}, prevContext.fieldHidden, fieldStatus)
        };
        return updatedContext;
      });
    },
    applyFieldMessage(fields?: Record<string, { type: string, message: string }>): void {
      setContext((prevContext: ContextState) => {
        const updatedContext: ContextState = {
          ...prevContext,
          fieldMessage: fields ? Object.assign({}, prevContext.fieldMessage, fields) : {}
        };
        return updatedContext;
      });
    },
  };
}
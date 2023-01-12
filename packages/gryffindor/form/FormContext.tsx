import { Dispatch, createContext, useContext, useEffect, useMemo, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { FieldValues } from 'react-hook-form';
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState, FormStatus } from './Form.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const FormContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const FormContextProvider = <T extends FieldValues>(props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState<T>>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultValue = useMemo(() => {
        return { context, setContext }
    }, []);

    return (
        <FormContext.Provider value={defaultValue}>
            {props.children}
        </FormContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính 
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
// --------------------------------------------------------------------------------
function mutations<T extends FieldValues>(context: ContextState<T>, setContext: Dispatch<any>): ContextHelper<T> {
    return {
        /**
         * hàm cập nhật trạng thái của form
         * @param {FormStatus} newStatus Status mới của form 
         */
        commitStatus(newStatus: FormStatus): void {
            setContext((prevState: ContextState<T>) => {
                return {
                    ...prevState,
                    status: newStatus
                }
            });
        },
        /**
         * Hàm cập nhật trạng thái disable của các field 
         * @param field Tên field sẽ cập nhật lại trạng thái
         * @param status Trạng thái mới
         */
        refreshDisabled(field: string, status: boolean): void {
            setContext((prevState: ContextState<T>) => {
                let _disabled = { ...prevState.disabled, [field]: status };

                return {
                    ...prevState,
                    disabled: _disabled
                }
            });
        },
        /**
         * Hàm cập nhật trạng thái visible của các field 
         * @param field Tên field sẽ cập nhật lại trạng thái
         * @param status Trạng thái mới
         */
        refreshVisible(field: string, status: boolean): void {
            setContext((prevState: ContextState<T>) => {
                let _visible = { ...prevState.visible, [field]: status };

                return {
                    ...prevState,
                    visible: _visible
                }
            });
        },
        /**
         * hàm đếm số lần submit của form. Tăng lên 1 mỗi khi đc gọi đến 
         */
        increaseSubmitCount(): number {
            let newCount = -1;

            setContext((prevState: ContextState<T>) => {
                let currentCount = prevState.submitCount;
                newCount = currentCount ? currentCount + 1 : 0;

                return {
                    ...prevState,
                    submitCount: newCount
                }
            });

            return newCount;
        }
    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useFormContext = <T extends FieldValues>(): { context: ContextState<T>, helper: ContextHelper<T> } => {
    // lấy giá trị của context
    const { context, setContext } = useContext(FormContext)!;

    const helper: ContextHelper<T> = mutations(context, setContext);

    return { context, helper };
};

export { FormContextProvider, useFormContext };


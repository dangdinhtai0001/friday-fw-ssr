import { createContext, Dispatch, useContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState, FormStatus } from './Form.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const FormContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const FormContextProvider = (props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <FormContext.Provider value={{ context, setContext }}>
            {props.children}
        </FormContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính 
// - refresh... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
// --------------------------------------------------------------------------------
function mutations(context: ContextState, setContext: Dispatch<any>): ContextHelper {
    return {
        /**
         * hàm cập nhật trạng thái của form
         * @param {FormStatus} newStatus Status mới của form 
         */
        commitStatus(newStatus: FormStatus): void {
            setContext((prevState: ContextState) => {
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
            setContext((prevState: ContextState) => {
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
            setContext((prevState: ContextState) => {
                let _visible = { ...prevState.visible, [field]: status };

                return {
                    ...prevState,
                    visible: _visible
                }
            });
        }
    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useFormContext = () => {
    // lấy giá trị của context
    const { context, setContext } = useContext(FormContext)!;

    const helper = mutations(context, setContext);

    return { context, helper };
};

export { FormContextProvider, useFormContext };


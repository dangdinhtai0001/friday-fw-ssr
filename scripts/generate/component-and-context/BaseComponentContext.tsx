import { createContext, Dispatch, useContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextProviderProps, ContextProviderValue, ContextState } from './BaseComponent.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const BaseComponentContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const BaseComponentContextProvider = (props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BaseComponentContext.Provider value={{ context, setContext }}>
            {props.children}
        </BaseComponentContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính 
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
// --------------------------------------------------------------------------------
function mutations(context: ContextState, setContext: Dispatch<any>) {
    return {

    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useBaseComponentContext = () => {
    // lấy giá trị của context
    const { context, setContext } = useContext(BaseComponentContext)!;

    const helper = mutations(context, setContext);

    return { context, helper };
};

export { BaseComponentContextProvider, useBaseComponentContext };


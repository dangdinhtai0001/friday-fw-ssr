import { Dispatch, createContext, useContext, useEffect, useMemo, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState } from './Tabs.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const TabsContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const TabsContextProvider = <T extends unknown>(props: ContextProviderProps) => {
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
        <TabsContext.Provider value={defaultValue}>
            {props.children}
        </TabsContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính 
// - inrease/ decrease... ==>  Tăng/ giảm giá trị của các thuộc tính (Ví dụ: count,...)
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
// --------------------------------------------------------------------------------
function mutations<T>(context: ContextState<T>, setContext: Dispatch<any>): ContextHelper<T> {
    return {
        /**
         * hàm cập nhật giá trị actived id trong context
         * @param activedTabId : id của tab đc actived và cần đc update
         */
        commitActivedId(activedTabId: string | number | boolean): void {
            console.debug('actived id commited', activedTabId);

            setContext((prevState: ContextState<T>) => ({
                ...prevState,
                activedTabId: activedTabId,
            }));
        }
    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useTabsContext = <T extends unknown>(): { context: ContextState<T>, helper: ContextHelper<T> } => {
    // lấy giá trị của context
    const { context, setContext } = useContext(TabsContext)!;

    const helper: ContextHelper<T> = mutations(context, setContext);

    return { context, helper };
};

export { TabsContextProvider, useTabsContext };


import { createContext, Dispatch, useContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextProviderProps, ContextProviderValue, ContextState } from './Tabs.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const TabsContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const TabsContextProvider = (props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabsContext.Provider value={{ context, setContext }}>
            {props.children}
        </TabsContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// --------------------------------------------------------------------------------
function mutations(context: ContextState, setContext: Dispatch<any>) {
    return {
        /**
         * hàm cập nhật giá trị actived id trong context
         * @param activedTabId : id của tab đc actived và cần đc update
         */
        commitActivedId(activedTabId: string | number | boolean): void {
            console.debug('actived id commited', activedTabId);

            setContext((prevState: ContextState) => ({
                ...prevState,
                activedTabId: activedTabId,
            }));
        }
    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useTabsContext = () => {
    // lấy giá trị của context
    const { context, setContext } = useContext(TabsContext)!;

    const helper = mutations(context, setContext);

    return { context, helper };
};

export { TabsContextProvider, useTabsContext };


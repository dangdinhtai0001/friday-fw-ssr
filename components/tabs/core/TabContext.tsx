import { createContext, useContext, useState, useEffect } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextProviderValue, ContextProviderProps, ContextState, TabContextHook } from './interface';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const TabContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const TabContextProvider = (props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabContext.Provider value={{ context, setContext }}>
            {props.children}
        </TabContext.Provider>
    );
};

// ---------------------- || Định nghĩa hook || ---------------------- //
const useTabContext = (): TabContextHook => {
    // lấy giá trị của context
    const { context, setContext } = useContext(TabContext)!;

    // các hàm thay đổi giá trị trong context

    // --------------------------------------------------------------------------------

    // Hàm cập nhật selected tab
    const updateActiveKey = (key: string): void => {
        setContext((prevState: ContextState) => ({
            ...prevState,
            activeKey: key,
        }));
    }
    // --------------------------------------------------------------------------------

    return {
        context,
        setContext,
        // ----------------------
        updateActiveKey
    };
};

export { TabContextProvider, useTabContext };
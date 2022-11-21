import { createContext, useContext, useState, useEffect } from 'react';
// ================================================== || CONTEXT || ================================================== //

// ------------------------ || define interface || ------------------------
export interface ContextState { }

interface ContextProviderProps {
    initialState: ContextState;
    children: React.ReactElement;
}

interface ContextProviderValue {
    context: ContextState;
    setContext: any;
}

export interface TabContextHook extends ContextProviderValue { }

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
    // --------------------------------------------------------------------------------

    return {
        context,
        setContext,
    };
};

export { TabContextProvider, useTabContext };
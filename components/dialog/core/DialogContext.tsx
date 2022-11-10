import React, { useState, useContext, createContext, useEffect } from 'react';
// ================================================== || CONTEXT || ================================================== //

// ---------------------- || Define type/ interface || ---------------------- //
export interface ContextState {
    visible: boolean;
};

interface ContextValue {
    context: ContextState;
    setContext: React.Dispatch<any>
}

interface ContextProviderProps {
    initialState: ContextState;
    children?: React.ReactElement | React.ReactElement[];
}

// ---------------------- || Khởi tạo context || ---------------------- //
const DialogContext = createContext<ContextValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const DialogContextProvider = (props: ContextProviderProps) => {
    const { initialState, children } = props;

    const [context, setContext] = useState<ContextState>(initialState);

    useEffect(() => {
        return () => {
            setContext(initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <DialogContext.Provider value={{ context, setContext }}>{children}</DialogContext.Provider>;
}

// ---------------------- || Định nghĩa hook || ---------------------- //
const useDialogContext = () => {
    const { context, setContext } = useContext(DialogContext)!;

    // cập nhật thuộc tính visible
    const updateVisible = (visible: boolean) => {
        setContext((prevState: ContextState) => ({
            ...prevState,
            visible
        }));
    };

    return {
        context,
        setContext,
        updateVisible
    };
};

export { DialogContextProvider, useDialogContext }
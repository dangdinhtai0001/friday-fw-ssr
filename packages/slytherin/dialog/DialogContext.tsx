import { createContext, Dispatch, useContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextProviderProps, ContextProviderValue, ContextState } from './Dialog.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const DialogContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const DialogContextProvider = (props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DialogContext.Provider value={{ context, setContext }}>
            {props.children}
        </DialogContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// --------------------------------------------------------------------------------
function mutations(context: ContextState, setContext: Dispatch<any>) {
    return {
        commitOpened(opened: boolean): void {
            console.debug('opended commited', opened);

            setContext((prevState: ContextState) => ({
                ...prevState,
                opened: opened,
            }));
        }
    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useDialogContext = () => {
    // lấy giá trị của context
    const { context, setContext } = useContext(DialogContext)!;

    const helper = mutations(context, setContext);

    return { context, helper };
};

export { DialogContextProvider, useDialogContext };


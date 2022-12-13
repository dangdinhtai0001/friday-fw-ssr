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
        /**
         * Hàm cập nhật trạng thái của biến opened trong context, ===> nó sẽ thay đổi trạng thái open/close của dialog
         * @param opened 
         */
        commitOpened(opened: boolean): void {
            setContext((prevState: ContextState) => ({
                ...prevState,
                opened: opened,
            }));

            console.debug('opended commited', opened);
        },
        /**
         * Hàm thay đổi giá trị disable cho một action của dialog
         * @param key Key của action
         * @param disabled Trạng thái disabled mới
         */
        applyDisable(key: string, disabled: boolean): void {
            setContext((prevState: ContextState) => {
                let _actions = prevState.actions?.map(item => {
                    if (key === item.key) {
                        return { ...item, disabled: disabled }
                    }

                    return item;
                });

                return {
                    ...prevState,
                    actions: _actions,
                }
            });

            console.debug('disable applied', disabled);
        },
        /**
         * Hàm thay đổi giá trị visible cho một action của dialog
         * @param key Key của action
         * @param visible Trạng thái visible mới
         */
        applyVisible(key: string, visible: boolean): void {
            setContext((prevState: ContextState) => {
                let _actions = prevState.actions?.map(item => {
                    if (key === item.key) {
                        return { ...item, visible: visible }
                    }

                    return item;
                });

                return {
                    ...prevState,
                    actions: _actions,
                }
            });

            console.debug('visible applied', visible);
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


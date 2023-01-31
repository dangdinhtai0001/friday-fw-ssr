import { createContext, Dispatch, useContext, useEffect, useMemo, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState } from './TabbedDialog.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const TabbedDialogContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const TabbedDialogContextProvider = <T extends unknown>(props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState<T>>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultValue = useMemo(() => {
        return { context, setContext }
    }, [context]);

    return (
        <TabbedDialogContext.Provider value={defaultValue}>
            {props.children}
        </TabbedDialogContext.Provider>
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
         * Hàm cập nhật trạng thái của biến opened trong context, ===> nó sẽ thay đổi trạng thái open/close của dialog
         * @param opened 
         */
        commitOpened(opened: boolean): void {
            setContext((prevState: ContextState<T>) => ({
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
        applyDisableAction(key: string, disabled: boolean): void {
            setContext((prevState: ContextState<T>) => {
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
        applyVisibleAction(key: string, visible: boolean): void {
            setContext((prevState: ContextState<T>) => {
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
const useTabbedDialogContext = <T extends unknown>(): { context: ContextState<T>, helper: ContextHelper<T> } => {
    // lấy giá trị của context
    const { context, setContext } = useContext(TabbedDialogContext)!;

    const helper: ContextHelper<T> = mutations(context, setContext);

    return { context, helper };
};

export { TabbedDialogContextProvider, useTabbedDialogContext };


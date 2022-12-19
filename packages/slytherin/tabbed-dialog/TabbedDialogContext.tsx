import { createContext, Dispatch, useContext, useEffect, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ContextProviderProps, ContextProviderValue, ContextState } from './TabbedDialog.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const TabbedDialogContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const TabbedDialogContextProvider = (props: ContextProviderProps) => {
    const [context, setContext] = useState<ContextState>(props.initialState);

    useEffect(() => {
        return () => {
            setContext(props.initialState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabbedDialogContext.Provider value={{ context, setContext }}>
            {props.children}
        </TabbedDialogContext.Provider>
    );
};

// Định nghĩa các hàm thay đổi giá trị trong context (mutations)
// - commit... ==> Thay đổi toàn bộ giá trị của thuộc tính 
// - apply... ==> Thay đổi 1 phần giá trị của thuộc tính đó 
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
        },
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
const useTabbedDialogContext = () => {
    // lấy giá trị của context
    const { context, setContext } = useContext(TabbedDialogContext)!;

    const helper = mutations(context, setContext);

    return { context, helper };
};

export { TabbedDialogContextProvider, useTabbedDialogContext };


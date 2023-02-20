import { createContext, Dispatch, useContext, useEffect, useMemo, useState } from 'react';
// ------------------------ || define interface || ------------------------
import { ProcessingRow } from './common-types.d';
import { ContextHelper, ContextProviderProps, ContextProviderValue, ContextState } from './Grid.d';
// ================================================== || CONTEXT || ================================================== //


// ---------------------- || Khởi tạo context || ---------------------- //
const GridContext = createContext<ContextProviderValue | null>(null);

// ---------------------- || Định nghĩa context provider || ---------------------- //
const GridContextProvider = <T extends unknown>(props: ContextProviderProps) => {
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
        <GridContext.Provider value={defaultValue}>
            {props.children}
        </GridContext.Provider>
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
         * Hàm cập nhật toàn bộ giá trị processingRow của grid
         * @param processingRow 
         */
        commitProcessingRow(processingRow: ProcessingRow): void {
            setContext((prevState: ContextState<T>) => {
                return {
                    ...prevState,
                    processingRow: processingRow
                }
            });
        },
        /**
         * Hàm cập nhật trạng thái open của grid modal
         * @param open 
         */
        applyPopupDef_Open(open: boolean): void {
            setContext((prevState: ContextState<T>) => {
                return {
                    ...prevState,
                    popupDef: {
                        ...prevState.popupDef,
                        open: open
                    }
                }
            });
        },
        /**
         * Hàm cập nhật giá trị title của grid modal
         * @param title 
         */
        applyPopupDef_Title(title: string): void {
            setContext((prevState: ContextState<T>) => {
                return {
                    ...prevState,
                    popupDef: {
                        ...prevState.popupDef,
                        title: title
                    }
                }
            });
        }
    }
}
// --------------------------------------------------------------------------------


// ---------------------- || Định nghĩa hook || ---------------------- //
const useGridContext = <T extends unknown>(): { context: ContextState<T>, helper: ContextHelper<T> } => {
    // lấy giá trị của context
    const { context, setContext } = useContext(GridContext)!;

    const helper: ContextHelper<T> = mutations(context, setContext);

    return { context, helper };
};

export { GridContextProvider, useGridContext };


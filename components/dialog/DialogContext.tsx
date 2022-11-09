import { createContext, useContext, useState, useEffect } from 'react';
// ================================================== || CONTEXT || ================================================== //

// ------------------------ || define interface || ------------------------
export interface DialogContextState {}

interface ContextProviderProps {
  initialState: DialogContextState;
  children: React.ReactElement;
}

interface ContextProviderValue {
  context: DialogContextState;
  setContext: any;
}

export interface DialogContextHook extends ContextProviderValue {}

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

// ---------------------- || Định nghĩa hook || ---------------------- //
const useDialogContext = (): DialogContextHook => {
  // lấy giá trị của context
  const { context, setContext } = useContext(DialogContext)!;

  // các hàm thay đổi giá trị trong context

  // --------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------

  return {
    context,
    setContext,
  };
};

export { DialogContextProvider, useDialogContext };

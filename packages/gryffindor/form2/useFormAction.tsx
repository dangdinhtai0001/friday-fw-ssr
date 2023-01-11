import { FormActionHooks, FormActionProps, RefreshRulesMode } from "./Form.d";

export function useFormAction<T>(props: FormActionProps<T>): FormActionHooks<T> {

    const { onMounted } = props;

    const handleOnMounted = async () => {
        // Chuyển trạng thái của form về thành mounted

        // Gọi trigger onMounted của props
        if (onMounted?.constructor.name === 'AsyncFunction') {
            await onMounted?.();
        } else {
            onMounted?.();
        }

        // apply rule
    };
    const handleOnValidate = async (values: T) => { };
    const handleOnSubmitSuccess = async (values: T) => { };
    const handleOnSubmitError = async (values: T) => { };
    const handleOnChange = async (values: T, name: string) => { };
    const handleOnRefreshRule = async (currentMode: RefreshRulesMode) => { };

    return {
        handleOnMounted,
        handleOnValidate,
        handleOnSubmitSuccess,
        handleOnSubmitError,
        handleOnChange,
        handleOnRefreshRule
    };
}

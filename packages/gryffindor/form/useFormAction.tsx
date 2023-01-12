// react imports
// 3rd imports
// local imports
import { ControllerRenderProps, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';
// UnPackAsyncDefaultValues
import { FormActionHooks, FormProps, RefreshRulesMode } from './Form.d';
import { useFormContext } from './FormContext';

const useFormAction = <T extends FieldValues>(props: FormProps<T>, useFormMethods: UseFormReturn<any>): FormActionHooks<T> => {
    const {
        general,
        refreshRuleConfig,
        refreshRule,
        // -------------
        onMounted,
        onValidate,
        onSubmitSuccess,
        onSubmitError,
        onChange
    } = props;
    const { context, helper } = useFormContext<T>();

    const { getValues, setValue } = useFormMethods;

    const handleOnMounted = async () => {
        // Chuyển trạng thái của form về thành mounted
        helper.commitStatus('mounted');

        // Gọi trigger onMounted của props
        await onMounted?.(context, helper);

        handleOnRefreshRule('onMounted');
    };
    const handleOnValidate = async (values: T): Promise<{ values: T, errors: FieldErrors }> => {
        let _validations = {
            values: values,
            errors: {}
        };

        if (general?.waitForValidate) {
            // Chuyển trạng thái của form về thành validating
            helper.commitStatus('validating');
        }

        if (onValidate)
            _validations = await onValidate?.(values, context, helper);

        return _validations;
    };
    const handleOnSubmitSuccess = async (values: T) => {
        // ghi trạng thái của form vào context
        helper.commitStatus('submiting');

        // tăng số lần submit lên
        helper.increaseSubmitCount();

        // Gọi hàm onSubmit success trong cấu hình
        await onSubmitSuccess?.(values, context, helper);

        // ghi trạng thái của form vào context
        helper.commitStatus('idle');
    };
    const handleOnSubmitError = async (errors: Object) => {
        // ghi trạng thái của form vào context
        helper.commitStatus('submiting');

        // tăng số lần submit lên
        helper.increaseSubmitCount();

        // Gọi hàm onSubmit success trong cấu hình
        await onSubmitError?.(errors, context, helper);

        // ghi trạng thái của form vào context
        helper.commitStatus('idle');
    };
    const handleOnChange = async (value: any, field: ControllerRenderProps) => {
        let transformedValue = value;

        // https://react-hook-form.com/api/usecontroller/controller

        /**
         * It should be assigned to the onChange prop of the input and value should not be undefined.
         */
        // Kiểm tra xem value này có phải lấy từ đối tượng input hay ko , nếu đúng thì set giá trị của transformedValue
        if (value.nativeEvent instanceof Event) {
            transformedValue = value.target.value;
        }

        // Lấy giá trị của form
        let allValues = getValues();

        // Sự kiện onChange của RHF
        field.onChange(transformedValue);

        // Gọi sự kiện thay đổi
        await onChange?.({ value: transformedValue, fieldName: field.name, allValues, context, helper });
    };
    const handleOnRefreshRule = async (currentMode: RefreshRulesMode) => {
        // lấy ra danh sách các rule cần apply ở mode 'onMounted'
        let _rules = refreshRuleConfig?.[currentMode];
        // thực hiện rule
        refreshRule?.(_rules!, currentMode, context, helper);
    };

    return {
        handleOnMounted,
        handleOnValidate,
        handleOnSubmitSuccess,
        handleOnSubmitError,
        handleOnChange,
        handleOnRefreshRule
    };
}

export default useFormAction;
// react imports
import * as React from 'react';
// 3rd imports
import { uniqueId } from 'lodash';
import { Controller, Resolver, UseFormProps, useForm } from "react-hook-form";
// local imports
import { GridItem } from '@packages/slytherin/grid-layout';
import { ContextHelper, ContextState, FieldDef, FormProps, RefreshRulesMode } from "./Form.d";
import FormField from './FormField';

let mounted = false;
const useBaseForm = (props: FormProps, context: ContextState, helper: ContextHelper) => {

    const {
        refreshRuleConfig,
        refreshRule,
        general,
        onMounted,
        onValidate,
        onSubmitSuccess,
        onSubmitError,
        onChange
    } = props;

    const rhfUseFormProps: UseFormProps = React.useMemo((): UseFormProps => {
        // Các giá trị lấy trực tiếp từ props
        let _props = { ...props.general, mode: general?.formMode, context: 'context' };

        // Các giá trị phải tổng hợp lại

        // initial value -------
        _props.defaultValues = context.initialValues;

        // form resolver -------
        const _resolver: Resolver<any> = async (values) => {
            return await handleOnValidate(values);
        };

        _props.resolver = _resolver;

        return _props;
    }, []);

    const useFormMethods = useForm<any>(rhfUseFormProps);
    const { control, handleSubmit, getValues, setValue } = useFormMethods;

    /**
     * Hàm thực thi khi có sự kiện mounted
     */
    const handleOnMounted = async () => {
        // Chuyển trạng thái của form về thành mounted
        helper.commitStatus('mounted');

        // Gọi trigger onMounted của props
        await onMounted?.(context, helper);

        handleOnRefreshRule('onMounted');
    };
    /**
     * Hàm thực thi khi có sự kiện validate
     * @param values Giá trị hiện tại cần validate
     * @returns Kết quả validate
     */
    const handleOnValidate = async (values: any) => {
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

        if (general?.waitForValidate) {
            // Chuyển trạng thái của form về thành idle
            helper.commitStatus('idle');
        }

        return _validations;
    }
    /**
     * Hàm thực thi khi có sự kiện submit success
     * @param values 
     */
    const handleOnSubmitSuccess = async (values: any) => {
        // ghi trạng thái của form vào context
        helper.commitStatus('submiting');

        // Gọi hàm onSubmit success trong cấu hình
        await onSubmitSuccess?.(values, context, helper);

        // ghi trạng thái của form vào context
        helper.commitStatus('idle');
    };
    /**
     * Hàm thực thi khi có sự kiện submit error
     * @param values 
     */
    const handleOnSubmitError = async (values: any) => {
        // ghi trạng thái của form vào context
        helper.commitStatus('submiting');

        // Gọi hàm onSubmit success trong cấu hình
        await onSubmitError?.(getValues(), values, context, helper);

        // ghi trạng thái của form vào context
        helper.commitStatus('idle');
    };

    const handleOnSubmit = handleSubmit(handleOnSubmitSuccess, handleOnSubmitError);

    const handleOnChange = async (value: any, name: string) => {
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

        /**
         * This prop update formState and you should avoid manually invoke setValue or other API related to field update.
         */
        setValue(name, transformedValue);

        // Gọi sự kiện thay đổi
        await onChange?.({ value: transformedValue, allValues, fieldName: name, context, helper });
    }
    /**
     * Hàm thực thi khi cần thực hiện rules. Sẽ chỉ thực hiện theo cấu hình tương ứng
     * @param currentMode Mode yêu cầu thực hiện
     */
    const handleOnRefreshRule = (currentMode: RefreshRulesMode) => {
        // lấy ra danh sách các rule cần apply ở mode 'onMounted'
        let _rules = refreshRuleConfig?.[currentMode];
        // thực hiện rule
        refreshRule?.(_rules!, currentMode, context, helper);
    };

    /**
     * Sự kiện diễn ra khi mount form
     */
    React.useEffect(() => {
        let ignore = false;

        async function handleOnMountForm() {
            await handleOnMounted();
        };

        if (!ignore && !mounted) {
            handleOnMountForm();
        }

        mounted = true;
        return () => {
            ignore = true;
            mounted = false;
        }
    }, []);

    /**
     * Hàm render form field control
     * @param _field : Cấu hình cụ thể của 1 field
     * @param rhfHook : Các thuộc tính hỗ trợ của useForm của RHF
     * @returns 
     */
    const renderFormField = (_field: FieldDef): JSX.Element => {
        const onRenderController = React.useCallback(
            ({ field }: { field: any }) => {
                return React.createElement(
                    _field.component,
                    {
                        ..._field.componentParams,
                        ...field,
                        onChange: async (values: any) => {
                            await handleOnChange(values, _field.name)
                        }
                    }
                );
            }, []);

        return (
            <Controller
                render={onRenderController}
                name={_field.name}
                control={control}
            />
        )
    }

    /**
     * Hàm render tất cả các form field và đặt vào trong layout 
     * @param props 
     * @param rhfHook 
     * @returns 
     */
    const generateGridItemFromFields = () => {
        const { fields, formLayout } = props;
        const { field } = formLayout!;

        return fields.map((_field, index) => {
            return (
                <GridItem key={uniqueId(`__fd-${index}-`)}>
                    <FormField
                        {...field}
                        label={_field.label ? _field.label : _field.name}
                        fieldDef={_field}
                    >
                        {renderFormField(_field)}
                    </FormField>
                </GridItem>
            );
        });
    };

    return {
        handleOnRefreshRule,
        generateGridItemFromFields,
        handleOnMounted,
        handleOnValidate,
        handleOnSubmit,
        useFormMethods,
    };
}

export default useBaseForm;
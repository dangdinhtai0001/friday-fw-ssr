import * as React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContainerProviderProps, ContextState } from './types';
import { useForm, FormProvider, UseFormProps, FieldValues } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

// 'DeepPartial<T> | AsyncDefaultValues<T> | undefined'

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps, fieldRefs: React.MutableRefObject<{ [key: string]: any; }>): ContextState => {

  let fieldDisabled: { [key: string]: boolean } = {};
  let fieldReadOnly: { [key: string]: boolean } = {};
  let fieldHidden: { [key: string]: boolean } = {};

  props.fieldDefs.forEach(e => {
    fieldDisabled[e.name] = (e.disabled !== undefined) ? e.disabled : false;
    fieldReadOnly[e.name] = (e.readOnly !== undefined) ? e.readOnly : false;
    fieldHidden[e.name] = (e.isHidden !== undefined) ? e.isHidden : false;
  });

  return {
    formId: uuidv4(),
    fieldDefs: props.fieldDefs,
    fieldRefs: fieldRefs,
    submitCounter: 0,
    fieldDisabled: fieldDisabled,
    fieldReadOnly: fieldReadOnly,
    fieldHidden: fieldHidden,
    // ------------------------------------
    onValueChange: props.onValueChange,
    afterValueChange: props.afterValueChange,
    onSubmitSuccess: props.onSubmitSuccess,
    onSubmitError: props.onSubmitError,
  };
}

const createReactHookFormProps = (props: ContainerProviderProps): UseFormProps => {
  let { getDefaultValues, fieldDefs } = props;

  let defaultValues: FieldValues | Promise<FieldValues>;


  // tổng hợp giá trị default values. nếu có khai báo hàm getDefaultValues thì sử dụng nó, còn không thì trích xuất ra từ cấu hình field def
  if (getDefaultValues) {
    defaultValues = getDefaultValues;
  } else {
    defaultValues = fieldDefs.reduce((result, fieldDef) => {
      return {
        ...result,
        [fieldDef.name]: fieldDef.initialValue
      };
    }, {});
  }


  return {
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    delayError: 1,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    defaultValues: defaultValues,
    // TODO: Chuyển thành đọc từ props
    resolver: async (values, context, options) => {
      console.log("validate ", values, options);
      let errors: any = {};

      if (values.foo === 'bar') {
        errors.foo = {
          type: "custom",
          message: "This is custom error message."
        }
      }
      return {
        values: values,
        errors: errors
      }
    }
  };
}

export default function ContainerProvider(props: ContainerProviderProps) {
  const fieldRefs = React.useRef<{ [key: string]: any }>({});

  let initialState: ContextState = createDefaultContextStateValue(props, fieldRefs);
  let rhfProps: UseFormProps = createReactHookFormProps(props);

  const methods = useForm(rhfProps);

  return (
    <>
      <ContainerContextProvider initialState={initialState}>
        <FormProvider {...methods} >
          <Container {...initialState}></Container>
        </FormProvider>
      </ContainerContextProvider>
    </>
  );
}

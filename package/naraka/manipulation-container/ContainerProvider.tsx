import React, { forwardRef, useRef, useImperativeHandle, Ref } from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContainerProviderProps, ContextState, ContainerRef } from './types';
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
    formId: props.formId ? props.formId : uuidv4(),
    fieldDefs: props.fieldDefs,
    fieldRefs: fieldRefs,
    submitCounter: 0,
    fieldDisabled: fieldDisabled,
    fieldReadOnly: fieldReadOnly,
    fieldHidden: fieldHidden,
    fieldMessage: {},
    defaultFieldRaito: "30% 70%",
    defaultFieldLabelAlign: "left",
    dataBlockComponent: props.dataBlockComponent,
    defaultCols: props.defaultCols ? props.defaultCols : 3,
    // ------------------------------------
    onValueChange: props.onValueChange,
    afterValueChange: props.afterValueChange,
    onSubmitSuccess: props.onSubmitSuccess,
    onSubmitError: props.onSubmitError,
    onMounted: props.onMounted,
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
    mode: props.rhfMode ? props.rhfMode : 'onSubmit',
    reValidateMode: props.reValidateMode ? props.reValidateMode : 'onChange',
    criteriaMode: props.criteriaMode ? props.criteriaMode : 'all',
    shouldFocusError: true,
    delayError: 1,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    defaultValues: defaultValues,
    resolver: props.resolver
  };
}

const ContainerProvider = forwardRef<ContainerRef, ContainerProviderProps>((props, ref: Ref<ContainerRef>) => {
  const fieldRefs = React.useRef<{ [key: string]: any }>({});

  let initialState: ContextState = createDefaultContextStateValue(props, fieldRefs);
  let rhfProps: UseFormProps = createReactHookFormProps(props);

  const methods = useForm(rhfProps);

  return (
    <ContainerContextProvider initialState={initialState}>
      <FormProvider {...methods} >
        <Container {...initialState} ref={ref}></Container>
      </FormProvider>
    </ContainerContextProvider>
  );
});

export default ContainerProvider;


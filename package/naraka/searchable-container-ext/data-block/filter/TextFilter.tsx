import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';

import { ITextFilterProps, ITextFilterRef, IFilterModel } from './types.d';
import { TextOperators, CombinationOperators } from '@/package/naraka/searchable-container-ext/data-block/types.d'

import FormContainer from '@/package/naraka/manipulation-container';
import {
  ContainerRef as FormmRef, FieldDef, ContainerProviderProps,
  ContextState as FormContextState, ContextApi as FormContextApi
} from '@/package/naraka/manipulation-container/types';

import DefaultDataBlock from '@/package/naraka/manipulation-container-ext'

import SelectWrapper, { ISelectWrapperProps } from '@/package/deva/select';
import InputWrapper, { IInputWrapperProps } from '@/package/deva/input';
import RadioGroup, { IRadioGroupProps } from '@/package/deva/radio-group';
import Divider, { IDividerProps } from '@/package/deva/divider';
import ButtonWrapper from '@/package/deva/button/ButtonWrapper';

import { StyledFilterContainer, StyledFilterActionContainer } from './StyledElements';

function TextFilter(props: ITextFilterProps, ref: ForwardedRef<ITextFilterRef>) {

  const formRef = useRef<FormmRef>(null);

  useImperativeHandle(ref, () => {
    return {}
  }, []);

  const handleOnSubmitSuccess = (data: any) => {
    const { first_value, first_operator, second_value, second_operator, combination_operator } = data as IFilterModel;
    console.log(data);
  }

  return (
    <StyledFilterContainer className='styled-filter-container'>
      <FormContainer
        fieldDefs={fieldDefs}
        dataBlockComponent={DefaultDataBlock}
        onSubmitSuccess={handleOnSubmitSuccess}
        onSubmitError={(errors) => { }}
        defaultCols={1}
        afterValueChange={afterValueChange}
        ref={formRef}
      />
      {/* <Divider /> */}
      <StyledFilterActionContainer className='styled-filter-action-container'>
        {/* TODO: sử dụng i18n ở đây */}
        <ButtonWrapper onClick={() => formRef.current?.submitForm()}>Áp dụng</ButtonWrapper>
        <ButtonWrapper onClick={() => formRef.current?.resetFormValues()}>Xóa</ButtonWrapper>
      </StyledFilterActionContainer>
    </StyledFilterContainer>
  );
};

const afterValueChange = (values: IFilterModel, context: FormContextState, contextApi: FormContextApi) => {
  const { first_value } = values;

  if (first_value !== '') {
    contextApi.applyFieldHidden({
      combination_operator: false,
      second_operator: false,
      second_value: false
    });
  } else {
    contextApi.applyFieldHidden({
      combination_operator: true,
      second_operator: true,
      second_value: true
    });
  }
}

const fieldDefs: FieldDef<any>[] = [
  {
    name: "first_operator",
    initialValue: "EQUALS",
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: "equals", value: 'EQUALS' },
        { label: "not equals", value: "NOT_EQUALS" },
        { label: "contains", value: "CONTAINS" },
        { label: "not contains", value: "NOT_CONTAINS" },
        { label: "starts with", value: "STARTS_WITH" },
        { label: "ends with", value: "ENDS_WITH" },
      ],
      multiple: false,
      popperClassName: 'ag-custom-component-popup'
    } as ISelectWrapperProps<TextOperators, false>
  },
  {
    name: "first_value",
    initialValue: "",
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps
  },
  {
    name: "combination_operator",
    initialValue: "AND",
    isHidden: true,
    component: RadioGroup,
    componentParams: {
      options: [
        { label: 'And', value: 'AND', xs: 6 },
        { label: 'Or', value: 'OR', xs: 6 },
      ],
    } as IRadioGroupProps<CombinationOperators>
  },
  {
    name: "second_operator",
    initialValue: "EQUALS",
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: "equals", value: "EQUALS" },
        { label: "not equals", value: "NOT_EQUALS" },
        { label: "contains", value: "CONTAINS" },
        { label: "not contains", value: "NOT_CONTAINS" },
        { label: "starts with", value: "STARTS_WITH" },
        { label: "ends with", value: "ENDS_WITH" },
      ],
      multiple: false,
      // muốn dùng popper trên grid thì phải có cái này: ref: https://www.ag-grid.com/react-data-grid/component-date/
      popperClassName: 'ag-custom-component-popup'
    } as ISelectWrapperProps<TextOperators, false>
  },
  {
    name: "second_value",
    initialValue: "",
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps
  }
];

export default forwardRef(TextFilter);

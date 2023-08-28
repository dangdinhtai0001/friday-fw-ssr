import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';

import { ITextFilterProps, ITextFilterRef, IFilterModel } from './types.d';

import FormContainer from '@/package/naraka/manipulation-container';
import {
  ContainerRef as FormmRef, FieldDef, ContainerProviderProps,
  ContextState as FormContextState, ContextApi as FormContextApi
} from '@/package/naraka/manipulation-container/types';

import DefaultDataBlock from '@/package/naraka/manipulation-container-ext'

import SelectWrapper, { ISelectWrapperProps } from '@/package/deva/select';
import InputWrapper, { IInputWrapperProps } from '@/package/deva/input';
import RadioGroup, { IRadioGroupProps } from '@/package/deva/radio-group';
import ButtonWrapper from '@/package/deva/button/ButtonWrapper';

import { StyledFilterContainer } from './StyledElements';

function TextFilter(props: ITextFilterProps, ref: ForwardedRef<ITextFilterRef>) {

  const formRef = useRef<FormmRef>(null);

  useImperativeHandle(ref, () => {
    return {}
  }, []);

  return (
    <StyledFilterContainer className='styled-filter-container'>
      <FormContainer
        fieldDefs={fieldDefs}
        dataBlockComponent={DefaultDataBlock}
        onSubmitSuccess={(data) => { }}
        onSubmitError={(errors) => { }}
        defaultCols={1}
        afterValueChange={afterValueChange}
        ref={formRef}
      />
    </StyledFilterContainer>
  );
};

const afterValueChange = (values: IFilterModel, context: FormContextState, contextApi: FormContextApi) => {
  const { first_value } = values;

  console.log(values);

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
    initialValue: "",
    component: SelectWrapper,
    componentParams: {
      className: 'ag-custom-component-popup',
      itemDefs: [
        { label: "equals", value: "EQUALS" },
        { label: "not equals", value: "NOT_EQUALS" },
        { label: "contains", value: "CONTAINS" },
        { label: "not contains", value: "NOT_CONTAINS" },
        { label: "starts with", value: "STARTS_WITH" },
        { label: "ends with", value: "ENDS_WITH" },
        { label: "none", value: "" },
      ],
      multiple: false,
      popperClassName: 'ag-custom-component-popup'
    } as ISelectWrapperProps<any, false>
  },
  {
    name: "first_value",
    initialValue: "",
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps
  },
  // combination_operator
  {
    name: "combination_operator",
    initialValue: "AND",
    isHidden: true,
    component: RadioGroup,
    componentParams: {
      options: [
        { label: 'And', value: '&', xs: 6 },
        { label: 'Or', value: '||', xs: 6 },
      ],
    } as IRadioGroupProps
  },
  {
    name: "second_operator",
    initialValue: "",
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: "equals", value: "EQUALS" },
        { label: "not equals", value: "NOT_EQUALS" },
        { label: "contains", value: "CONTAINS" },
        { label: "not contains", value: "NOT_CONTAINS" },
        { label: "starts with", value: "STARTS_WITH" },
        { label: "ends with", value: "ENDS_WITH" },
        { label: "none", value: "" },
      ],
      multiple: false,
      // muốn dùng popper trên grid thì phải có cái này: ref: 
      popperClassName: 'ag-custom-component-popup'
    } as ISelectWrapperProps<any, false>
  },
  {
    name: "second_value",
    initialValue: "",
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps
  }
];

export default forwardRef(TextFilter);

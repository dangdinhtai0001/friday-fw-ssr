import { useRef } from 'react';
import FormContainer from '@/package/naraka/manipulation-container';
import { ContainerRef as FormmRef, FieldDef, ContainerProviderProps, ContextState, ContextApi } from '@/package/naraka/manipulation-container/types';

import DefaultDataBlock from '@/package/naraka/manipulation-container-ext'

import SelectWrapper, { ISelectWrapperProps } from '@/package/deva/select';
import InputWrapper, { IInputWrapperProps } from '@/package/deva/input';
import ButtonWrapper from '@/package/deva/button/ButtonWrapper';

export interface IManipulationProps {
}

export interface IFormValue {
  first_operator: string;
  first_value: string;
  combination_operator: string;
  second_operator: string;
  second_value: string;
}

const fieldDefs: FieldDef<any>[] = [
  {
    name: "first_operator",
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
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: "And", value: "AND" },
        { label: "Or", value: "OR" },
      ],
      multiple: false,
    } as ISelectWrapperProps<('AND' | 'OR'), false>
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
    } as ISelectWrapperProps<any, false>
  },
  {
    name: "second_value",
    initialValue: "",
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps
  }
];


const afterValueChange = (values: IFormValue, context: ContextState, contextApi: ContextApi) => {
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


export default function Manipulation(props: IManipulationProps) {
  const formRef = useRef<FormmRef>(null);
  return (<>
    <FormContainer
      fieldDefs={fieldDefs}
      dataBlockComponent={DefaultDataBlock}
      onSubmitSuccess={(data) => { }}
      onSubmitError={(errors) => { }}
      defaultCols={1}
      afterValueChange={afterValueChange}
      ref={formRef}
    />
    <ButtonWrapper>Apply</ButtonWrapper>
    <ButtonWrapper>Clear</ButtonWrapper>
  </>)
}

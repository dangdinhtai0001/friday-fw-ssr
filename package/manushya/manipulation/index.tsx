import { useRef } from 'react';
import FormContainer from '@/package/naraka/form-container';
import {
  ContainerRef as FormmRef,
  FieldDef,
  ContextState,
  ContextApi,
} from '@/package/naraka/form-container/types';

import DefaultDataBlock from '@/package/naraka/form-container-ext';

import SelectWrapper, {
  ISelectWrapperProps,
} from '@/package/deva/select';
import InputWrapper, {
  IInputWrapperProps,
} from '@/package/deva/input';
import RadioGroup, {
  IRadioGroupProps,
} from '@/package/deva/radio-group';
import ButtonWrapper from '@/package/deva/button/ButtonWrapper';

export interface IManipulationProps {}

export interface IFormValue {
  first_operator: string;
  first_value: string;
  combination_operator: string;
  second_operator: string;
  second_value: string;
}

const fieldDefs: FieldDef<any>[] = [
  {
    name: 'first_operator',
    initialValue: '',
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: 'equals', value: 'EQUALS' },
        { label: 'not equals', value: 'NOT_EQUALS' },
        { label: 'contains', value: 'CONTAINS' },
        { label: 'not contains', value: 'NOT_CONTAINS' },
        { label: 'starts with', value: 'STARTS_WITH' },
        { label: 'ends with', value: 'ENDS_WITH' },
        { label: 'none', value: '' },
      ],
      multiple: false,
    } as ISelectWrapperProps<any, false>,
  },
  {
    name: 'first_value',
    initialValue: '',
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps<string>,
  },
  // combination_operator
  {
    name: 'combination_operator',
    initialValue: 'AND',
    isHidden: true,
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: 'And', value: 'AND' },
        { label: 'Or', value: 'OR' },
      ],
      multiple: false,
    } as ISelectWrapperProps<'AND' | 'OR', false>,
  },
  {
    name: 'combination_operator2',
    initialValue: 'AND',
    component: RadioGroup,
    componentParams: {
      columns: 12,
      options: [
        { label: 'AND', value: '&', xs: 12 },
        { label: 'Or 1', value: '||' },
        { label: 'Or 2', value: '||' },
        { label: 'Or 3', value: '||' },
      ],
    } as IRadioGroupProps<string>,
  },
  {
    name: 'second_operator',
    initialValue: '',
    component: SelectWrapper,
    componentParams: {
      itemDefs: [
        { label: 'equals', value: 'EQUALS' },
        { label: 'not equals', value: 'NOT_EQUALS' },
        { label: 'contains', value: 'CONTAINS' },
        { label: 'not contains', value: 'NOT_CONTAINS' },
        { label: 'starts with', value: 'STARTS_WITH' },
        { label: 'ends with', value: 'ENDS_WITH' },
        { label: 'none', value: '' },
      ],
      multiple: false,
    } as ISelectWrapperProps<any, false>,
  },
  {
    name: 'second_value',
    initialValue: '',
    component: InputWrapper,
    componentParams: {} as IInputWrapperProps<string>,
  },
];

const afterValueChange = (
  values: IFormValue,
  context: ContextState,
  contextApi: ContextApi
) => {
  const { first_value } = values;

  console.log(values);

  if (first_value !== '') {
    contextApi.applyFieldHidden({
      combination_operator: false,
      second_operator: false,
      second_value: false,
    });
  } else {
    contextApi.applyFieldHidden({
      combination_operator: true,
      second_operator: true,
      second_value: true,
    });
  }
};

const onMounted = (context: ContextState) => {
  const { fieldRefs } = context;
  const el = fieldRefs.current['first_operator'];

  el.classList.add('class-4', 'class-5', 'class-6');

  console.log(el);
};

export default function Manipulation(props: IManipulationProps) {
  const formRef = useRef<FormmRef>(null);
  return (
    <>
      <FormContainer
        fieldDefs={fieldDefs}
        dataBlockComponent={DefaultDataBlock}
        onSubmitSuccess={data => {}}
        onSubmitError={errors => {}}
        defaultCols={1}
        afterValueChange={afterValueChange}
        onMounted={onMounted}
        ref={formRef}
      />
      <ButtonWrapper>Apply</ButtonWrapper>
      <ButtonWrapper>Clear</ButtonWrapper>
    </>
  );
}

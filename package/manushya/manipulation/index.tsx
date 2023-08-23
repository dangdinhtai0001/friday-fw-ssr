import { useRef } from 'react';
import FormContainer from '@/package/naraka/manipulation-container';
import { ContainerRef as FormmRef, FieldDef, ContainerProviderProps } from '@/package/naraka/manipulation-container/types';

import DefaultDataBlock from '@/package/naraka/manipulation-container-ext'

import SelectWrapper, { ISelectWrapperProps } from '@/package/deva/select';
import InputWrapper, { IInputWrapperProps } from '@/package/deva/input';

export interface IManipulationProps {
}

const fieldDefs: FieldDef<any>[] = [
  {
    name: "first_condition",
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
  }
];


export default function Manipulation(props: IManipulationProps) {
  const formRef = useRef<FormmRef>(null);
  return (<>
    <FormContainer
      fieldDefs={fieldDefs}
      dataBlockComponent={DefaultDataBlock}
      onSubmitSuccess={(data) => { }}
      onSubmitError={(errors) => { }}
      defaultCols={1}
      ref={formRef}
    />

  </>)
}

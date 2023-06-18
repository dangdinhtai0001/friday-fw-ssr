import * as React from 'react';
import { ContainerProvider } from '@/package/naraka/manipulation-container';
import { ContainerProviderProps } from '@/package/naraka/manipulation-container/types';
import Input from '@mui/base/Input';


export interface IManipulationProps {
}

const containerProps: ContainerProviderProps = {
  fieldDefs: [
    {
      name: 'foo',
      label: 'foo lbl',
      initialValue: 'foo',
      component: Input,
      componentParams: { type: 'text', placeholder: 'foo' }
    },
    {
      name: 'first_name',
      label: 'first_name lbl',
      initialValue: '',
      component: Input,
      componentParams: { type: 'text', placeholder: 'first_name' }
    },
    {
      name: 'last_name',
      label: 'last_name lbl',
      initialValue: '',
      component: Input,
      componentParams: { type: 'text', placeholder: 'last_name' }
    },
    {
      name: 'age',
      initialValue: '',
      component: Input,
      componentParams: { type: 'number', placeholder: '1' }
    },
  ],
  onValueChange(props) {
    console.log("Trigger on change", props.fieldName, props.changedValue);
  },
}

export default function Manipulation(props: IManipulationProps) {



  return (
    <div>
      Manipulation page
      <ContainerProvider {...containerProps}></ContainerProvider>
    </div>
  );
}

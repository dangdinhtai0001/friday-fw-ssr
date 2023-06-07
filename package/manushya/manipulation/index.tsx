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
      initialValue: '',
      component: Input,
      componentParams: { type: 'text', placeholder: 'foo' }
    }
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

import * as React from 'react';
import { ContainerProvider } from '@/package/naraka/manipulation-container';
import { ContainerProviderProps } from '@/package/naraka/manipulation-container/types';
import Input from '@mui/base/Input';
import CustomField from './CustomField';


export interface IManipulationProps {
}

const containerProps: ContainerProviderProps = {
  fieldDefs: [
    {
      name: 'foo',
      label: 'foo lbl',
      initialValue: 'foo',
      required: true,
      component: Input,
      componentParams: { type: 'text', placeholder: 'foo' }
    },
    {
      name: 'custom',
      label: 'custom lbl',
      initialValue: 'custom',
      required: false,
      component: CustomField,
      componentParams: {}
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

    // props.refs.current["custom"].doSomething();
  },
  afterValueChange(values, context, contextApi) {
    console.log(values);

    contextApi.applyFieldDisabled({ custom: values.foo === 'bar' });
  },
  onSubmitSuccess(data) {
    console.log("onValid submit", data);
  },
  onSubmitError(errors) {
    console.log("onInvalid submit", errors);
  },
  onMounted(context) {
    console.log("on mounted event: ", context.formId);

    // context.fieldRefs.current["custom"].doSomething();
  },
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
}

export default function Manipulation(props: IManipulationProps) {

  return (
    <div>
      Manipulation page
      <ContainerProvider {...containerProps}></ContainerProvider>
    </div>
  );
}

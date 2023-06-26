import * as React from 'react';
import { ContainerProvider } from '@/package/naraka/manipulation-container';
import { ContainerProviderProps, ContainerRef } from '@/package/naraka/manipulation-container/types';
import Input from '@mui/base/Input';
import CustomField from './CustomField';
import { DefaultDataBlock } from '@/package/naraka/manipulation-container-ext'
import { Selector } from '@/package/deva/select';
export interface IManipulationProps {
}



export default function Manipulation(props: IManipulationProps) {

  const formRef = React.useRef<ContainerRef>(null);

  return (
    <div>
      Manipulation page
      <ContainerProvider {...containerProps} ref={formRef}></ContainerProvider>
      <button onClick={() => { formRef.current?.submitForm() }}>Submit</button>
      <button onClick={() => { console.log(formRef.current?.getFormValues()); }}>Get Values</button>
      <button onClick={() => { formRef.current?.setFieldValues('foo', 'bar', true); }}>Set foo value</button>
      <button onClick={() => { formRef.current?.resetFormValues(); }}>reset</button>
      <button onClick={() => { formRef.current?.applyFieldMessage({ foo: { type: 'warning', message: "This is custom warning message" } }); }}>push msg</button>
      <button onClick={() => { formRef.current?.applyFieldMessage(); }}>clear msg</button>
    </div>
  );
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
      name: 'selector',
      label: 'Selector lbl',
      initialValue: 'Legolas',
      required: false,
      component: Selector,
      componentParams: {
        itemDefs: [
          {
            label: 'Hobbits',
            itemDefs: [
              {
                label: 'Frodo',
                value: 'Frodo'
              },
              {
                label: 'Sam',
                value: 'Sam'
              },
              {
                label: 'Merry',
                value: 'Merry'
              }
            ]
          },
          {
            label: 'Elves',
            itemDefs: [
              {
                label: 'Elves',
                itemDefs: [
                  {
                    label: 'Legolas',
                    value: 'Legolas'
                  },
                  {
                    label: 'Arwen',
                    value: 'Arwen'
                  }
                ]
              },
              {
                label: 'Legolas',
                value: 'Legolas'
              },
              {
                label: 'Arwen',
                value: 'Arwen'
              }
            ]
          }
        ]
      }
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
  dataBlockComponent: DefaultDataBlock,
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

import * as React from 'react';
import { ContainerProvider } from '@/package/naraka/manipulation-container';
import { ContainerProviderProps, ContainerRef } from '@/package/naraka/manipulation-container/types';
import Input from '@mui/base/Input';
import CustomField from './CustomField';
import { DefaultDataBlock } from '@/package/naraka/manipulation-container-ext'
import { SelectWrapper, ISelectWrapperProps } from '@/package/deva/select';
import { InputWrapper, IInputWrapperProps } from '@/package/deva/input';
import { SelectWrapper as SelectWrapper2, ISelectWrapperProps as ISelectWrapperProps2 } from '@/package/deva/select2';
import { SelectWrapper as SelectWrapper3, ISelectWrapperProps as ISelectWrapperProps3 } from '@/package/deva/select3';
import { Box } from '@mui/system';

export interface IManipulationProps {
}



export default function Manipulation(props: IManipulationProps) {

  const formRef = React.useRef<ContainerRef>(null);

  return (
    <div>
      Manipulation page
      <Box
        sx={{
          backgroundColor: 'background.paper',
          border: '1px solid',
          padding: '3px',
        }}
      >
        <ContainerProvider {...containerProps} ref={formRef}></ContainerProvider>
        <button onClick={() => { formRef.current?.submitForm() }}>Submit</button>
        <button onClick={() => { console.log(formRef.current?.getFormValues()); }}>Get Values</button>
        <button onClick={() => { formRef.current?.setFieldValues('foo', 'bar', true); }}>Set foo value</button>
        <button onClick={() => { formRef.current?.resetFormValues(); }}>reset</button>
        <button onClick={() => { formRef.current?.applyFieldMessage({ foo: { type: 'warning', message: "This is custom warning message" } }); }}>push msg</button>
        <button onClick={() => { formRef.current?.applyFieldMessage(); }}>clear msg</button>
      </Box>
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
      component: SelectWrapper,
      componentParams: {
        datasourceConfig: {
          url: "http://127.0.0.1:3658/m1/370198-0-default/fr/component/select/options",
          swrOptions: {
            refreshInterval: 0,
          }
        },
      } as ISelectWrapperProps<any, false>,
    },
    {
      name: 'selector3',
      label: 'Selector3 lbl',
      initialValue: 'Legolas',
      required: false,
      component: SelectWrapper3,
      componentParams: {
        datasourceConfig: {
          url: "http://127.0.0.1:3658/m1/370198-0-default/fr/component/select/options",
          swrOptions: {
            refreshInterval: 0,
          }
        },
        // maxListBoxHeight: '300px'
      } as ISelectWrapperProps3<any, false>,
    },
    {
      name: 'first_name',
      label: 'first_name lbl',
      initialValue: '',
      component: InputWrapper,
      componentParams: { placeholder: "first name" } as IInputWrapperProps
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
      label: 'Age lbl',
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
  },
  defaultFieldRaito: '30% 70%'
}

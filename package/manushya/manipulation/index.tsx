import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ContainerProvider } from '@/package/naraka/manipulation-container';
import { ContainerProviderProps, ContainerRef } from '@/package/naraka/manipulation-container/types';
import Input from '@mui/base/Input';
import CustomField from './CustomField';
import { DefaultDataBlock } from '@/package/naraka/manipulation-container-ext'
import SelectWrapper, { ISelectWrapperProps } from '@/package/deva/select';
import InputWrapper, { IInputWrapperProps } from '@/package/deva/input';
import { Box } from '@mui/system';
import Pagination from '@/package/deva/pagination';
import InputNumberWrapper, { IInputNumberWrapperProps } from '@/package/deva/input-number'
import ButtonWrapper, { IButtonWrapperProps } from '@/package/deva/button';
import ModalWrapper, { ContextApi as ModalContextApi, ContextState as ModalContextState } from '@/package/deva/modal';
import TabsWrapper from '@/package/deva/tabs';

export interface IManipulationProps {
}



export default function Manipulation(props: IManipulationProps) {

  const formRef = React.useRef<ContainerRef>(null);

  return (
    <div>
      Manipulation page
      <TabsWrapper tabDefs={[
        { title: 'Tab 1', id: 'tab1' },
        { title: 'Tab 2', id: 'tab2' },
        { title: 'Tab 3', id: 'tab3' }
      ]}></TabsWrapper>
      <ModalWrapper
        title="Đây là title"
        footerDefs={[
          { label: 'Confirm', colorType: 'success' },
          { label: 'Load', colorType: 'warning' },
          {
            label: 'Cancel',
            color: 'transparent',
            textColor: 'primary',
            border: true,
            onClick: (context?: ModalContextState, contextApi?: ModalContextApi) => {
              contextApi?.commitOpen(false);
            }
          }
        ]}
      ></ModalWrapper>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          border: '1px solid',
          padding: '3px',
        }}
      >
        <ContainerProvider {...containerProps} ref={formRef}></ContainerProvider>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 1,
            marginTop: '10px'
          }}
        >
          <ButtonWrapper
            icon={<FontAwesomeIcon icon={faCheck} />}
            onClick={() => { formRef.current?.submitForm() }}
          >
            Submit
          </ButtonWrapper>
          <ButtonWrapper
            onClick={() => { console.log(formRef.current?.getFormValues()); }}
            color='transparent'
            border
            textColor='primary'
            disabled={false}
          >
            Get Values
          </ButtonWrapper>
          <button onClick={() => { formRef.current?.setFieldValues('foo', 'bar', true); }}>Set foo value</button>
          <button onClick={() => { formRef.current?.resetFormValues(); }}>reset</button>
          <button onClick={() => { formRef.current?.applyFieldMessage({ foo: { type: 'warning', message: "This is custom warning message" } }); }}>push msg</button>
          <button onClick={() => { formRef.current?.applyFieldMessage(); }}>clear msg</button>
        </Box>
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
      name: 'selector2',
      label: 'Selector2 lbl',
      initialValue: [],
      required: false,
      component: SelectWrapper,
      componentParams: {
        itemDefs: [
          { label: "1", value: 1, disabled: true },
          { label: "2", value: 2 },
          { label: "3", value: 3, disabled: true },
          { label: "4", value: 4 },
          { label: "5", value: 5 },
          { label: "6", value: 6 },
          { label: "6", value: 6 },
          { label: "7", value: 7 },
          { label: "8", value: 8 },
          { label: "9", value: 9 },
          { label: "10", value: 10 },
          { label: "11", value: 11 },
          { label: "12", value: 12 },
          { label: "13", value: 13 },
          { label: "13", value: 13 },
          { label: "14", value: 14 },
          { label: "15", value: 15 },
          { label: "16", value: 16 }
        ],
        datasourceConfig: {
          url: "http://127.0.0.1:3658/m1/370198-0-default/fr/component/select/options",
          swrOptions: {
            refreshInterval: 0,
          }
        },
        multiple: true,
      } as ISelectWrapperProps<any, true>,
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
      name: 'last_name2',
      label: 'last_name2 lbl',
      initialValue: '',
      component: Input,
      componentParams: { type: 'text', placeholder: 'last_name' }
    },
    {
      name: 'age',
      label: 'Age lbl',
      initialValue: 1,
      component: InputNumberWrapper,
      componentParams: { placeholder: 'Nhập số đê...', min: 1, max: 100 } as unknown as IInputNumberWrapperProps
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

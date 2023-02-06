import {
  Button,
  Input
} from '@packages/slytherin';

import SlytherinDialogActivator from '@packages/slytherin/dialog/collector/Activator';
import SlytherinDialogContent from '@packages/slytherin/dialog/collector/Content';
import SlytherinDialog from '@packages/slytherin/dialog/DialogWrapper';
// 
import Form from '@packages/gryffindor/form/FormWrapper';
//
import SlytherinTabbedDialogActivator from '@packages/slytherin/tabbed-dialog/collector/Activator';
import SlytherinTabbedDialogTabItem from '@packages/slytherin/tabbed-dialog/collector/TabItem';
import SlytherinTabbedDialog from '@packages/slytherin/tabbed-dialog/TabbedDialogWrapper';
//
import axios from 'axios';
import useSWR, { Fetcher, Key } from 'swr';
//

import React from 'react';

const DemoPage = () => {
  const formRef = React.useRef<any>(null);

  const uid: Key = () => { return [`https://datausa.io/api/data?drilldowns=Nation&measures=Population`] };
  const fetcher: Fetcher<any, string> = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data, error, isLoading, isValidating } = useSWR(uid, fetcher);

  console.log(data, error, isLoading, isValidating);


  return (
    <>
      {/* SlytherinDialog */}
      <SlytherinDialog
        title="Đây là title"
        initialHeight={500}
        initialWidth={600}
        minHeight={200}
        // maxHeight={800}
        minWidth={600}
        actions={[
          { key: "key-0001", label: "Xác nhận", disabled: false, visible: true, others: { theme: 'primary' } },
          { key: "key-0002", label: "Hủy", disabled: false, visible: true, isClose: true },
        ]}
        onActiveAction={(event, actionDef, context, helper) => {
          let { key } = actionDef;
          if (key === 'key-0001') {
            formRef.current?.submit();

            let values = formRef.current?.getValues();

            console.log(" Giá trị này được lấy tại button của dialog chứa form", values);

            return { isClose: false }
          }

          if (key === 'key-0002') {
            console.log(" Làm một vài thứ gì đó rồi ấn nút cancel");

            return { isClose: false }
          }

          return { isClose: false }
        }}
      >
        <SlytherinDialogActivator>
          <Button disabled={false} theme="primary">
            Open dialog
          </Button>
        </SlytherinDialogActivator>
        <SlytherinDialogContent>
          <Form
            fields={[
              { name: 'first_name', initialValue: "first name", component: Input, componentParams: { className: 'w-full' } },
              { name: 'last_name', initialValue: "Last name", component: Input, componentParams: { className: 'w-full' } },
              { name: 'full_name', initialValue: "", component: Input, componentParams: { className: 'w-full' } },
              { name: 'age', initialValue: 18, component: Input, componentParams: { className: 'w-full' } },
            ]}
            formLayout={{
              column: 2,
              field: {
                labelWidth: '200px',
                labelAlign: 'left'
              }
            }}
            general={{
              formMode: "all",
              reValidateMode: "onChange",
              criteriaMode: 'all',
              shouldFocusError: true,
              delayError: 0
            }}
            refreshRuleConfig={{
              onMounted: ['disabled', 'visible'],
              onChange: ['disabled', 'visible', 'valid']
            }}
            refreshRule={(rule, cMode) => {
              console.log(`apply rules: '${rule}' on mode: '${cMode}'`)
            }}
            onMounted={(context) => {
              console.log("trigger on mounted event", context);
            }}
            onValidate={(data, context, helper) => {
              console.log("trigger on validate event", data);

              if (!data.full_name) {
                return {
                  values: data,
                  errors: {
                    full_name: {
                      type: 'custom',
                      message: 'This is required.',
                    }
                  }
                }
              }

              return {
                values: data,
                errors: {}
              }
            }}
            onSubmitSuccess={(data, context, helper) => {
              console.log("Trigger on submit success", data);
            }}
            onSubmitError={(data, context, helper) => {
              console.log("Trigger on submit error", data);
            }}
            onChange={(props) => {
              console.log("Trigger on change", props);
            }}
            ref={formRef}
          ></Form>
        </SlytherinDialogContent>
      </SlytherinDialog>
      {/* SlytherinTabbedDialog */}
      <SlytherinTabbedDialog
        title="Đây là title"
        defaultValue="id-000"
        destroyInactiveTabPane={false}
        initialHeight={500}
        initialWidth={600}
        minHeight={200}
        minWidth={600}
        actions={[
          { key: "key-0001", label: "Xác nhận", disabled: false, visible: true, others: { theme: 'primary' } },
          { key: "key-0002", label: "Hủy", disabled: false, visible: true, isClose: true },
        ]}
        onActiveAction={(event, actionDef, context, helper) => {
          let { key } = actionDef;
          if (key === 'key-0001') {
            formRef.current?.submit();

            let values = formRef.current?.getValues();

            console.log(" Giá trị này được lấy tại button của dialog chứa form", values);

            return { isClose: false }
          }

          if (key === 'key-0002') {
            console.log(" Làm một vài thứ gì đó rồi ấn nút cancel");

            return { isClose: false }
          }

          return { isClose: false }
        }}
      >
        <SlytherinTabbedDialogActivator>
          <Button disabled={false} theme="primary">
            Open tabbed dialog
          </Button>
        </SlytherinTabbedDialogActivator>
        <SlytherinTabbedDialogTabItem id="id-000" label="label 000">
          <div className='w-[1000px] h-[800px] bg-red-400'>Tab panel 000</div>
        </SlytherinTabbedDialogTabItem>
        <SlytherinTabbedDialogTabItem id="id-001" label="label 001">
          <Form
            fields={[
              { name: 'first_name', initialValue: "first name", component: Input, componentParams: { className: 'w-full' } },
              { name: 'last_name', initialValue: "Last name", component: Input, componentParams: { className: 'w-full' } },
              { name: 'full_name', initialValue: "", component: Input, componentParams: { className: 'w-full' } },
              { name: 'age', initialValue: 18, component: Input, componentParams: { className: 'w-full' } },
            ]}
            formLayout={{
              column: 2,
              field: {
                labelWidth: '200px',
                labelAlign: 'left'
              }
            }}
            general={{
              formMode: "all",
              reValidateMode: "onChange",
              criteriaMode: 'all',
              shouldFocusError: true,
              delayError: 0
            }}
            refreshRuleConfig={{
              onMounted: ['disabled', 'visible'],
              onChange: ['disabled', 'visible', 'valid']
            }}
            refreshRule={(rule, cMode) => {
              console.log(`apply rules: '${rule}' on mode: '${cMode}'`)
            }}
            onMounted={(context) => {
              console.log("trigger on mounted event", context);
            }}
            onValidate={(data, context, helper) => {
              console.log("trigger on validate event", data);

              if (!data.full_name) {
                return {
                  values: data,
                  errors: {
                    full_name: {
                      type: 'custom',
                      message: 'This is required.',
                    }
                  }
                }
              }

              return {
                values: data,
                errors: {}
              }
            }}
            onSubmitSuccess={(data, context, helper) => {
              console.log("Trigger on submit success", data);
            }}
            onSubmitError={(data, context, helper) => {
              console.log("Trigger on submit error", data);
            }}
            onChange={(props) => {
              console.log("Trigger on change", props);
            }}
            ref={formRef}
          ></Form>
        </SlytherinTabbedDialogTabItem>
        <SlytherinTabbedDialogTabItem id="id-002" label="label 002">
          <div className='w-[1000px] h-[800px] bg-blue-400'>Tab panel 002</div>
        </SlytherinTabbedDialogTabItem>
      </SlytherinTabbedDialog>
      {/* Fetch data */}
    </>
  );
};

export default DemoPage;

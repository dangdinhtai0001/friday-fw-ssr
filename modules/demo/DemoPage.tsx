import {
  Button,
  Input
} from '@packages/slytherin';

import GryffindorDialogActivator from '@packages/gryffindor/dialog/collector/Activator';
import GryffindorDialogContent from '@packages/gryffindor/dialog/collector/Content';
import GryffindorDialog from '@packages/gryffindor/dialog/DialogWrapper';
// 
import Form from '@packages/gryffindor/form/FormWrapper';
//
import GryffindorTabbedDialogActivator from '@packages/gryffindor/tabbed-dialog/collector/Activator';
import GryffindorTabbedDialogTabItem from '@packages/gryffindor/tabbed-dialog/collector/TabItem';
import GryffindorTabbedDialog from '@packages/gryffindor/tabbed-dialog/TabbedDialogWrapper';

import React from 'react';

const DemoPage = () => {
  const formRef = React.useRef<any>(null);

  return (
    <>
      {/* GryffindorTabs */}
      {/* <GryffindorTabs defaultValue="id-000" destroyInactiveTabPane={false}>
        <GryffindorTabItem id="id-000" label="label 000">
          <div className='bg-amber-300'>Tab panel 000</div>
        </GryffindorTabItem>
        <GryffindorTabItem id="id-001" label="label 001">
          <div>Tab panel 001</div>
        </GryffindorTabItem>
      </GryffindorTabs> */}
      {/* GryffindorDialog */}
      <GryffindorDialog
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
        <GryffindorDialogActivator>
          <Button disabled={false} theme="primary">
            Open dialog
          </Button>
        </GryffindorDialogActivator>
        <GryffindorDialogContent>
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
        </GryffindorDialogContent>
      </GryffindorDialog>
      {/* GryffindorTabbedDialog */}
      <GryffindorTabbedDialog
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
        <GryffindorTabbedDialogActivator>
          <Button disabled={false} theme="primary">
            Open tabbed dialog
          </Button>
        </GryffindorTabbedDialogActivator>
        <GryffindorTabbedDialogTabItem id="id-000" label="label 000">
          <div className='w-[1000px] h-[800px] bg-red-400'>Tab panel 000</div>
        </GryffindorTabbedDialogTabItem>
        <GryffindorTabbedDialogTabItem id="id-001" label="label 001">
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
        </GryffindorTabbedDialogTabItem>
        <GryffindorTabbedDialogTabItem id="id-002" label="label 002">
          <div className='w-[1000px] h-[800px] bg-blue-400'>Tab panel 002</div>
        </GryffindorTabbedDialogTabItem>
      </GryffindorTabbedDialog>
    </>
  );
};

export default DemoPage;

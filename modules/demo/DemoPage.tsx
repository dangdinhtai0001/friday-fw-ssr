import {
  Button,
  Dialog,
  DialogActivator,
  DialogContent,
  DialogExtraHeader,
  Input,
  TabItem,
  TabbedDialog,
  Tabs,
} from '@packages/slytherin';

import Form from '@packages/gryffindor/form/FormWrapper';

import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const DemoPage = () => {
  const formRef = React.useRef<any>(null);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button
          disabled={false}
          onClick={() => console.log('click!')}
          color="#50d71e"
        >
          Hello World
        </Button>

        <Button
          useBorder={false}
          // theme='danger'
          onClick={() => console.log('click!')}
          icon={<AiFillCloseCircle className='scale-[1.2] h-full w-full fill-th-danger ' />}
        >

        </Button>
      </div>

      <div>
        <Tabs defaultValue="id-000" destroyInactiveTabPane={true}>
          <TabItem id="id-000" label="label 000">
            <div className=''>Tab panel 000</div>
          </TabItem>
          <TabItem id="id-001" label="label 001">
            <div>Tab panel 001</div>
          </TabItem>
        </Tabs>
      </div>
      <div>
        <Dialog
          title="Đây là title"
          initialHeight={500}
          initialWidth={600}
          minHeight={200}
          minWidth={600}
          actions={[
            { key: "key-0001", label: "Xác nhận", disabled: false, visible: true, others: { theme: 'primary' } },
            { key: "key-0002", label: "Hủy", disabled: false, visible: true, },
          ]}
          onActiveAction={(event, key, context, helper) => {
            if (key === 'key-0001') {
              formRef.current?.submit();
            }

            if (key === 'key-0002') {
              helper.commitOpened(false);
            }
          }}
        >
          <DialogExtraHeader>
            <div>Đây là phần header mở rộng</div>
          </DialogExtraHeader>
          <DialogActivator>
            <Button disabled={false} theme="primary">
              Open dialog
            </Button>
          </DialogActivator>
          <DialogContent>
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
          </DialogContent>
        </Dialog>
      </div>
      {/* ======================================================================================================== */}
      <div className='px-[10px] py-[5px]'>
        <Input
          onChange={(e) => {
            console.log(e);
          }}
          placeholder='Đây là placeholder...'
          required readOnly={false} disabled={false}
          className=' bg-red-100'></Input>
      </div>
      {/* ======================================================================================================== */}
      <div>
        <TabbedDialog
          title="Đây là title"
          defaultValue="id-000"
          destroyInactiveTabPane={true}
          initialHeight={500}
          initialWidth={600}
          minHeight={200}
          minWidth={600}
          actions={[
            { key: "key-0001", label: "Xác nhận", disabled: false, visible: true, others: { theme: 'primary' } },
            { key: "key-0002", label: "Hủy", disabled: true, visible: true, },
          ]}
          onActiveAction={(event, key, context, helper) => {
            if (key === 'key-0001') {
              helper.applyDisable('key-0002', false);
            }
          }}
        >
          <DialogActivator>
            <Button disabled={false} theme="primary">
              Open tabbed dialog
            </Button>
          </DialogActivator>
          <TabItem id="id-000" label="label 000">
            <div className='w-[1000px] h-[800px] bg-red-400'>Tab panel 000</div>
          </TabItem>
          <TabItem id="id-001" label="label 001">
            <div>Tab panel 001</div>
          </TabItem>
        </TabbedDialog>
      </div>
      {/* ======================================================================================================== */}

      <Form
        fields={[
          { name: 'first_name', initialValue: "first name", component: Input, componentParams: { className: 'w-full' } },
          { name: 'last_name', initialValue: "Last name", component: Input, componentParams: { className: 'w-full' } },
          { name: 'divider', label: 'divider - ', isDivider: true },
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

      <button onClick={() => {
        formRef.current?.submit();

        let formState = formRef.current?.getFormState();

        console.log('formState', formState);



      }}>Submit form</button>
    </>
  );
};

export default DemoPage;

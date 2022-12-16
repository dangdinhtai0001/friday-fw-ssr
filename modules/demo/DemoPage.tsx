import {
  Button,
  Dialog,
  DialogActivator,
  DialogContent,
  DialogExtraHeader,
  TabItem,
  Tabs,
} from '@packages/slytherin';

import { AiFillCloseCircle } from 'react-icons/ai';

const DemoPage = () => {
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
          border={false}
          theme='danger'
          onClick={() => console.log('click!')}
          icon={<AiFillCloseCircle className='scale-[1.6] h-full w-full fill-th-danger' />}
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
            { key: "key-0002", label: "Hủy", disabled: true, visible: true, },
          ]}
          onActiveAction={(event, key, context, helper) => {
            if (key === 'key-0001') {
              helper.applyDisable('key-0002', false);
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
            <Tabs defaultValue="id-000" destroyInactiveTabPane={true}>
              <TabItem id="id-000" label="label 000">
                <div className='w-[1000px] h-[800px] bg-red-400'>Tab panel 000</div>
              </TabItem>
              <TabItem id="id-001" label="label 001">
                <div>Tab panel 001</div>
              </TabItem>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default DemoPage;

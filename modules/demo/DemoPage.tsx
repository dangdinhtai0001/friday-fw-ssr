import {
  Button,
  Dialog,
  DialogActivator,
  DialogContent,
  TabItem,
  Tabs,
} from '@packages/slytherin';

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
      </div>
      <div>
        <Tabs defaultValue="id-000" destroyInactiveTabPane={true}>
          <TabItem id="id-000" label="label 000">
            <div className='w-[1000px] h-[800px] bg-red-400'>Tab panel 000</div>
          </TabItem>
          <TabItem id="id-001" label="label 001">
            <div>Tab panel 001</div>
          </TabItem>
        </Tabs>
      </div>
      <div>
        <Dialog title="Đây là title" initialHeight={500}>
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

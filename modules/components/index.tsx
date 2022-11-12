import ButtonContainer from "./ButtonContainer";
import { Dialog } from "@components/dialog";
import Button from "@components/button";

export interface ComponentPageProps { }

const Page = (props: ComponentPageProps) => {
  return (
    <div className="w-full h-screen bg-th-background">
      <div className="w-full flex flex-col px-[30%]">
        <div className="mb-5 text-[2rem] font-[400]">Basic Elements</div>
        {/* ================================================================================= */}
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Button</div>
        <ButtonContainer />
        {/* ================================================================================= */}
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Modal</div>
        <Dialog
          title='Đây là title'
          actionDefs={[
            { key: 'cancel', label: 'Hủy', disabled: false, visible: true, type: 'transparent' },
            { key: 'ok', label: 'Xác nhận', disabled: false, visible: true, type: 'primary' }
          ]}
          onDialogEvent={({ key, hook }) => {
            if (key === 'cancel') {
              hook.updateVisible(false);
            }
          }}
        >
          <Dialog.Activator>
            <Button type='primary' block={false} >
              open modal
            </Button>
          </Dialog.Activator>
          <Dialog.Container>
            <div className='h-[500px] w-[700px] border-2'>123456</div>
          </Dialog.Container>
        </Dialog>
        {/* ================================================================================= */}
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Tabs</div>
        {/* ================================================================================= */}
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Input</div>
        {/* ================================================================================= */}
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Select</div>
        {/* ================================================================================= */}
      </div>
    </div>
  );
};

export default Page;

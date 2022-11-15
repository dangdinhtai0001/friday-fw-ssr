import { Dialog } from "@components/dialog";
import Button from "@components/button";

const DialogContainer = () => {
    return (
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
    )
}

export default DialogContainer;
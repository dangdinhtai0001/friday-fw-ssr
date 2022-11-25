import DialogTab from "@components/dialog-tab/DialogTab";
import Button from "@components/button";

const DialogTabContainer = () => {
    return (
        <DialogTab
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
            initWidth='60vw'
            initHeight="80vh"
            maxWidth='90vw'
            maxHeight='90vh'
            minHeight='50vh'
            minWidth='50vw'
        >
            <DialogTab.Activator>
                <Button type='primary' block={false} >
                    open modal
                </Button>
            </DialogTab.Activator>
            <DialogTab.TabPanel label='label 1' key='key1'>
                <div className="bg-red-300 w-[70vw] h-[70vh]">1</div>
            </DialogTab.TabPanel>
            <DialogTab.TabPanel label='label 2' key='key2'>
                <div>2</div>
            </DialogTab.TabPanel>
            <DialogTab.TabPanel label='label 3' key='key3'>
                <div>3</div>
            </DialogTab.TabPanel>
            <DialogTab.TabPanel label='label 4' key='key4'>
                <div>4</div>
            </DialogTab.TabPanel>
        </DialogTab>
    )
}

export default DialogTabContainer;
import { Button, Dialog, DialogActivator, TabItem, Tabs } from '@packages/slytherin';

const DemoPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>
                <Button
                    disabled={false}
                    onClick={() => console.log('click!')}
                    color='red'
                >
                    Hello World
                </Button>
            </div>
            <div>
                <Tabs defaultValue="id-000" destroyInactiveTabPane={true}>
                    <TabItem id="id-000" label="label 000">
                        <div>Tab panel 000</div>
                    </TabItem>
                    <TabItem id="id-001" label="label 001">
                        <div>Tab panel 001</div>
                    </TabItem>
                </Tabs>
            </div>
            <div>
                <Dialog>
                    <DialogActivator>
                        <Button
                            disabled={false}
                            onClick={() => console.log('click!')}
                            color='red'
                        >
                            Open dialog
                        </Button>
                    </DialogActivator>
                    <div>
                        <h2 id="unstyled-modal-title">Text in a modal</h2>
                        <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
                    </div>
                </Dialog>
            </div>
        </>
    );
}

export default DemoPage;
import { Button, TabItem, Tabs } from '@packages/slytherin';

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
                <Tabs defaultValue="id-000" orientation="vertical">
                    <TabItem id="id-000" label="label 000">
                        <div>Tab panel 000</div>
                    </TabItem>
                    <TabItem id="id-001" label="label 001">
                        <div>Tab panel 001</div>
                    </TabItem>
                </Tabs>
            </div>
        </>
    );
}

export default DemoPage;
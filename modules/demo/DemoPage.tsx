import { Button } from '@packages/slytherin';

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
                    // style={{
                    //     backgroundColor: 'red'
                    // }}
                    color='red'
                >
                    Hello World
                </Button>
            </div>
        </>);
}

export default DemoPage;
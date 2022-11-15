import { Resizable } from 're-resizable';
const TabsContainer = () => {
    return <>

        <Resizable
            defaultSize={{
                width: 320,
                height: 200,
            }} className='border-2'
        >
            Sample with default size
        </Resizable>
    </>;
}

export default TabsContainer;
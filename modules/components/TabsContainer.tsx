import Tabs from '@components/tabs/Tabs'
const TabsContainer = () => {
    return <>
        <Tabs>
            <Tabs.TabPanel label='label 1' key='key1'>
                <div>1</div>
            </Tabs.TabPanel>
            <Tabs.TabPanel label='label 2' key='key2'>
                <div>2</div>
            </Tabs.TabPanel>
            <Tabs.TabPanel label='label 3' key='key3'>
                <div>3</div>
            </Tabs.TabPanel>
            <Tabs.TabPanel label='label 4' key='key4'>
                <div>4</div>
            </Tabs.TabPanel>
        </Tabs>
    </>;
}

export default TabsContainer;
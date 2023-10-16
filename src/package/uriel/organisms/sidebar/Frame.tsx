import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text, TabIndicator, Icon } from '@chakra-ui/react';
import { PiDotOutlineBold } from 'react-icons/pi';

import { useApplicationStore } from '@package/raphael/stores/application';
import { NestedMenu } from '@package/uriel/molecules/nested-menu';
export default function Frame() {
    const favorites = useApplicationStore(state => state.favorites);
    const recently = useApplicationStore(state => state.recently);

    return (
        <>
            {/* Saved content frame  */}
            <Tabs
                variant="unstyled"
                pb='measurement.12'
                position="relative"
                isLazy={true}
            >
                <TabList borderRadius='measurement.8'>
                    <Tab textAlign='center'>
                        <Text color='black.40' textStyle='14.regular'> Favorites </Text>
                    </Tab>
                    <Tab>
                        <Text color='black.40' textStyle='14.regular'> Recently </Text>
                    </Tab>
                </TabList>
                <TabIndicator
                    mt="-2px"
                    height="measurement.2"
                    bg="black.100"
                    borderRadius="measurement.2"
                />
                <TabPanels>

                    <TabPanel as={Flex} direction='column'
                        alignItems='flex-start'
                        gap='measurement.4'
                        alignSelf='stretch'
                    >
                        {favorites.map((item, index) => (
                            renderContent(item.displayName, index)
                        ))}
                    </TabPanel>
                    <TabPanel as={Flex} direction='column'
                        alignItems='flex-start'
                        gap='measurement.4'
                        alignSelf='stretch'
                    >
                        {recently.map((item, index) => (
                            renderContent(item.displayName, index)
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
            {/* routes frame */}
            <NestedMenu />
        </>
    );
};

function renderContent(text: string, key: number) {
    return (
        <Flex
            key={key}
            py='measurment.4'
            px='measurement.8'
            alignItems='center'
            alignContent='center'
            gap='measurement.8'
            alignSelf='stretch'
            borderRadius='measurement.8'
            flex='1 0 0'
        >
            <Icon as={PiDotOutlineBold} color='black.40' />
            <Text color='black.100' textStyle='14.regular'>{text}</Text>
        </Flex>
    )
};

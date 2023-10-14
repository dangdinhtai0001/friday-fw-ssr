import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text, TabIndicator, Icon } from '@chakra-ui/react';
import { PiDotOutlineBold } from 'react-icons/pi';

import { ISidebarFavoriteProps } from './_types.d';

function SidebarFavorite(props: ISidebarFavoriteProps) {
    const { favorites, recently } = props;
    return (
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
                        renderContent(item.display, index)
                    ))}
                </TabPanel>
                <TabPanel as={Flex} direction='column'
                    alignItems='flex-start'
                    gap='measurement.4'
                    alignSelf='stretch'
                >
                    {recently.map((item, index) => (
                        renderContent(item.display, index)
                    ))}
                </TabPanel>
            </TabPanels>
        </Tabs>
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

export default SidebarFavorite;
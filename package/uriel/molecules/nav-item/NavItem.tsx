import { Box, Flex, Menu, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { INavItemProps } from './_type';

function NavItem(props: INavItemProps) {
    const { title, items = [] } = props;

    return (
        <>
            {items.length <= 0 ? (
                <Text>{title}</Text>
            ) : (
                <Accordion allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <Text>{title}</Text>
                        </AccordionButton>
                        <AccordionPanel>
                            <Box marginLeft={3}>
                                {items.map((item, index) => (
                                    <NavItem {...item} key={index}></NavItem>
                                ))}
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            )}
        </ >
    );
};

export default NavItem;

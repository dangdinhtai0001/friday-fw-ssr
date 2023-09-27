import { Box, Flex, Menu, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import NavItem from './NavItem';
import { INavItemProps } from './_type';

function NavItemList(props: INavItemProps) {
    const { title, items = [] } = props;

    return (
        <>
            {items.length <= 0 ? (
                <NavItem {...props}></NavItem>
            ) : (
                <Accordion allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <NavItem {...props}></NavItem>
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

export default NavItemList;
